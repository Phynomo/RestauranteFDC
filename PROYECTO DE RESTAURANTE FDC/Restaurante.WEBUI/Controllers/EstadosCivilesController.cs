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
    public class EstadosCivilesController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public EstadosCivilesController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoEstadosCiviles();
            return Ok(list);
        }


        [HttpPost("InsertarEstadoCivil")]
        public IActionResult InsertarEstadosciviles(EstadoCivilViewModel estado)
        {
            var item = _mapper.Map<tbEstadosCiviles>(estado);
            var response = _generalServivce.InsertarStates(item);
            return Ok(response);
        }
    }
}
