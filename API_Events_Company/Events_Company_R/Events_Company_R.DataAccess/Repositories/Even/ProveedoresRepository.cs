using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class ProveedoresRepository : IRepository<tbProveedores>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbProveedores_ListarProveedores> ListarProveedores()
        {
            return con.VW_tbProveedores_ListarProveedores.AsList();
        }
        public RequestStatus Delete(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public tbProveedores Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbProveedores> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbProveedores item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
