﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class VW_tbIngredientes
    {
        public int ingr_Id { get; set; }
        public string ingr_Nombre { get; set; }
        public decimal ingr_PrecioX100gr { get; set; }
        public int prov_Id { get; set; }
        public string prov_NombreEmpresa { get; set; }
        public DateTime ingr_FechaCreacion { get; set; }
        public int ingr_UsuarioCreacion { get; set; }
        public string user_NombreUsuarioCreacion { get; set; }
        public DateTime? ingr_FechaModificacion { get; set; }
        public int? ingr_UsuarioModificacion { get; set; }
        public string user_NombreUsuarioModificacion { get; set; }
        public bool ingr_Estado { get; set; }
    }
}