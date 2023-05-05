using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.REST
{
    public class PlatillosRepository : IRepository<tbPlatillos, VW_tbPlatillos>
    {
        public RequestStatus Delete(tbPlatillos item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@plat_Id", item.plat_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Platillos_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbPlatillos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPlatillos item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbPlatillos> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbPlatillos>(ScriptsDataBase.UDP_Platillos_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbPlatillos item)
        {
            throw new NotImplementedException();
        }
    }
}
