using AutoMapper;
using Restaurante.Entities.Entities;
using Restaurante.WEBUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Extensions
{
    public class MappingProfileExntensions: Profile
    {
        public MappingProfileExntensions()
        {
            CreateMap<tbCargosViewModel,tbCargos>().ReverseMap();
            CreateMap<VWCargosViewModel,tbCargos>().ReverseMap();
      
        }
    }
}
