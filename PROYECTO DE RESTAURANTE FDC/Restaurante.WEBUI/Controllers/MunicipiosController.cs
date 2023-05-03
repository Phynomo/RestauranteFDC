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

        public class municipio
        {
            public int muni_Id { get; set; }
            public string muni_Nombre { get; set; }
            public string muni_Codigo { get; set; }
            public int depa_Id { get; set; }
            public int muni_UsuCreacion { get; set; }
            public DateTime muni_FechaCreacion { get; set; }
            public int? muni_UsuModificacion { get; set; }
            public DateTime? muni_FechaModificacion { get; set; }
            public bool? muni_Estado { get; set; }


        }

        [HttpPost("InsertarMunicipios")]
        public IActionResult InsertarCargo(municipio muni)
        {
            tbMunicipios munis = new()
            {
                muni_Nombre = muni.muni_Nombre,
                muni_Codigo = muni.muni_Codigo,
                depa_Id = muni.depa_Id,
                muni_UsuCreacion = muni.muni_UsuCreacion

            };

            var response = _generalServivce.InsertarMunicipios(munis);
            return Ok(response);
        }
    }
}
