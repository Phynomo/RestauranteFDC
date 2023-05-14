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
    public class PantallasPorRolesRepository : IRepository<tbPantallasPorRoles, tbPantallasPorRoles>
    {
        public RequestStatus Delete(tbPantallasPorRoles item)
        { 
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@role_Id", item.role_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_PantallasPorRoles_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public tbPantallasPorRoles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPantallasPorRoles item)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            RequestStatus result = new RequestStatus();

            var parametros = new DynamicParameters();
            parametros.Add("@role_Id", item.role_Id, DbType.String, ParameterDirection.Input);
            parametros.Add("@pant_Id", item.pant_Id, DbType.String, ParameterDirection.Input);
            parametros.Add("@prol_UsuCreacion", item.prol_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            var respuesta = db.QueryFirst<int>(ScriptsDataBase.UDP_PantallasPorRoles_Insert, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = respuesta;
            return result;
        }

        public IEnumerable<tbPantallasPorRoles> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPantallasPorRoles item)
        {
            throw new NotImplementedException();
        }
    }
}
