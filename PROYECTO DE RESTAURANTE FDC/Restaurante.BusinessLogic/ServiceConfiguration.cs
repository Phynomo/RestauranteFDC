using Microsoft.Extensions.DependencyInjection;
using Restaurante.BusinessLogic.Services.AccesoService;
using Restaurante.BusinessLogic.Services.GeneralService;
using Restaurante.BusinessLogic.Services.RestauranteService;
using Restaurante.DataAccess;
using Restaurante.DataAccess.Repositories.ACCE;
using Restaurante.DataAccess.Repositories.GRAL;
using Restaurante.DataAccess.Repositories.REST;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic
{
    public static class ServiceConfiguration
    {
        public static void DataAccess(this IServiceCollection service, string connectionString)
        {
            service.AddScoped<UsuariosRepository>();
            service.AddScoped<RolesRepository>();
            service.AddScoped<CargosRepository>();
            service.AddScoped<CategoriaRepository>();
            service.AddScoped<DepartamentosRepository>();
            service.AddScoped<EstadosCivilesRepository>();
            service.AddScoped<MetodosPagoRepository>();
            service.AddScoped<MunicipiosRepository>();
            service.AddScoped<ClienteRepository>();
            service.AddScoped<EmpleadosRepository>();
            service.AddScoped<FacturasRepository>();
            service.AddScoped<IngredientesRepository>();
            service.AddScoped<PantallasRepository>();
            service.AddScoped<PantallasPorRolesRepository>();
            service.AddScoped<PlatillosRepository>();
            service.AddScoped<ProveedoresRepository>();
            service.AddScoped<ReservacionesRepository>();
            service.AddScoped<SucursalesRepository>();
            RestauranteCon.BuildConnectionString(connectionString);
        }
        public static void BusinessLogic(this IServiceCollection service)
        {
            service.AddScoped<AccesoService>();
            service.AddScoped<GeneralService>();
            service.AddScoped<RestauranteService>();
        }

    }
}
