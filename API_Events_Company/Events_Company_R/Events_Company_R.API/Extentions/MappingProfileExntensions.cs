using AutoMapper;
using Events_Company_R.API.Models;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Extentions
{
    public class MappingProfileExntensions : Profile
    {
        public MappingProfileExntensions()
        {
            CreateMap<DepartamentosViewModel, tbDepartamentos>().ReverseMap();
            CreateMap<UsuariosViewModel, tbUsuarios>().ReverseMap();
        }
    }
}
