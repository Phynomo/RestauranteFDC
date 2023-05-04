using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class CategoriaViewModel
    {
        public int cate_Id { get; set; }
        public string cate_Descripcion { get; set; }
        public int cate_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? cate_FechaCreacion { get; set; }
        public int? cate_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? cate_FechaModificacion { get; set; }
        public bool? cate_Estado { get; set; }
    }
}
