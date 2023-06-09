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
    public class DepartamentosController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public DepartamentosController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoDepartamentos();
            return Ok(list);
        }

        [HttpPost("InsertarDepartamento")]
        public IActionResult InsertarUsuario(DepartamentoViewModel departamentos)
        {
            var item = _mapper.Map<tbDepartamentos>(departamentos);
            var response = _generalServivce.InsertarDepartamentos(item);
            return Ok(response);
        }
        
        [HttpPut("EditarDepartamento")]
        public IActionResult Edit(DepartamentoViewModel departamentos)
        {
            var item = _mapper.Map<tbDepartamentos>(departamentos);
            var response = _generalServivce.EditarDepartamentos(item);
            return Ok(response);
        }

        [HttpPut("Eliminar")]
        public IActionResult Delete(DepartamentoViewModel departamento)
        {
            var item = _mapper.Map<tbDepartamentos>(departamento);
            var result = _generalServivce.EliminarDepartamentos(item);
            return Ok(result);
        }

        [HttpGet("BuscarDepartamento")]
        public IActionResult Cargar(int id)
        {
            var list = _generalServivce.CargarDepartamentos(id);
            return Ok(list);
        }
    }
}
