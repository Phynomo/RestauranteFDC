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
    public class IngredientesRepository : IRepository<tbIngredientes, VW_tbIngredientes>
    {
        public RequestStatus Delete(tbIngredientes item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@ingr_Id", item.ingr_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Ingredientes_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbIngredientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbIngredientes item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewIngrediente(tbIngredientes item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@ingr_Nombre",item.ingr_Nombre, DbType.String, ParameterDirection.Input);
            parameters.Add("@ingr_PrecioX100gr",item.ingr_PrecioX100gr, DbType.Decimal, ParameterDirection.Input);
            parameters.Add("@prov_Id",item.prov_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingr_UsuCreacion",item.ingr_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarIngredientes, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Ingrediente insertado !"
            };

            return reques;
        }
        public RequestStatus NewIngredienteStock(tbIngredientes item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@ingr_Id", item.ingr_Id, DbType.String, ParameterDirection.Input);
            parameters.Add("@sucu_Id", item.sucu_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ingrsucu_StockEnGramos", item.ingrsucu_StockEnGramos, DbType.Decimal, ParameterDirection.Input);
            parameters.Add("@ingrsucu_UsuCreacion", item.ingr_UsuCreacion, DbType.Int32, ParameterDirection.Input);

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarIngredientesStock, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Ingrediente insertado !"
            };

            return reques;
        }

        public IEnumerable<VW_tbIngredientes> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbIngredientes>(ScriptsDataBase.UDP_Ingredientes_List, null, commandType: CommandType.StoredProcedure);
        }

        public IEnumerable<VW_tbIngredientes> List(int sucu_Id)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@sucu_Id", sucu_Id, DbType.Int32, ParameterDirection.Input);

            return db.Query<VW_tbIngredientes>(ScriptsDataBase.UDP_Ingredientes_ListSucu, parametros, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbIngredientes item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@ingr_Id", item.ingr_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingr_Nombre", item.ingr_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@ingr_PrecioX100gr", item.ingr_PrecioX100gr, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@prov_Id", item.prov_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingr_UsuModificacion", item.ingr_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Ingredientes_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
