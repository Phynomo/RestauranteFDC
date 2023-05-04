using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class MunicipiosRepository : IRepository<tbMunicipios>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbMunicipios> ListarMunicipios()
        {
            return con.VW_tbMunicipios.AsList();
        }
        public RequestStatus Delete(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public tbMunicipios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbMunicipios> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbMunicipios item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
