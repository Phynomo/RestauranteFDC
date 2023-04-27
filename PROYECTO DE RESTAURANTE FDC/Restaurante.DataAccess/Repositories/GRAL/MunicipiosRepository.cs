using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.GRAL
{
    public class MunicipiosRepository : IRepository<tbMunicipios, VW_tbMunicipios>
    {
        public RequestStatus Delete(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public VW_tbMunicipios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbMunicipios> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbMunicipios>(ScriptsDataBase.UDP_Municipios_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbMunicipios item)
        {
            throw new NotImplementedException();
        }
    }
}
