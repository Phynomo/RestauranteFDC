using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.RestauranteService;
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
    public class ClientesController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public ClientesController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoClientes();
            return Ok(list);
        }

        [HttpPost("InsertarClientes")]
        public IActionResult InsertarClientes(ClienteViewModel cargos)
        {
            var item = _mapper.Map<tbClientes>(cargos);
            var response = _restauranteServicio.InsertarClientes(item);
            return Ok(response);
        }

    }
}
