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
    public class MetodosPagoRepository : IRepository<tbMetodosPago, VW_tbMetodosPago>
    {
        public RequestStatus Delete(tbMetodosPago item)
        {
            throw new NotImplementedException();
        }

        public VW_tbMetodosPago Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMetodosPago item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbMetodosPago> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbMetodosPago>(ScriptsDataBase.UDP_MetodosPago_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbMetodosPago item)
        {
            throw new NotImplementedException();
        }
    }
}
