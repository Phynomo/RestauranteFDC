using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.GRAL
{
    public class CategoriaRepository : IRepository<tbCategorias, VW_tbCategorias>
    {
        public RequestStatus Delete(tbCategorias item)
        {
            throw new NotImplementedException();
        }

        public VW_tbCategorias Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbCategorias item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbCategorias> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbCategorias item)
        {
            throw new NotImplementedException();
        }
    }
}
