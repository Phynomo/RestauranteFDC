using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class EventosRepository : IRepository<tbEventos>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbEventos_ListarEventos> ListarEventos()
        {
            return con.VW_tbEventos_ListarEventos.AsList();
        }
        public RequestStatus Delete(tbEventos item)
        {
            throw new NotImplementedException();
        }

        public tbEventos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEventos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbEventos> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEventos item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
