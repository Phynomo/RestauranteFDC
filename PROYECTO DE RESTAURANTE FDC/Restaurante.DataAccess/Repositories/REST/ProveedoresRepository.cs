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
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@prov_Id", item.prov_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Proveedores_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbProveedores Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbProveedores item)
        {
            throw new NotImplementedException();
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
