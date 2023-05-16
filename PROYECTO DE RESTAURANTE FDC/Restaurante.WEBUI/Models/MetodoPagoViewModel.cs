using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class MetodoPagoViewModel
    {
        public int metp_Id { get; set; }
        public int CatidadMetodosPago { get; set; }
        public string metp_Descripcion { get; set; }
        public int metp_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime metp_FechaCreacion { get; set; }
        public int? metp_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public DateTime? metp_FechaModificacion { get; set; }
        public bool metp_Estado { get; set; }
    }
}
