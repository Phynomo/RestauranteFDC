using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Even
{
    public class ServiciosRepository : IRepository<tbServicios>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbServicios_ListarServicios> ListarServicios()
        {
            return con.VW_tbServicios_ListarServicios.AsList();
        }
        public RequestStatus Delete(tbServicios item)
        {
            throw new NotImplementedException();
        }

        public tbServicios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbServicios item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbServicios> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbServicios item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
