﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.RestauranteService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientesController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public IngredientesController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoIngredientes();
            return Ok(list);
        }
    }
}