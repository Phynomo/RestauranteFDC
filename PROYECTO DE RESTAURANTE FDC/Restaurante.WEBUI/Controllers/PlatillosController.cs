﻿using AutoMapper;
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

        [HttpPut("Eliminar")]
        public IActionResult Delete(PlatilloViewModel facturas)
        {
            var item = _mapper.Map<tbPlatillos>(facturas);
            var result = _restauranteServicio.EliminarPlatillos(item);
            return Ok(result);
        }
    }
}
