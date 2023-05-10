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

        [HttpPost("Insertar")]
        public IActionResult InsertarSucursal(UsuarioViewModel sucursal)
        {
            var item = _mapper.Map<tbUsuarios>(sucursal);
            var response = _seguridadServivce.InsertarUsuarios(item);
            return Ok(response);
        }

        [HttpPut("Eliminar")]
        public IActionResult Delete(UsuarioViewModel usuarios)
        {
            var item = _mapper.Map<tbUsuarios>(usuarios);
            var result = _seguridadServivce.EliminarUsuarios(item);
            return Ok(result);
        }

        [HttpPut("Editar")]
        public IActionResult Update(UsuarioViewModel usuarios)
        {
            var item = _mapper.Map<tbUsuarios>(usuarios);
            var result = _seguridadServivce.EditarUsuarios(item);
            return Ok(result);
        }



        [HttpGet("Login")]
        public IActionResult Login(string usuario, string contrasena)
        {
            var list = _seguridadServivce.Login(usuario, contrasena);
            return Ok(list);
        }

        [HttpPut("Recuperar")]
        public IActionResult Recuperar(tbUsuariosViewModel usuarios)
        {
            var item = _mapper.Map<tbUsuarios>(usuarios);
            var response = _seguridadServivce.RecuperarUsuarios(item);
            return Ok(response);
        }

    }
}
