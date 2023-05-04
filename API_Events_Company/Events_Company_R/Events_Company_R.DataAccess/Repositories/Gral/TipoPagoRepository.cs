using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class TipoPagoRepository : IRepository<tbTipoPago>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbTipoPago> ListarTipoDePago()
        {
            return con.VW_tbTipoPago.AsList();
        }
        public RequestStatus Delete(tbTipoPago item)
        {
            throw new NotImplementedException();
        }

        public tbTipoPago Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbTipoPago item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbTipoPago> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbTipoPago item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
