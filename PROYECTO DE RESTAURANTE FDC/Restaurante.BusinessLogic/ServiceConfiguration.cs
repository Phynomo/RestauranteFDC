using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic
{
    public static class ServiceConfiguration
    {
        public static void DataAccess(this IServiceCollection services, string connection)
        {
            // ACCE
           /* services.AddScoped<UsuariosRepository>();*/

            //REST
            
            // GRAL
            

        }


        public static void BusinessLogic(this IServiceCollection services)
        {
           /* services.AddScoped<AccesoServices>();*/
           
        }
    }
}
