﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class VW_tbFacturas
    {
        public int fact_Id { get; set; }
        public int clie_Id { get; set; }
        public string clie_Nombres { get; set; }
        public string clie_Apellidos { get; set; }
        public string clie_NombreCompleto { get; set; }
        public string clie_RTN { get; set; }
        public string clie_Telefono { get; set; }
        public string clie_Identidad { get; set; }
        public string clie_Sexo { get; set; }
        public int empe_Id { get; set; }
        public string empe_Nombres { get; set; }
        public string empe_Apellidos { get; set; }
        public string empe_NombreCompleto { get; set; }
        public int sucu_Id { get; set; }
        public int metp_Id { get; set; }
        public string metp_Descripcion { get; set; }
        public DateTime fact_Fecha { get; set; }
        public DateTime fact_FechaCreacion { get; set; }
        public int fact_UsuarioCreacion { get; set; }
        public string user_NombreUsuarioCreacion { get; set; }
        public DateTime? fact_FechaModificacion { get; set; }
        public int? fact_UsuarioModificacion { get; set; }
        public string user_NombreUsuarioModificacion { get; set; }
        public bool fact_Estado { get; set; }
    }
}