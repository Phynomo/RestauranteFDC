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
    public class DepartamentosController : Controller
    {
        private readonly GeneralServices _generalesServices;
        private readonly IMapper _mapper;

        public DepartamentosController(GeneralServices generalesService, IMapper mapper)
        {
            _generalesServices = generalesService;
            _mapper = mapper;
        }

        [HttpGet("ListarDepartamentos")]
        public IActionResult ListarDepartamentos()
        {
            var list = _generalesServices.ListarDepartamentos();
            return Ok(list);
        }
    }
}
