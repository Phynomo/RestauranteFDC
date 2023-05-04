using AutoMapper;
using Events_Company_R.BussinessLogic.Services.GeneralServices;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DireccionesController : Controller
    {
        private readonly GeneralServices _generalesServices;
        private readonly IMapper _mapper;

        public DireccionesController(GeneralServices generalesService, IMapper mapper)
        {
            _generalesServices = generalesService;
            _mapper = mapper;
        }

        [HttpGet("ListarDirecciones")]
        public IActionResult ListarDirecciones()
        {
            var list = _generalesServices.ListarDirecciones();
            return Ok(list);
        }
    }
}
