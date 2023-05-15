using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class IngredientePlatilloViewModel
    {
        public int ingrplat_Id { get; set; }
        public int plat_Id { get; set; }
        public string plat_Nombre { get; set; }
        public int ingr_Id { get; set; }
        public string ingr_Nombre { get; set; }
        public decimal ingr_PrecioX100gr { get; set; }
        public int ingrplat_Gramos { get; set; }
        public DateTime ingrplat_FechaCreacion { get; set; }
        public int ingrplat_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? ingrplat_FechaModificacion { get; set; }
        public int? ingrplat_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool ingrplat_Estado { get; set; }


    }
}
