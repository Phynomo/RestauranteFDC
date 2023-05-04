﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class CargoViewModel
    {
        public int carg_Id { get; set; }
        public string carg_Descripcion { get; set; }
        public int carg_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? carg_FechaCreacion { get; set; }
        public int? carg_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? carg_FechaModificacion { get; set; }
        public bool? carg_Estado { get; set; }
    }
}
