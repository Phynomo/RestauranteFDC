using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class DepartamentosRepository : IRepository<tbDepartamentos>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbDepartamentos> ListarDepartamentos()
        {
            return con.VW_tbDepartamentos.AsList();
        }
        public RequestStatus Delete(tbDepartamentos item)
        {
            throw new NotImplementedException();
        }

        public tbDepartamentos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbDepartamentos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbDepartamentos> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbDepartamentos item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
