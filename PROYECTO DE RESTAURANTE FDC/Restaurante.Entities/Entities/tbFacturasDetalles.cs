﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbFacturasDetalles
    {
        public int fade_Id { get; set; }
        public int fact_Id { get; set; }
        public int? plat_Id { get; set; }
        public int fade_Cantidad { get; set; }
        public decimal fade_Precio { get; set; }
        public DateTime fade_FechaCreacion { get; set; }
        public int fade_UsuCreacion { get; set; }
        public DateTime? fade_FechaModificacion { get; set; }
        public int? fade_UsuModificacion { get; set; }
        public bool? fade_Estado { get; set; }

        public virtual tbFacturas fact { get; set; }
        public virtual tbUsuarios fade_UsuCreacionNavigation { get; set; }
        public virtual tbUsuarios fade_UsuModificacionNavigation { get; set; }
        public virtual tbPlatillos plat { get; set; }
    }
}