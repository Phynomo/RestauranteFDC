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

        public RequestStatus AgregarIngPLat(tbIngredientesXPlatillos item)
        {

            var parameters = new DynamicParameters();
            parameters.Add("@plat_Id", item.plat_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingr_Id", item.ingr_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrplat_Gramos", item.ingrplat_Gramos, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrplat_UsuCreacion", item.ingrplat_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingr_PrecioX100gr", item.ingr_PrecioX100gr, DbType.Decimal, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.AgregarIngredientePlatillo, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Ingrediente del platillo insertado !"
            };

            return reques;
        }

        public RequestStatus EliminarIngPLat(tbIngredientesXPlatillos item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@ingrplat_Id", item.ingrplat_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingr_Id", item.ingr_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@plat_Id", item.plat_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrplat_Gramos", item.ingrplat_Gramos, DbType.Decimal, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.EliminarIngredientePlatillo, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Ingrediente del platillo insertado !"
            };

            return reques;
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
