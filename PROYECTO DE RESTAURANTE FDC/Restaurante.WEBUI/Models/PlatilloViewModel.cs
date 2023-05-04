﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class PlatilloViewModel
    {
        public int plat_Id { get; set; }
        public string plat_Nombre { get; set; }
        public decimal plat_Precio { get; set; }
        public string plat_Imagen { get; set; }
        public int cate_Id { get; set; }
        public string cate_Descripcion { get; set; }
        public DateTime plat_FechaCreacion { get; set; }
        public int plat_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? plat_FechaModificacion { get; set; }
        public int? plat_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool plat_Estado { get; set; }
    }
}
