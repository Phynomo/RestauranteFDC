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
    public class MunicipiosController : Controller
    {
        private readonly GeneralServices _generalesServices;
        private readonly IMapper _mapper;

        public MunicipiosController(GeneralServices generalesService, IMapper mapper)
        {
            _generalesServices = generalesService;
            _mapper = mapper;
        }
        [HttpGet("ListarMunicipios")]
        public IActionResult ListarMunicipios()
        {
            var list = _generalesServices.ListarMunicipios();
            return Ok(list);
        }
    }
}
