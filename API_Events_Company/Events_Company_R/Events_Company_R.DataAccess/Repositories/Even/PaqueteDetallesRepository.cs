using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class PaqueteDetallesRepository : IRepository<tbPaquete_Detalles>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbPaqueteDetalles_ListarPaqueteDetalles> ListarPaqueteDetalles()
        {
            return con.VW_tbPaqueteDetalles_ListarPaqueteDetalles.AsList();
        }
        public RequestStatus Delete(tbPaquete_Detalles item)
        {
            throw new NotImplementedException();
        }

        public tbPaquete_Detalles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPaquete_Detalles item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbPaquete_Detalles> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPaquete_Detalles item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
