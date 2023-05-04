using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurante.WEBUI.Models
{
    public class FacturaViewModel
    {
        public int fact_Id { get; set; }
        public int clie_Id { get; set; }
        public string clie_Nombres { get; set; }
        public string clie_Apellidos { get; set; }
        public string clie_NombreCompleto { get; set; }
        public string clie_RTN { get; set; }
        public string clie_Telefono { get; set; }
        public string clie_Identidad { get; set; }
        public string clie_Sexo { get; set; }
        public int empe_Id { get; set; }
        public string empe_Nombres { get; set; }
        public string empe_Apellidos { get; set; }
        public string empe_NombreCompleto { get; set; }
        public int sucu_Id { get; set; }
        public string sucu_Nombre { get; set; }
        public string sucu_Direccion { get; set; }
        public int metp_Id { get; set; }
        public string metp_Descripcion { get; set; }
        public bool fact_Cerrada { get; set; }
        public DateTime fact_Fecha { get; set; }
        public DateTime fact_FechaCreacion { get; set; }
        public int fact_UsuCreacion { get; set; }
        public string user_NombreUsuCreacion { get; set; }
        public DateTime? fact_FechaModificacion { get; set; }
        public int? fact_UsuModificacion { get; set; }
        public string user_NombreUsuModificacion { get; set; }
        public bool fact_Estado { get; set; }
        public int fade_Id { get; set; }
        public int plat_Id { get; set; }
        public string plat_Nombre { get; set; }
        public decimal plat_Precio { get; set; }
        public string plat_Imagen { get; set; }
        public int cate_Id { get; set; }
        public string cate_Descripcion { get; set; }
        public int fade_Cantidad { get; set; }
        public decimal fade_Precio { get; set; }
        public DateTime fade_FechaCreacion { get; set; }
        public int fade_UsuCreacion { get; set; }
        public DateTime? fade_FechaModificacion { get; set; }
        public int? fade_UsuModificacion { get; set; }
        public bool fade_Estado { get; set; }
    }
}
