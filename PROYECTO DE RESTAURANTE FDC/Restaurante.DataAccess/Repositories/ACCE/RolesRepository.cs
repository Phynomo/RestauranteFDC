using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.ACCE
{
    public class RolesRepository : IRepository<tbRoles, VW_tbRoles>
    {
        public RequestStatus Delete(tbRoles item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@role_Id", item.role_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Roles_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbRoles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbRoles item)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            RequestStatus result = new RequestStatus();

            var parametros = new DynamicParameters();
            parametros.Add("@role_Nombre", item.role_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@role_UsuCreacion", item.role_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            var respuesta = db.QueryFirst<int>(ScriptsDataBase.UPD_Roles_Insert, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = respuesta;
            return result;
        }

        public IEnumerable<VW_tbRoles> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbRoles>(ScriptsDataBase.UDP_Roles_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbRoles item)
        {
            throw new NotImplementedException();
        }
    }
}
