using AutoMapper;
using Events_Company_R.BussinessLogic.Services.EventoServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaqueteDetallesController : ControllerBase
    {
        private readonly EventoServices _eventoServices;
        private readonly IMapper _mapper;

        public PaqueteDetallesController(EventoServices eventoServices, IMapper mapper)
        {
            _eventoServices = eventoServices;
            _mapper = mapper;
        }

        [HttpGet("ListarPaquetesDetalles")]
        public IActionResult ListarPaquetesDetalles()
        {
            var list = _eventoServices.ListarPaquetesDetalles();
            return Ok(list);
        }
    }
}
