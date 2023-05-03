using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.GeneralService;
using Restaurante.Entities.Entities;
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

        public class state
        {
            public int eciv_Id { get; set; }
            public string eciv_Descripcion { get; set; }
            public int eciv_UsuCreacion { get; set; }
            public DateTime eciv_FechaCreacion { get; set; }
            public int? eciv_UsuModificacion { get; set; }
            public DateTime? eciv_FechaModificacion { get; set; }
            public bool? eciv_Estado { get; set; }


        }

        [HttpPost("InsertarEstadoCivil")]
        public IActionResult InsertarEstadosciviles(state state)
        {
            tbEstadosCiviles estado = new()
            {
               eciv_Descripcion = state.eciv_Descripcion,
               eciv_UsuCreacion = state.eciv_UsuCreacion

            };

            var response = _generalServivce.InsertarStates(estado);
            return Ok(response);
        }
    }
}
