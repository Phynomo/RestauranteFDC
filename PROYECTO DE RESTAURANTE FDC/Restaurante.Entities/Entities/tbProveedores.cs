﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbProveedores
    {
        public tbProveedores()
        {
            tbIngredientes = new HashSet<tbIngredientes>();
        }

        public int prov_Id { get; set; }
        public string prov_NombreEmpresa { get; set; }
        public string prov_NombreContacto { get; set; }
        public string prov_Telefono { get; set; }
        public int muni_Id { get; set; }
        public string prov_DireccionExacta { get; set; }
        public DateTime prov_FechaCreacion { get; set; }
        public int prov_UsuarioCreacion { get; set; }
        public DateTime? prov_FechaModificacion { get; set; }
        public int? prov_UsuarioModificacion { get; set; }
        public bool? prov_Estado { get; set; }

        public virtual tbMunicipios muni { get; set; }
        public virtual tbUsuarios prov_UsuarioCreacionNavigation { get; set; }
        public virtual tbUsuarios prov_UsuarioModificacionNavigation { get; set; }
        public virtual ICollection<tbIngredientes> tbIngredientes { get; set; }
    }
}