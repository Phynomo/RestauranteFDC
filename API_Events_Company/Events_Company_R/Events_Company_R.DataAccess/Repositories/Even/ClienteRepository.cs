using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class ClienteRepository : IRepository<tbClientes>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbClientes_ListarClientes> ListarClientes()
        {
            return con.VW_tbClientes_ListarClientes.AsList();
        }

        public RequestStatus Delete(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public tbClientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbClientes> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbClientes item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
