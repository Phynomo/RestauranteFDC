using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Events_Company_R.API.Models
{
    public class UsuariosViewModel
    {
        public int usua_Id { get; set; }
        public string usua_Usuario { get; set; }
        public string usua_Clave { get; set; }
        public int empl_Id { get; set; }
        public int role_Id { get; set; }

    }
}
