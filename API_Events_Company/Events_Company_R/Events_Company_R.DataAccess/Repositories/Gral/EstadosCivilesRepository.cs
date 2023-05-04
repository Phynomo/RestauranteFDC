using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class EstadosCivilesRepository : IRepository<tbEstadosCiviles>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbEstadosCiviles> ListarEstadosCiviles()
        {
            return con.VW_tbEstadosCiviles.AsList();
        }
        public RequestStatus Delete(tbEstadosCiviles item)
        {
            throw new NotImplementedException();
        }

        public tbEstadosCiviles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEstadosCiviles item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbEstadosCiviles> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEstadosCiviles item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
