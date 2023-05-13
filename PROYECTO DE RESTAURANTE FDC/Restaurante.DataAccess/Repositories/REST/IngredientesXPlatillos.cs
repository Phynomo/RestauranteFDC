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

        public RequestStatus AgregarIngPLat(int plat_Id,int ingr_Id, int ingrplat_Gramos, int ingrplat_UsuCreacion, decimal ingr_PrecioX100gr)
        {

            var parameters = new DynamicParameters();
            parameters.Add("@plat_Id", plat_Id, DbType.String, ParameterDirection.Input);
            parameters.Add("@ingr_Id", ingr_Id, DbType.Decimal, ParameterDirection.Input);
            parameters.Add("@ingrplat_Gramos", ingrplat_Gramos, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrplat_UsuCreacion", ingrplat_UsuCreacion, DbType.String, ParameterDirection.Input);
            parameters.Add("@ingr_PrecioX100gr", ingr_PrecioX100gr, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.AgregarIngredientePlatillo, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Ingrediente del platillo insertado !"
            };

            return reques;
        }

        public RequestStatus EliminarIngPLat(int ingrplat_Id, int ingr_Id, int ingrplat_Gramos, int plat_Id)
        {
            
            
            
            var parameters = new DynamicParameters();
            parameters.Add("@ingrplat_Id", ingrplat_Id, DbType.String, ParameterDirection.Input);
            parameters.Add("@ingr_Id", ingr_Id, DbType.Decimal, ParameterDirection.Input);
            parameters.Add("@plat_Id", plat_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrplat_Gramos", ingrplat_Gramos, DbType.String, ParameterDirection.Input);
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
