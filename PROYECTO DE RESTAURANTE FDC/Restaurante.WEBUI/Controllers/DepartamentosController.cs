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
    public class DepartamentosController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public DepartamentosController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoDepartamentos();
            return Ok(list);
        }

        public class depto {
            public int depa_Id { get; set; }
            public string depa_Nombre { get; set; }
            public string depa_Codigo { get; set; }
            public int depa_UsuCreacion { get; set; }
            public DateTime depa_FechaCreacion { get; set; }
            public int? depa_UsuModificacion { get; set; }
            public DateTime? depa_FechaModificacion { get; set; }
            public bool? depa_Estado { get; set; }

        } 

        [HttpPost("InsertarDepartamento")]
        public IActionResult InsertarUsuario(depto departamentos)
        {
            tbDepartamentos depto = new()
            {
                depa_Nombre = departamentos.depa_Nombre,
                depa_Codigo = departamentos.depa_Codigo,
                depa_UsuCreacion = departamentos.depa_UsuCreacion

            };
            
            var response = _generalServivce.InsertarDepartamentos(depto);
            return Ok(response);
        }


    }
}
