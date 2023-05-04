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
    public class SucursalesController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public SucursalesController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoSucursales();
            return Ok(list);
        }

        [HttpPut("EditarSucursal")]
        public IActionResult Edit(SucuarsalViewModel sucursal)
        {
            var item = _mapper.Map<tbSucursales>(sucursal);
            var response = _restauranteServicio.EditarSucursal(item);
            return Ok(response);
        }
        
        [HttpPost("InsertarSucursal")]
        public IActionResult InsertarSucursal(SucuarsalViewModel sucursal)
        {
            var item = _mapper.Map<tbSucursales>(sucursal);
            var response = _restauranteServicio.InsertarSucursal(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(SucuarsalViewModel sucuarsal)
        {
            var item = _mapper.Map<tbSucursales>(sucuarsal);
            var result = _restauranteServicio.EliminarSucursales(item);
            return Ok(result);
        }
    }
}
