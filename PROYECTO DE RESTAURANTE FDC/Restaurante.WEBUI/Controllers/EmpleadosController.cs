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
    public class EmpleadosController : ControllerBase
    {
        private readonly RestauranteService _restauranteServicio;
        private readonly IMapper _mapper;

        public EmpleadosController(RestauranteService restauranteServivce, IMapper mapper)
        {
            _restauranteServicio = restauranteServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _restauranteServicio.ListadoEmpleados();
            return Ok(list);
        }

        [HttpGet("CantidadEmpleados")]
        public IActionResult EmpleadosTotales()
        {
            var list = _restauranteServicio.CantidadEmpleados();
            return Ok(list);
        }

        [HttpPut("EditarEmpleado")]
        public IActionResult Edit(EmpleadoViewModel empleado)
        {
            var item = _mapper.Map<tbEmpleados>(empleado);
            var response = _restauranteServicio.EditarEmpleado(item);
            return Ok(response);
        }

        [HttpPost("InsertarEmpleados")]
        public IActionResult InsertarEmpleado(EmpleadoViewModel empleado)
        {
            var item = _mapper.Map<tbEmpleados>(empleado);
            var response = _restauranteServicio.InsertarEmpleados(item);
            return Ok(response);
        }
        
        [HttpPut("Eliminar")]
        public IActionResult Delete(EmpleadoViewModel empleado)
        {
            var item = _mapper.Map<tbEmpleados>(empleado);
            var result = _restauranteServicio.EliminarEmpleados(item);
            return Ok(result);
        }

        [HttpGet("CargarEmpleados")]
        public IActionResult Cargar(int id)
        {
            var list = _restauranteServicio.CargarEmpleados(id);
            return Ok(list);
        }

        [HttpGet("DetallesEmpleados")]
        public IActionResult Detalles(int id)
        {
            var list = _restauranteServicio.DetallesEmpleados(id);
            return Ok(list);
        }
    }
}
