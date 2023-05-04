using AutoMapper;
using Events_Company_R.API.Models;
using Events_Company_R.BussinessLogic.Services.AccesoServices;
using Events_Company_R.Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly AccesoServices _accesoServices;
        private readonly IMapper _mapper;

        public LoginController(AccesoServices accesoServices, IMapper mapper)
        {
            _accesoServices = accesoServices;
            _mapper = mapper;
        }
        [HttpPost("ValidarLogin")]
        public IActionResult ValidarLogin(UsuariosViewModel item)
        {
            var resultMapeado = _mapper.Map<tbUsuarios>(item);

            var respuesta = _accesoServices.ValidarLogin(resultMapeado);

            respuesta.Data = _mapper.Map<UsuariosViewModel>(respuesta.Data);

            return Ok(respuesta);
        }
    }
}
