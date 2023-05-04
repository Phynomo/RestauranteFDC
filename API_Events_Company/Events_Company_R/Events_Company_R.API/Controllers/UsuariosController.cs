using AutoMapper;
using Events_Company_R.BussinessLogic.Services.AccesoServices;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        private readonly AccesoServices _accesoServices;
        private readonly IMapper _mapper;

        public UsuariosController(AccesoServices accesoServices, IMapper mapper)
        {
            _accesoServices = accesoServices;
            _mapper = mapper;
        }

        [HttpGet("ListarUsuarios")]
        public IActionResult ListarUsuarios()
        {
            var list = _accesoServices.ListarUsuarios();
            return Ok(list);
        }
    }
}
