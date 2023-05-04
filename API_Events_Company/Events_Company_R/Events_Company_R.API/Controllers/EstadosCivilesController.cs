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
    public class EstadosCivilesController : Controller
    {
        private readonly GeneralServices _generalesServices;
        private readonly IMapper _mapper;

        public EstadosCivilesController(GeneralServices generalesService, IMapper mapper)
        {
            _generalesServices = generalesService;
            _mapper = mapper;
        }
        [HttpGet("ListarEstadosCiviles")]
        public IActionResult ListarEstadosCiviles()
        {
            var list = _generalesServices.ListarEstadosCiviles();
            return Ok(list);
        }
    }
}
