﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class Pedidos
    {
        public Pedidos()
        {
            Pedidos_Detalles = new HashSet<Pedidos_Detalles>();
            tbFacturas = new HashSet<tbFacturas>();
        }

        public int pedi_Id { get; set; }
        public int? clie_Id { get; set; }
        public int? dire_Id { get; set; }
        public DateTime? pedi_Inicio { get; set; }
        public DateTime? pedi_Final { get; set; }
        public int? pedi_UsuarioCreador { get; set; }
        public DateTime? pedi_FechaCreacion { get; set; }
        public int? pedi_UsuarioModificador { get; set; }
        public DateTime? pedi_FechaModificacion { get; set; }
        public bool? pedi_Estado { get; set; }

        public virtual tbClientes clie { get; set; }
        public virtual tbDirecciones dire { get; set; }
        public virtual tbUsuarios pedi_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios pedi_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<Pedidos_Detalles> Pedidos_Detalles { get; set; }
        public virtual ICollection<tbFacturas> tbFacturas { get; set; }
    }
}