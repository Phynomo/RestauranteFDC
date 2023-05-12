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
    public class IngredientesXPlatillos : IRepository<tbPlatillos, VW_tbPlatillos>
    {

        public IEnumerable<VW_IngredientesXPlatillo> List(int Id)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@plat_Id",Id, DbType.Int32, ParameterDirection.Input);
            return db.Query<VW_IngredientesXPlatillo>(ScriptsDataBase.MostarIngredientesXplatillo, parametros, commandType: CommandType.StoredProcedure);
        }
        public RequestStatus Delete(tbPlatillos item)
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPlatillos item)
        {
            throw new NotImplementedException();
        }
    }
}
