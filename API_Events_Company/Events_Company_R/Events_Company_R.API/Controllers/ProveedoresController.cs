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
    public class ProveedoresController : Controller
    {
        private readonly EventoServices _eventoServices;
        private readonly IMapper _mapper;

        public ProveedoresController(EventoServices eventoServices, IMapper mapper)
        {
            _eventoServices = eventoServices;
            _mapper = mapper;
        }

        [HttpGet("ListarProveedores")]
        public IActionResult ListarProveedores()
        {
            var list = _eventoServices.ListarProveedores();
            return Ok(list);
        }
    }
}
