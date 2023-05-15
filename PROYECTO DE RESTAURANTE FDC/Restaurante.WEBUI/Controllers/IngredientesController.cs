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

        [HttpGet("Listado_sucu")]
        public IActionResult IndexSucu(int sucu_Id)
        {
            var list = _restauranteServicio.ListadoIngredientes(sucu_Id);
            return Ok(list);
        }

        [HttpPut("EditarIngrediente")]
        public IActionResult Edit(IngredienteViewModel ingrediente)
        {
            var item = _mapper.Map<tbIngredientes>(ingrediente);
            var response = _restauranteServicio.Editaringredientes(item);
            return Ok(response);
        }

        [HttpPost("InsertarIngrediente")]
        public IActionResult InsertarIngredientes(IngredienteViewModel ingrediente)
        {
            var item = _mapper.Map<tbIngredientes>(ingrediente);
            var response = _restauranteServicio.InsertarIngrediente(item);
            return Ok(response);
        }

        [HttpPost("InsertarIngredienteStock")]
        public IActionResult InsertarIngredientesStock(IngredienteViewModel ingrediente)
        {
            var item = _mapper.Map<tbIngredientes>(ingrediente);
            var response = _restauranteServicio.InsertarIngredienteStock(item);
            return Ok(response);
        }


        [HttpPut("Eliminar")]
        public IActionResult Delete(IngredienteViewModel ingredientes)
        {
            var item = _mapper.Map<tbIngredientes>(ingredientes);
            var result = _restauranteServicio.EliminarIngredientes(item);
            return Ok(result);
        }

        [HttpGet("IngredientesXplatillos")]
        public IActionResult IngredientesPlatillos(int id)
        {
            var list = _restauranteServicio.IngredientesXplatillo(id);
            return Ok(list);
        }

        [HttpPost("AgregarIngredientesPlat")]
        public IActionResult Agregar(IngredientePlatilloViewModel ingredientes)
        {
            var x = _mapper.Map<tbIngredientesXPlatillos>(ingredientes);
            var response = _restauranteServicio.Agregar(x);
            return Ok(response);
        }

        [HttpPost("EliminarIngredientesPlat")]
        public IActionResult Eliminar(IngredientePlatilloViewModel ingredientes)
        {
            var x = _mapper.Map<tbIngredientesXPlatillos>(ingredientes);
            var response = _restauranteServicio.Eliminar(x);
            return Ok(response);
        }
    }
}
