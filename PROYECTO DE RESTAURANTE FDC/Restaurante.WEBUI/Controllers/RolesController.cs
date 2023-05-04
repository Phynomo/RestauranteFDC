using AutoMapper;
using Microsoft.AspNetCore.Http;
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
    public class RolesController : ControllerBase
    {
        private readonly AccesoService _seguridadServivce;
        private readonly IMapper _mapper;

        public RolesController(AccesoService seguridadService, IMapper mapper)
        {
            _seguridadServivce = seguridadService;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _seguridadServivce.ListadoRoles();
            return Ok(list);
        }

        [HttpPut("Eliminar")]
        public IActionResult Delete(RolViewModel roles)
        {
            var item = _mapper.Map<tbRoles>(roles);
            var result = _seguridadServivce.EliminarRoles(item);
            return Ok(result);
        }
    }
}
