﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbReservaciones
    {
        public int rese_Id { get; set; }
        public int clie_Id { get; set; }
        public int sucu_Id { get; set; }
        public int rese_Personas { get; set; }
        public DateTime rese_FechaHora { get; set; }
        public DateTime rese_FechaCreacion { get; set; }
        public int rese_UsuCreacion { get; set; }
        public DateTime? rese_FechaModificacion { get; set; }
        public int? rese_UsuModificacion { get; set; }
        public bool? rese_Estado { get; set; }

        public virtual tbClientes clie { get; set; }
        public virtual tbUsuarios rese_UsuCreacionNavigation { get; set; }
        public virtual tbUsuarios rese_UsuModificacionNavigation { get; set; }
        public virtual tbSucursales sucu { get; set; }
    }
}