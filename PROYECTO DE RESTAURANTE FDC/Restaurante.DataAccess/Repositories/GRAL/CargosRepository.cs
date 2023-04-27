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
    public class CargosRepository : IRepository<tbCargos, VW_tbCargos>
    {
        public RequestStatus Delete(tbCargos item)
        {
            throw new NotImplementedException();
        }

        public VW_tbCargos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbCargos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbCargos> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbCargos>(ScriptsDataBase.UDP_Cargos_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbCargos item)
        {
            throw new NotImplementedException();
        }
    }
}
