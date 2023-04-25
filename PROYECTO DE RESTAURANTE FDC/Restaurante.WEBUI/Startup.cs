using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
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
            //ADD SELVIN
            services.AddCors(option =>
            {
                option.AddPolicy("AllowFlutter", builder =>
                {
                    builder.SetIsOriginAllowed(origen => new Uri(origen).Host == "localhost") //NOMBNRE DEL SERVIDOR
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                }
                );
            }
            );

           /*services.DataAccess(Configuration.GetConnectionString("ConexionCons"));
            services.BusinessLogic();
            services.AddAutoMapper(x => x.AddProfile<MappingProfileExntensions>(), AppDomain.CurrentDomain.GetAssemblies());*/
            services.AddControllers();

            /* services.AddSwaggerGen(c =>
          {
              c.SwaggerDoc("v1", new OpenApiInfo { Title = "Restaurante.WEBUI", Version = "v1" });
          });*/

            services.AddMvc();
            services.AddControllersWithViews();
            services.AddControllers();
            AddSwagger(services);
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
                    Description = "Foo API",
                    Contact = new OpenApiContact
                    {
                        Name = "Foo Company",
                        Email = string.Empty,
                        Url = new Uri("https://foo.com/"),
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                /*app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Restaurante.WEBUI v1"));*/
            }

            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Restaurante.WEBUI v1"));
            app.UseHttpsRedirection();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Foo API V1");
            });
            app.UseRouting();

            //ADD SELVIN
            app.UseCors("AllowFlutter");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }


       
    }
}
