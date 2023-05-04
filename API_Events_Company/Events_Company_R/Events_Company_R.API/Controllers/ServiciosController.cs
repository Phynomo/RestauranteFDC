using AutoMapper;
using Events_Company_R.BussinessLogic.Services.EventoServices;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiciosController : Controller
    {
        private readonly EventoServices _eventoServices;
        private readonly IMapper _mapper;

        public ServiciosController(EventoServices eventoServices, IMapper mapper)
        {
            _eventoServices = eventoServices;
            _mapper = mapper;
        }
        [HttpGet("ListarServicios")]
        public IActionResult ListarServicios()
        {
            var list = _eventoServices.ListarServicios();
            return Ok(list);
        }
    }
}
