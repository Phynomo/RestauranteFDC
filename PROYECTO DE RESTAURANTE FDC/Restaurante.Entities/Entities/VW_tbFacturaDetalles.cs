﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class VW_tbFacturaDetalles
    {
        public int fade_Id { get; set; }
        public int fact_Id { get; set; }
        public string clie_Nombres { get; set; }
        public string clie_Apellidos { get; set; }
        public string clie_NombreCompleto { get; set; }
        public string clie_RTN { get; set; }
        public string clie_Sexo { get; set; }
        public int clie_Id { get; set; }
        public string clie_Identidad { get; set; }
        public string clie_Telefono { get; set; }
        public string empe_Nombres { get; set; }
        public string empe_Apellidos { get; set; }
        public string empe_NombreCompleto { get; set; }
        public bool fact_Cerrada { get; set; }
        public int plat_Id { get; set; }
        public string plat_Nombre { get; set; }
        public decimal plat_Precio { get; set; }
        public string plat_Imagen { get; set; }
        public int cate_Id { get; set; }
        public string cate_Descripcion { get; set; }
        public int fade_Cantidad { get; set; }
        public decimal fade_Precio { get; set; }
        public DateTime fade_FechaCreacion { get; set; }
        public int fade_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? fade_FechaModificacion { get; set; }
        public int? fade_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool fade_Estado { get; set; }
    }
}