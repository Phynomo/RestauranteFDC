﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class Pedidos_Detalles
    {
        public int pede_Id { get; set; }
        public int? pedi_Id { get; set; }
        public int? pede_IPS { get; set; }
        public string pede_Prefijo { get; set; }
        public int? pede_Cantidad { get; set; }
        public int? pede_UsuarioCreador { get; set; }
        public DateTime? pede_FechaCreacion { get; set; }
        public int? pede_UsuarioModificador { get; set; }
        public DateTime? pede_FechaModificacion { get; set; }
        public bool? pede_Estado { get; set; }

        public virtual tbUsuarios pede_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios pede_UsuarioModificadorNavigation { get; set; }
        public virtual Pedidos pedi { get; set; }
    }
}