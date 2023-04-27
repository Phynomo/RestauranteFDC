using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class FacturasRepository : IRepository<tbFacturas, VW_tbFacturas>
    {
        public RequestStatus Delete(tbFacturas item)
        {
            throw new NotImplementedException();
        }

        public VW_tbFacturas Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbFacturas item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbFacturas> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbFacturas item)
        {
            throw new NotImplementedException();
        }
    }
}
