using AutoMapper;
using Restaurante.Entities.Entities;
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
            CreateMap<tbUsuarios, UsuariosViewModel>().ReverseMap();

        }
    }
}
