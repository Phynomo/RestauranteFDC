﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class tbPaquete_Detalles
    {
        public int pqsv_Id { get; set; }
        public int? paqt_Id { get; set; }
        public int? serv_Id { get; set; }
        public int? inve_Id { get; set; }
        public int? pqsv_Cantidad { get; set; }
        public int? pqsv_UsuarioCreador { get; set; }
        public DateTime? pqsv_FechaCreacion { get; set; }
        public int? pqsv_UsuarioModificador { get; set; }
        public DateTime? pqsv_FechaModificacion { get; set; }
        public bool? pqsv_Estado { get; set; }

        public virtual tbInventario inve { get; set; }
        public virtual tbPaquetes_Encabezado paqt { get; set; }
        public virtual tbUsuarios pqsv_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios pqsv_UsuarioModificadorNavigation { get; set; }
        public virtual tbServicios serv { get; set; }
    }
}