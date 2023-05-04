﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class IngredienteViewModel
    {
        public int ingr_Id { get; set; }
        public string ingr_Nombre { get; set; }
        public decimal ingr_PrecioX100gr { get; set; }
        public int prov_Id { get; set; }
        public string prov_NombreEmpresa { get; set; }
        public DateTime ingr_FechaCreacion { get; set; }
        public int ingr_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? ingr_FechaModificacion { get; set; }
        public int? ingr_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool ingr_Estado { get; set; }
    }
}