using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class Paquetes_EncabezadoRepository : IRepository<tbPaquetes_Encabezado>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbPaquetes_Encabezado_ListarPaquetesEncabezado> ListarPaquetesEncabezados()
        {
            return con.VW_tbPaquetes_Encabezado_ListarPaquetesEncabezado.AsList();
        }
        public RequestStatus Delete(tbPaquetes_Encabezado item)
        {
            throw new NotImplementedException();
        }

        public tbPaquetes_Encabezado Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPaquetes_Encabezado item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbPaquetes_Encabezado> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPaquetes_Encabezado item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
