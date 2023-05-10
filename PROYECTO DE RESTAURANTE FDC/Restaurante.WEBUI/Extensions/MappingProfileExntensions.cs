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
            CreateMap<CargoViewModel,tbCargos>().ReverseMap();
            CreateMap<CategoriaViewModel,tbCategorias>().ReverseMap();
            CreateMap<ClienteViewModel,tbClientes>().ReverseMap();
            CreateMap<DepartamentoViewModel,tbDepartamentos>().ReverseMap();
            CreateMap<EmpleadoViewModel,tbEmpleados>().ReverseMap();
            CreateMap<EstadoCivilViewModel,tbEstadosCiviles>().ReverseMap();
            CreateMap<FacturaViewModel,tbFacturas>().ReverseMap();
            CreateMap<FacturaViewModel,tbFacturasDetalles>().ReverseMap();
            CreateMap<IngredienteViewModel,tbIngredientes>().ReverseMap();
            CreateMap<PlatilloViewModel,tbPlatillos>().ReverseMap();
            CreateMap<ProveedorViewModel,tbProveedores>().ReverseMap();
            CreateMap<RolViewModel,tbRoles>().ReverseMap();
            CreateMap<MunicipioViewModel,tbMunicipios>().ReverseMap();
            CreateMap<SucuarsalViewModel,tbSucursales>().ReverseMap();
            CreateMap<UsuarioViewModel,tbUsuarios>().ReverseMap();
      
        }
    }
}
