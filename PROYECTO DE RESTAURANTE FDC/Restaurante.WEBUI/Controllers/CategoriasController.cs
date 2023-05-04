using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.GeneralService;
using Restaurante.Entities.Entities;
using Restaurante.WEBUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public CategoriasController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoCategorias();
            return Ok(list);
        } 
        
        [HttpPost("InsertarCategoria")]
        public IActionResult InsertarCategoria(CategoriaViewModel categoria)
        {
            var item = _mapper.Map<tbCategorias>(categoria);
            var response = _generalServivce.InsertarCategorias(item);
            return Ok(response);
        }
        
        [HttpPut("EditarCategoria")]
        public IActionResult Edit(CategoriaViewModel categoria)
        {

            var item = _mapper.Map<tbCategorias>(categoria);
            var response = _generalServivce.EditarCategorias(item);
            return Ok(response);
        }
    }
}
