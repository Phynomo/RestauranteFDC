using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class InventarioRepository : IRepository<tbInventario>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbInventario_ListarInventario> ListarInventarios()
        {
            return con.VW_tbInventario_ListarInventario.AsList();
        }
        public RequestStatus Delete(tbInventario item)
        {
            throw new NotImplementedException();
        }

        public tbInventario Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbInventario item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbInventario> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbInventario item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
