﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbIngredientesXSucursal
    {
        public int ingrsucu_Id { get; set; }
        public int ingr_Id { get; set; }
        public int sucu_Id { get; set; }
        public decimal ingrsucu_StockEnGramos { get; set; }
        public DateTime ingrsucu_FechaCreacion { get; set; }
        public int ingrsucu_UsuarioCreacion { get; set; }
        public DateTime? ingrsucu_FechaModificacion { get; set; }
        public int? ingrsucu_UsuarioModificacion { get; set; }
        public bool? ingrsucu_Estado { get; set; }

        public virtual tbIngredientes ingr { get; set; }
        public virtual tbUsuarios ingrsucu_UsuarioCreacionNavigation { get; set; }
        public virtual tbUsuarios ingrsucu_UsuarioModificacionNavigation { get; set; }
        public virtual tbSucursales sucu { get; set; }
    }
}