using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Restaurante.BusinessLogic;
using Restaurante.WEBUI.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            AddSwagger(services);
            services.DataAccess(Configuration.GetConnectionString("ConexionCons"));
            services.BusinessLogic();
            services.AddAutoMapper(x => x.AddProfile<MappingProfileExntensions>(), AppDomain.CurrentDomain.GetAssemblies());
            services.AddSession();

            services.AddControllersWithViews();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowFlutterApp", builder =>
                {
                    builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
                    .AllowAnyHeader()
                    .AllowAnyMethod();

                    //builder.WithOrigins("http://localhost:61025/#/"); // Reemplaza con la URL de tu aplicaci�n Flutter
                });
            });

        }

        private void AddSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                var groupName = "v1";

                options.SwaggerDoc(groupName, new OpenApiInfo
                {
                    Title = $"Foo {groupName}",
                    Version = groupName,
                    Description = "Agence API",
                    Contact = new OpenApiContact
                    {
                        Name = "Agence Versailles",
                        Email = string.Empty,
                        Url = new Uri("https://foo.com/"),
                    }
                });
            });
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Foo API V1");
            });


            app.UseRouting();
            app.UseCors("AllowFlutterApp");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
