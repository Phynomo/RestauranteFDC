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
    public class MunicipiosController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public MunicipiosController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoMunicipios();
            return Ok(list);
        }

        [HttpPost("InsertarMunicipios")]
        public IActionResult Insert(MunicipioViewModel muni)
        {
            var item = _mapper.Map<tbMunicipios>(muni);
            var response = _generalServivce.InsertarMunicipios(item);
            return Ok(response);
        }

        [HttpPut("EditarMunicipios")]
        public IActionResult Edit(MunicipioViewModel muni)
        {
            var item = _mapper.Map<tbMunicipios>(muni);
            var response = _generalServivce.EditarMunicipios(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(MunicipioViewModel municipio)
        {
            var item = _mapper.Map<tbMunicipios>(municipio);
            var result = _generalServivce.EliminarMunicipios(item);
            return Ok(result);
        }

        [HttpGet("CargarMunicipios")]
        public IActionResult Cargar(int id)
        {
            var list = _generalServivce.CargarMunicipios(id);
            return Ok(list);
        }
    }
}
