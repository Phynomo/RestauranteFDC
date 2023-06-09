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
    public class ProveedoresController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public ProveedoresController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoProveedores();
            return Ok(list);
        }

        [HttpPut("EditarProveedores")]
        public IActionResult Edit(ProveedorViewModel cliente)
        {
            var item = _mapper.Map<tbProveedores>(cliente);
            var response = _restauranteServicio.EditarProveedores(item);
            return Ok(response);
        }


        [HttpPost("InsertarProveedores")]
        public IActionResult InsertarProveedores(ProveedorViewModel proveedor)
        {
            var item = _mapper.Map<tbProveedores>(proveedor);
            var response = _restauranteServicio.InsertarProveedor(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(ProveedorViewModel cliente)
        {
            var item = _mapper.Map<tbProveedores>(cliente);
            var result = _restauranteServicio.EliminarProveedores(item);
            return Ok(result);
        }
    }
}
