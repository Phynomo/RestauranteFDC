using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.AccesoService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PantallasController : ControllerBase
    {
        private readonly AccesoService _seguridadServivce;
        private readonly IMapper _mapper;

        public PantallasController(AccesoService seguridadService, IMapper mapper)
        {
            _seguridadServivce = seguridadService;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _seguridadServivce.ListadoPantallas();
            return Ok(list);
        }

        [HttpGet("PantallasPorRol")]
        public IActionResult PantallasXRol(int rol, int esAdmin)
        {
            var list = _seguridadServivce.ListadoPantallasPorRol(rol, esAdmin);
            return Ok(list);
        }
    }
}
