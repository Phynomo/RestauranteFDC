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
    public class FacturasController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public FacturasController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoFacturas();
            return Ok(list);
        }

        [HttpPut("EditarFactura")]
        public IActionResult Edit(FacturaViewModel factura)
        {
            var item = _mapper.Map<tbFacturas>(factura);
            var response = _restauranteServicio.EditarFactura(item);
            return Ok(response);
        }


        [HttpPost("InsertarFactura")]
        public IActionResult InsertarFactura(FacturaViewModel factura)
        {
            var item = _mapper.Map<tbFacturas>(factura);
            var response = _restauranteServicio.InsertarFactura(item);
            return Ok(response);
        }
        [HttpPut("Eliminar")]
        public IActionResult Delete(FacturaViewModel facturas)
        {
            var item = _mapper.Map<tbFacturas>(facturas);
            var result = _restauranteServicio.EliminarFacturas(item);
            return Ok(result);
        }
        [HttpPost("InsertarFacturaDetalle")]
        public IActionResult InsertarFacturaDetalle(FacturaViewModel factura)
        {
            var item = _mapper.Map<tbFacturasDetalles>(factura);
            var response = _restauranteServicio.InsertarFacturaDetalle(item);
            return Ok(response);
        }
        [HttpPut("EliminarFacturaDetalle")]
        public IActionResult DeleteDetalle(FacturaViewModel facturas)
        {
            var item = _mapper.Map<tbFacturasDetalles>(facturas);
            var result = _restauranteServicio.EliminarFacturaDetalle(item);
            return Ok(result);
        }
    }
}
