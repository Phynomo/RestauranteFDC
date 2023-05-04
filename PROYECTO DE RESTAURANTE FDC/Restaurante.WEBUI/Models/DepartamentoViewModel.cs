using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class DepartamentoViewModel
    {
        public int depa_Id { get; set; }
        public string depa_Nombre { get; set; }
        public string depa_Codigo { get; set; }
        public int depa_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime depa_FechaCreacion { get; set; }
        public int? depa_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? depa_FechaModificacion { get; set; }
        public bool depa_Estado { get; set; }
    }
}
