using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class PlatillosRepository : IRepository<tbPlatillos, VW_tbPlatillos>
    {
        public RequestStatus Delete(tbPlatillos item)
        {
            throw new NotImplementedException();
        }

        public VW_tbPlatillos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPlatillos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbPlatillos> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPlatillos item)
        {
            throw new NotImplementedException();
        }
    }
}
