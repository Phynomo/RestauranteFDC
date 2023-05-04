using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Acce
{
    public class RolesRepository : IRepository<tbRoles>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbRoles_ListarRoles> ListarRoles()
        {
            return con.VW_tbRoles_ListarRoles.AsList();
        }
        public RequestStatus Delete(tbRoles item)
        {
            throw new NotImplementedException();
        }

        public tbRoles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbRoles item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbRoles> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbRoles item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
