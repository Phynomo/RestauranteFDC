using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.GeneralService;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public CategoriasController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoCategorias();
            return Ok(list);
        }

        public class categoria
        {
            public int cate_Id { get; set; }
            public string cate_Descripcion { get; set; }
            public int cate_UsuCreacion { get; set; }
            public DateTime? cate_FechaCreacion { get; set; }
            public int? cate_UsuModificacion { get; set; }
            public DateTime? cate_FechaModificacion { get; set; }
            public bool? cate_Estado { get; set; }


        }

        [HttpPost("InsertarCategoria")]
        public IActionResult InsertarCategoria(categoria categoria)
        {
            tbCategorias cate = new()
            {
                cate_Descripcion = categoria.cate_Descripcion,
                cate_UsuCreacion = categoria.cate_UsuCreacion,

            };

            var response = _generalServivce.InsertarCategorias(cate);
            return Ok(response);
        }
    }

    
}
