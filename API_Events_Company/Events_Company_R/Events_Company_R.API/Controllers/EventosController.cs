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
    public class EventosController : Controller
    {
        private readonly EventoServices _eventoServices;
        private readonly IMapper _mapper;

        public EventosController(EventoServices eventoServices, IMapper mapper)
        {
            _eventoServices = eventoServices;
            _mapper = mapper;
        }
        
        [HttpGet("ListarEventos")]
        public IActionResult ListarEventos()
        {
            var list = _eventoServices.ListarEventos();
            return Ok(list);
        }
    }
}
