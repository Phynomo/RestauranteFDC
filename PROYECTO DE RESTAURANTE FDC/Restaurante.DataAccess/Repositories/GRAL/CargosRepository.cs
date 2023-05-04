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
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@carg_Id", item.carg_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Cargos_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbCargos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbCargos item)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            RequestStatus result = new RequestStatus();
            
            var parametros = new DynamicParameters();
            parametros.Add("@carg_Descripcion", item.carg_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@carg_UsuCreacion", item.carg_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            var respuesta = db.QueryFirst<int>(ScriptsDataBase.UDP_Cargos_Insert, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = respuesta;
            return result;
        }

        public RequestStatus Newcharges(tbCargos item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@carg_Descripcion", item.carg_Descripcion, DbType.String, ParameterDirection.Input);
            parameters.Add("@carg_UsuCreacion", item.carg_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarCargos, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Cargo insertado"
            };

            return reques;
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
