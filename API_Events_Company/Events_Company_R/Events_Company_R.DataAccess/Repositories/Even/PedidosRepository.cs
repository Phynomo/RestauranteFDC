using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class PedidosRepository : IRepository<Pedidos>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_Pedidos_ListarPedidos> ListarPedidos()
        {
            return con.VW_Pedidos_ListarPedidos.AsList();
        }
        public RequestStatus Delete(Pedidos item)
        {
            throw new NotImplementedException();
        }

        public Pedidos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(Pedidos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Pedidos> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(Pedidos item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
