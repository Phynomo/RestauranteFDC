using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.RestauranteService;
using Restaurante.Entities.Entities;
using Restaurante.WEBUI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlatillosController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public PlatillosController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoPlatillos();
            return Ok(list);
        }


        [HttpPut("EditarPlatillo")]
        public IActionResult Edit(PlatilloViewModel plato)
        {
            var item = _mapper.Map<tbPlatillos>(plato);
            var response = _restauranteServicio.EditarPlatillo(item);
            return Ok(response);
        }

        [HttpPost("InsertarPlatillos")]
        public IActionResult InsertarPlatillos(PlatilloViewModel platillo)
        {
            var item = _mapper.Map<tbPlatillos>(platillo);
            var response = _restauranteServicio.InsertarPlatillos(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(PlatilloViewModel facturas)
        {
            var item = _mapper.Map<tbPlatillos>(facturas);
            var result = _restauranteServicio.EliminarPlatillos(item);
            return Ok(result);
        }

        [HttpGet("Precio")]
        public IActionResult Precio(int id)
        {
            var list = _restauranteServicio.Precio(id);
            return Ok(list);
        }

        [HttpPut("EditCrearPlatillo")]
        public IActionResult editarC(PlatilloViewModel plato)
        {
            var item = _mapper.Map<tbPlatillos>(plato);
            var response = _restauranteServicio.EditCrearPlatillo(item);
            return Ok(response);
        }


        [HttpGet("ListaPlatillosCate")]
        public IActionResult Platos(int id)
        {
            var list = _restauranteServicio.PlatillosCate(id);
            return Ok(list);
        }

        [HttpGet("DatosPlatillos")]
        public IActionResult Datos(int id)
        {
            var list = _restauranteServicio.DatosPlat(id);
            return Ok(list);
        }



    }
}
