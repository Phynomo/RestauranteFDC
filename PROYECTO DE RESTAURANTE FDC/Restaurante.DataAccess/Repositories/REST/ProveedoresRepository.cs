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
            parameters.Add("@prov_NombreEmpresa",item.prov_NombreEmpresa, DbType.String, ParameterDirection.Input);
            parameters.Add("@prov_NombreContacto",item.prov_NombreContacto, DbType.String, ParameterDirection.Input);
            parameters.Add("@prov_Telefono",item.prov_Telefono, DbType.String, ParameterDirection.Input);
            parameters.Add("@muni_Id",item.muni_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@prov_DireccionExacta",item.prov_DireccionExacta, DbType.String, ParameterDirection.Input);
            parameters.Add("@prov_UsuCreacion",item.prov_UsuCreacion, DbType.Int32, ParameterDirection.Input);
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
