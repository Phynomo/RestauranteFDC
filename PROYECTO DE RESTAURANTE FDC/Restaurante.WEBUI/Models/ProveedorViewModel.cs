using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class ProveedorViewModel
    {
        public int prov_Id { get; set; }
        public string prov_NombreEmpresa { get; set; }
        public string prov_NombreContacto { get; set; }
        public string prov_Telefono { get; set; }
        public int muni_Id { get; set; }
        public string muni_Nombre { get; set; }
        public string muni_Codigo { get; set; }
        public int depa_Id { get; set; }
        public string depa_Nombre { get; set; }
        public string depa_Codigo { get; set; }
        public string prov_DireccionExacta { get; set; }
        public DateTime prov_FechaCreacion { get; set; }
        public int prov_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? prov_FechaModificacion { get; set; }
        public int? prov_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool prov_Estado { get; set; }
    }
}
