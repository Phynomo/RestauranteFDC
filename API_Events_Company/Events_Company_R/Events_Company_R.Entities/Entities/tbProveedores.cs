﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class tbProveedores
    {
        public tbProveedores()
        {
            tbServicios = new HashSet<tbServicios>();
        }

        public int prov_Id { get; set; }
        public string prov_Nombre { get; set; }
        public string prov_Apellido { get; set; }
        public string prov_Telefono { get; set; }
        public string prov_Servicio { get; set; }
        public int? prov_Precio { get; set; }
        public bool? prov_Estado { get; set; }
        public int? prov_UsuarioCreador { get; set; }
        public DateTime? prov_FechaCreacion { get; set; }
        public int? prov_UsuarioModificador { get; set; }
        public DateTime? prov_FechaModificacion { get; set; }

        public virtual tbUsuarios prov_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios prov_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbServicios> tbServicios { get; set; }
    }
}