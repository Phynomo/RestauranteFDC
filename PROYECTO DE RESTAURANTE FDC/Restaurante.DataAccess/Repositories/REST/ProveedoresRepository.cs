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
    public class ProveedoresRepository : IRepository<tbProveedores, VW_tbProveedores>
    {
        public RequestStatus Delete(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public VW_tbProveedores Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbProveedores item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewSupplier(tbProveedores item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@clie_Nombres", item.clie_Nombres, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_Apellidos", item.clie_Apellidos, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_Identidad", item.clie_Identidad, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_RTN", item.clie_RTN, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_Sexo", item.clie_Sexo, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_Telefono", item.clie_Telefono, DbType.String, ParameterDirection.Input);
            parameters.Add("@clie_UsuCreacion", item.clie_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarProveedores, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Proveedor insertado !"
            };

            return reques;
        }

        public IEnumerable<VW_tbProveedores> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbProveedores>(ScriptsDataBase.UDP_Proveedores_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbProveedores item)
        {
            throw new NotImplementedException();
        }
    }
}
