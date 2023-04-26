using Microsoft.Extensions.DependencyInjection;
using Restaurante.BusinessLogic.Services.AccesoService;
using Restaurante.DataAccess;
using Restaurante.DataAccess.Repositories.ACCE;
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
            RestauranteCon.BuildConnectionString(connectionString);
        }
        public static void BusinessLogic(this IServiceCollection service)
        {
            service.AddScoped<AccesoService>();
        }

    }
}
