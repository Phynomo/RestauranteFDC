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
    public class DepartamentosRepository : IRepository<tbDepartamentos, VW_tbDepartamentos>
    {
        public RequestStatus Delete(tbDepartamentos item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@depa_Id", item.depa_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Departamentos_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbDepartamentos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbDepartamentos item)
        {
            throw new NotImplementedException();
        }
        public RequestStatus NewDepartament(tbDepartamentos item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@depa_Nombre", item.depa_Nombre, DbType.String, ParameterDirection.Input);
            parameters.Add("@depa_Codigo", item.depa_Codigo, DbType.String, ParameterDirection.Input);
            parameters.Add("@depa_UsuCreacion", item.depa_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarDepartamento, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus requestStatus = new()
            {
                CodeStatus = result,
                MessageStatus = "Insertado"
            };
            return requestStatus;
            
            

        }


        public IEnumerable<VW_tbDepartamentos> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbDepartamentos>(ScriptsDataBase.UDP_Departamentos_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbDepartamentos item)
        {
            throw new NotImplementedException();
        }
    }
}
