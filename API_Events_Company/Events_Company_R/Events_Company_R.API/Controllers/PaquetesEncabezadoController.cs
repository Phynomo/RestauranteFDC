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
    public class PaquetesEncabezadoController : Controller
    {
        private readonly EventoServices _eventoServices;
        private readonly IMapper _mapper;

        public PaquetesEncabezadoController(EventoServices eventoServices, IMapper mapper)
        {
            _eventoServices = eventoServices;
            _mapper = mapper;
        }
        [HttpGet("ListarPaquetesEncabezado")]
        public IActionResult ListarPaquetesEncabezados()
        {
            var list = _eventoServices.ListarPaquetesEncabezados();
            return Ok(list);
        }
    }
}
