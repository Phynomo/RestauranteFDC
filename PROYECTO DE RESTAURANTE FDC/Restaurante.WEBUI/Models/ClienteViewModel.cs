using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class ClienteViewModel
    {
        public int clie_Id { get; set; }
        public string clie_Nombres { get; set; }
        public string clie_Apellidos { get; set; }
        public string clie_NombreCompleto { get; set; }
        public string clie_Identidad { get; set; }
        public string clie_RTN { get; set; }
        public string InicialSexo { get; set; }
        public string clie_Sexo { get; set; }
        public string clie_Telefono { get; set; }
        public int clie_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime clie_FechaCreacion { get; set; }
        public int? clie_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? clie_FechaModificacion { get; set; }
        public bool clie_Estado { get; set; }
    }
}
