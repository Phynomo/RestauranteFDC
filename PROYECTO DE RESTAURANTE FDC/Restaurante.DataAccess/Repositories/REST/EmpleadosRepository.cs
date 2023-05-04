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
    public class EmpleadosRepository : IRepository<tbEmpleados, VW_tbEmpleados>
    {
        public RequestStatus Delete(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public VW_tbEmpleados Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbEmpleados> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbEmpleados>(ScriptsDataBase.UDP_Empleados_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbEmpleados item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@empe_Id", item.empe_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@empe_Nombres", item.empe_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@empe_Apellidos", item.empe_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@empe_Identidad", item.empe_Identidad, DbType.String, ParameterDirection.Input);
            parametros.Add("@empe_FechaCreacion", item.empe_FechaCreacion, DbType.Date, ParameterDirection.Input);
            parametros.Add("@empe_Sexo", item.empe_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@eciv_Id", item.eciv_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@muni_Id", item.muni_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@empe_DireccionExacta", item.empe_DireccionExacta, DbType.String, ParameterDirection.Input);
            parametros.Add("@empe_Telefono", item.empe_Telefono, DbType.String, ParameterDirection.Input);
            parametros.Add("@empe_CorreoElectronico", item.empe_CorreoElectronico, DbType.String, ParameterDirection.Input);
            parametros.Add("@sucu_Id", item.sucu_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@carg_Id", item.carg_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@empe_UsuModificacion", item.empe_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Empleados_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
