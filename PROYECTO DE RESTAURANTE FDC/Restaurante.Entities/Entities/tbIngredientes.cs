﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbIngredientes
    {
        public tbIngredientes()
        {
            tbIngredientesXPlatillos = new HashSet<tbIngredientesXPlatillos>();
            tbIngredientesXSucursal = new HashSet<tbIngredientesXSucursal>();
        }

        public int ingr_Id { get; set; }
        public string ingr_Nombre { get; set; }
        public decimal ingr_PrecioX100gr { get; set; }
        public int prov_Id { get; set; }
        public DateTime ingr_FechaCreacion { get; set; }
        public int ingr_UsuarioCreacion { get; set; }
        public DateTime? ingr_FechaModificacion { get; set; }
        public int? ingr_UsuarioModificacion { get; set; }
        public bool? ingr_Estado { get; set; }

        public virtual tbUsuarios ingr_UsuarioCreacionNavigation { get; set; }
        public virtual tbUsuarios ingr_UsuarioModificacionNavigation { get; set; }
        public virtual tbProveedores prov { get; set; }
        public virtual ICollection<tbIngredientesXPlatillos> tbIngredientesXPlatillos { get; set; }
        public virtual ICollection<tbIngredientesXSucursal> tbIngredientesXSucursal { get; set; }
    }
}