﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class tbUsuariosViewModel
    {
        public int user_Id { get; set; }
        public int sucu_Id { get; set; }
        public string user_NombreUsuario { get; set; }
        public string user_Contrasena { get; set; }
        public string user_Correo { get; set; }
        public bool? user_EsAdmin { get; set; }
        public int? role_Id { get; set; }
        public int? empe_Id { get; set; }
        public int? clie_Id { get; set; }
        public int user_UsuCreacion { get; set; }
        public DateTime user_FechaCreacion { get; set; }
        public int? user_UsuModificacion { get; set; }
        public DateTime? user_FechaModificacion { get; set; }
        public bool? user_Estado { get; set; }
    }
}
