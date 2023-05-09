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
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@metp_Id", item.metp_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_MetodosPago_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbMetodosPago Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMetodosPago item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewMethod(tbMetodosPago item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@metp_Descripcion", item.metp_Descripcion, DbType.String, ParameterDirection.Input);
            parameters.Add("@metp_UsuCreacion", item.metp_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarMetodoPago, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Metodo de pago insertado !"
            };

            return reques;
        }
        public IEnumerable<VW_tbMetodosPago> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbMetodosPago>(ScriptsDataBase.UDP_MetodosPago_List, null, commandType: CommandType.StoredProcedure);
        }
        
        public IEnumerable<VW_tbMetodosPago> Chart()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbMetodosPago>(ScriptsDataBase.UDP_MetodosPago_Chart, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbMetodosPago item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@metp_Id", item.metp_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@metp_Descripcion", item.metp_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@metp_UsuModificacion", item.metp_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_MetodosPago_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
