using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.AccesoService;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly AccesoService _seguridadServivce;
        private readonly IMapper _mapper;

        public UsuariosController(AccesoService seguridadService, IMapper mapper)
        {
            _seguridadServivce = seguridadService;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _seguridadServivce.ListadoUsuarios();
            return Ok(list);
        }

        [HttpGet("Login")]
        public IActionResult Login(string usuario, string contrasena)
        {
            var list = _seguridadServivce.Login(usuario, contrasena);
            return Ok(list);
        }

        //[HttpPut("Recuperar")]
        //public IActionResult Recuperar(UsuarioViewModel usuarios)
        //{
        //    var item = _mapper.Map<tbUsuarios>(usuarios);
        //    var response = _seguridadServivce.RecuperarUsuarios(item);
        //    return Ok(response);
        //}
    }
}
