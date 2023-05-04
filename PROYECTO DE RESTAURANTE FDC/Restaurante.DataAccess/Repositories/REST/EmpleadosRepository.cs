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

        public RequestStatus NewEmployee(tbEmpleados item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@empe_Nombres",item.empe_Nombres, DbType.String, ParameterDirection.Input);
            parameters.Add("@empe_Apellidos",item.empe_Apellidos, DbType.String, ParameterDirection.Input);
            parameters.Add("@empe_Identidad",item.empe_Identidad, DbType.String, ParameterDirection.Input);
            parameters.Add("@empe_FechaNacimiento",item.empe_FechaNacimiento, DbType.Date, ParameterDirection.Input);
            parameters.Add("@empe_Sexo",item.empe_Sexo, DbType.String, ParameterDirection.Input);
            parameters.Add("@eciv_Id",item.eciv_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@muni_Id",item.muni_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@empe_DireccionExacta",item.empe_DireccionExacta, DbType.String, ParameterDirection.Input);
            parameters.Add("@empe_Telefono",item.empe_Telefono, DbType.String, ParameterDirection.Input);
            parameters.Add("@empe_CorreoElectronico",item.empe_CorreoElectronico, DbType.String, ParameterDirection.Input);
            parameters.Add("@sucu_Id",item.sucu_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@carg_Id",item.carg_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@empe_UsuCreacion",item.empe_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarEmpleados, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Empleado insertado !"
            };

            return reques;
        }
        public IEnumerable<VW_tbEmpleados> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbEmpleados>(ScriptsDataBase.UDP_Empleados_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbEmpleados item)
        {
            throw new NotImplementedException();
        }
    }
}
