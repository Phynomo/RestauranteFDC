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
    public class CargosController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public CargosController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoCargos();
            return Ok(list);
        }


        public class cargo
        {
            public int carg_Id { get; set; }
            public string carg_Descripcion { get; set; }
            public int carg_UsuCreacion { get; set; }
            public DateTime? carg_FechaCreacion { get; set; }
            public int? carg_UsuModificacion { get; set; }
            public DateTime? carg_FechaModificacion { get; set; }
            public bool? carg_Estado { get; set; }

        }

        [HttpPost("InsertarCargos")]
        public IActionResult InsertarCargo(cargo cargos)
        {
            tbCargos cargo = new()
            {
                carg_Descripcion = cargos.carg_Descripcion,
                carg_UsuCreacion = cargos.carg_UsuCreacion,
               
            };

            var response = _generalServivce.InsertarCargos(cargo);
            return Ok(response);
        }
        
        [HttpPost("Insertar")]
        public IActionResult Insert(VWCargosViewModel cargo)
        {
            var item = _mapper.Map<tbCargos>(cargo);
            var list = _generalServivce.InsertarCargos(item);
            return Ok(list);
        }
    }
}
