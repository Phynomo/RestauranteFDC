using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class PantallasViewModel
    {
        public int pant_Id { get; set; }
        public string pant_Nombre { get; set; }
        public string pant_Url { get; set; }
        public string pant_Menu { get; set; }
        public string pant_HtmlId { get; set; }
        public int pant_UsuCreacion { get; set; }
        public DateTime pant_FechaCreacion { get; set; }
        public int? pant_UsuModificacion { get; set; }
        public DateTime? pant_FechaModificacion { get; set; }
        public bool pant_Estado { get; set; }
    }
}
