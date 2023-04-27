using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class ProveedoresRepository : IRepository<tbProveedores, VW_tbProveedores>
    {
        public RequestStatus Delete(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public VW_tbProveedores Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbProveedores> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbProveedores item)
        {
            throw new NotImplementedException();
        }
    }
}
