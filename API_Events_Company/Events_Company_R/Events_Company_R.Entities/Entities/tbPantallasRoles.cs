﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class tbPantallasRoles
    {
        public int ptro_Id { get; set; }
        public int role_Id { get; set; }
        public int pant_Id { get; set; }
        public int user_UsuCreacion { get; set; }
        public DateTime ptro_FechaCreacion { get; set; }
        public int? user_UsuModificacion { get; set; }
        public DateTime? ptro_FechaModificacion { get; set; }
        public bool? ptro_Estado { get; set; }

        public virtual tbPantallas pant { get; set; }
        public virtual tbRoles role { get; set; }
        public virtual tbUsuarios user_UsuCreacionNavigation { get; set; }
        public virtual tbUsuarios user_UsuModificacionNavigation { get; set; }
    }
}