using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class ClienteRepository : IRepository<tbClientes, VW_tbClientes>
    {
        public RequestStatus Delete(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public VW_tbClientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbClientes> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbClientes item)
        {
            throw new NotImplementedException();
        }
    }
}
