﻿using AutoMapper;
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


        [HttpPost("InsertarCargos")]
        public IActionResult InsertarCargo(CargoViewModel cargos)
        {
            var item = _mapper.Map<tbCargos>(cargos);
            var response = _generalServivce.InsertarCargos(item);
            return Ok(response);
        }
        
        [HttpPost("Insertar")]
        public IActionResult Insert(VWCargosViewModel cargo)
        {
            var item = _mapper.Map<tbCargos>(cargo);
            var list = _generalServivce.InsertarCargos(item);
            return Ok(list);
        }

        [HttpPut("Editar")]
        public IActionResult Edit(VWCargosViewModel cargo)
        {
            var item = _mapper.Map<tbCargos>(cargo);
            var list = _generalServivce.EditarCargos(item);
            return Ok(list);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(CargoViewModel metodo)
        {
            var item = _mapper.Map<tbCargos>(metodo);
            var result = _generalServivce.EliminarCargos(item);
            return Ok(result);
        }
    }
}
