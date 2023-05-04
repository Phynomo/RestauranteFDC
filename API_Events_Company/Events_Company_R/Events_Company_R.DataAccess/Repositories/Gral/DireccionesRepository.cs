using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class DireccionesRepository : IRepository<tbDirecciones>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbDirecciones> ListarDirecciones()
        {
            return con.VW_tbDirecciones.AsList();
        }
        public RequestStatus Delete(tbDirecciones item)
        {
            throw new NotImplementedException();
        }

        public tbDirecciones Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbDirecciones item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbDirecciones> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbDirecciones item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
