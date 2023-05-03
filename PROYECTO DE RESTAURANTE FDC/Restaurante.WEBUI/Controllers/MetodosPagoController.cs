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
    public class MetodosPagoController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public MetodosPagoController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoMetodosPago();
            return Ok(list);
        }

        public class pago
        {
            public int metp_Id { get; set; }
            public string metp_Descripcion { get; set; }
            public int metp_UsuCreacion { get; set; }
            public DateTime metp_FechaCreacion { get; set; }
            public int? metp_UsuModificacion { get; set; }
            public DateTime? metp_FechaModificacion { get; set; }
            public bool? metp_Estado { get; set; }

        }

        [HttpPost("InsertarMetodoPago")]
        public IActionResult InsertarCargo(pago metodos)
        {
            tbMetodosPago pag = new()
            {
                metp_Descripcion = metodos.metp_Descripcion,
                metp_UsuCreacion = metodos.metp_UsuCreacion,

            };

            var response = _generalServivce.InsertarMetodos(pag);
            return Ok(response);
        }
    }
}
