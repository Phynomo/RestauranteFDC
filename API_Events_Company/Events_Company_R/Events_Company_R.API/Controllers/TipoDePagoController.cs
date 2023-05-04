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
    public class TipoDePagoController : Controller
    {
        private readonly GeneralServices _generalesServices;
        private readonly IMapper _mapper;

        public TipoDePagoController(GeneralServices generalesService, IMapper mapper)
        {
            _generalesServices = generalesService;
            _mapper = mapper;
        }
        [HttpGet("ListarTipoDePago")]
        public IActionResult ListarTipoDePago()
        {
            var list = _generalesServices.ListarTipoDePago();
            return Ok(list);
        }
    }
}
