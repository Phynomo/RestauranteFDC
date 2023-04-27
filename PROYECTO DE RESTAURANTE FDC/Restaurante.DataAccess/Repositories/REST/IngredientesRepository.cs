using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class IngredientesRepository : IRepository<tbIngredientes, VW_tbIngredientes>
    {
        public RequestStatus Delete(tbIngredientes item)
        {
            throw new NotImplementedException();
        }

        public VW_tbIngredientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbIngredientes item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbIngredientes> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbIngredientes item)
        {
            throw new NotImplementedException();
        }
    }
}
