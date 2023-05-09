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
        [HttpGet("MetodoPagoChart")]
        public IActionResult Grafica()
        {
            var list = _generalServivce.ChartMetodoPago();
            return Ok(list);
        }

        [HttpPost("InsertarMetodoPago")]
        public IActionResult InsertarMetodoPago(MetodoPagoViewModel metodos)
        {
            var item = _mapper.Map<tbMetodosPago>(metodos);
            var response = _generalServivce.InsertarMetodos(item);
            return Ok(response);
        }

        [HttpPut("EditarMetodoPago")]
        public IActionResult Edit(MetodoPagoViewModel metodos)
        {
            var item = _mapper.Map<tbMetodosPago>(metodos);
            var response = _generalServivce.EditarMetodos(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(MetodoPagoViewModel metodo)
        {
            var item = _mapper.Map<tbMetodosPago>(metodo);
            var result = _generalServivce.EliminarMetodosPago(item);
            return Ok(result);
        }
    }
}
