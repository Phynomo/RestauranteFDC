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
    public class RolesController : Controller
    {
        private readonly AccesoServices _accesoServices;
        private readonly IMapper _mapper;

        public RolesController(AccesoServices accesoServices, IMapper mapper)
        {
            _accesoServices = accesoServices;
            _mapper = mapper;
        }
        [HttpGet("ListarRoles")]
        public IActionResult ListarRoles()
        {
            var list = _accesoServices.ListarRoles();
            return Ok(list);
        }
    }
}
