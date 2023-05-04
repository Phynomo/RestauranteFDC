using Events_Company_R.BussinessLogic.Services.AccesoServices;
using Events_Company_R.BussinessLogic.Services.EventoServices;
using Events_Company_R.BussinessLogic.Services.GeneralServices;
using Events_Company_R.DataAccess;
using Events_Company_R.DataAccess.Repositories.Acce;
using Events_Company_R.DataAccess.Repositories.Even;
using Events_Company_R.DataAccess.Repositories.Gral;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.BussinessLogic
{
    public static class ServiceConfiguration
    {
        public static void DataAccess(this IServiceCollection services, string connection)
        {
            Events_Company.BuildConnectionString(connection);

            //Acceso
            services.AddScoped<PantallasRepository>();
            services.AddScoped<RolesPorPantallaRepository>();
            services.AddScoped<RolesRepository>();
            services.AddScoped<UsuariosRepository>();

            //Evento
            services.AddScoped<EventosRepository>();
            services.AddScoped<FacturasRepository>();
            services.AddScoped<InventarioRepository>();
            services.AddScoped<ProveedoresRepository>();
            services.AddScoped<ServiciosRepository>();
            services.AddScoped<PaqueteDetallesRepository>();
            services.AddScoped<Paquetes_EncabezadoRepository>();
            services.AddScoped<PedidosRepository>();
            services.AddScoped<PedidosDetalllesRepository>();

            //General
            services.AddScoped<DepartamentosRepository>();
            services.AddScoped<EstadosCivilesRepository>();
            services.AddScoped<MunicipiosRepository>();
            services.AddScoped<EmpleadoRepository>();
            services.AddScoped<ClienteRepository>();
            services.AddScoped<TipoPagoRepository>();
            services.AddScoped<DireccionesRepository>();

        }


        public static void BussinessLogic(this IServiceCollection services)
        {
            services.AddScoped<GeneralServices>();
            services.AddScoped<AccesoServices>();
            services.AddScoped<EventoServices>();
        }
    }
}
