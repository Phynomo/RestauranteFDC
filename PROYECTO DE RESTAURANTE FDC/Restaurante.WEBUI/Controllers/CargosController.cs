using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurante.BusinessLogic.Services.GeneralService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargosController : ControllerBase
    {
        private readonly GeneralService _generalServivce;
        private readonly IMapper _mapper;

        public CargosController(GeneralService generalServivce, IMapper mapper)
        {
            _generalServivce = generalServivce;
            _mapper = mapper;
        }

        [HttpGet("Listado")]
        public IActionResult Index()
        {
            var list = _generalServivce.ListadoCargos();
            return Ok(list);
        }
    }
}
