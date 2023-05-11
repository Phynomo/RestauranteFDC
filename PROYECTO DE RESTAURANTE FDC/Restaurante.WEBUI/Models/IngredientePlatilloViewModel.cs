using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class IngredientePlatilloViewModel
    {
        public int plat_Id { get; set; }
        public int ingr_Id { get; set; }
        public int ingrplat_Gramos { get; set; }
        public int ingrplat_UsuCreacion { get; set; }

    }
}
