using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class ReservacionesRepository : IRepository<tbReservaciones, VW_tbReservaciones>
    {
        public RequestStatus Delete(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public VW_tbReservaciones Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbReservaciones> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbReservaciones item)
        {
            throw new NotImplementedException();
        }
    }
}
