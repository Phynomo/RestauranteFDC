using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.AccesoService;
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
    public class PantallasPorRolesController : ControllerBase
    {
        private readonly AccesoService _seguridadServivce;
        private readonly IMapper _mapper;

        public PantallasPorRolesController(AccesoService seguridadService, IMapper mapper)
        {
            _seguridadServivce = seguridadService;
            _mapper = mapper;
        }
        [HttpPost("Insertar")]
        public IActionResult Insert(PantallasPorRolesViewModel panxrol)
        {
            var item = _mapper.Map<tbPantallasPorRoles>(panxrol);
            var list = _seguridadServivce.InsertarPantallasPorRoles(item);
            return Ok(list);
        }

        [HttpPut("Eliminar")]
        public IActionResult Delete(PantallasPorRolesViewModel roles)
        {
            var item = _mapper.Map<tbPantallasPorRoles>(roles);
            var result = _seguridadServivce.EliminarPantallasPorRoles(item);
            return Ok(result);
        }
    }
}
