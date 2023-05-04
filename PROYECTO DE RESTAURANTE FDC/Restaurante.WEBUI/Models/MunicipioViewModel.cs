using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class MunicipioViewModel
    {
        public int muni_Id { get; set; }
        public string muni_Nombre { get; set; }
        public string muni_Codigo { get; set; }
        public int depa_Id { get; set; }
        public string depa_Nombre { get; set; }
        public string depa_Codigo { get; set; }
        public int muni_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime muni_FechaCreacion { get; set; }
        public int? muni_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? muni_FechaModificacion { get; set; }
        public bool muni_Estado { get; set; }
    }
}
