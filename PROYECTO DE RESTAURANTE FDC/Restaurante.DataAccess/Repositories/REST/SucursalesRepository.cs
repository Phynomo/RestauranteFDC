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
    public class SucursalesRepository : IRepository<tbSucursales, VW_tbSucursales>
    {
        public RequestStatus Delete(tbSucursales item)
        {
            throw new NotImplementedException();
        }

        public VW_tbSucursales Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbSucursales item)
        {
            throw new NotImplementedException();
        }
        public RequestStatus NewBranch(tbSucursales item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@sucu_Nombre", item.sucu_Nombre, DbType.String, ParameterDirection.Input);
            parameters.Add("@muni_Id", item.muni_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@sucu_Direccion", item.sucu_Direccion, DbType.String, ParameterDirection.Input);
            parameters.Add("@sucu_UsuCreacion", item.sucu_UsuCreacion, DbType.Int32, ParameterDirection.Input);

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarSucursales, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Sucursal insertada !"
            };

            return reques;
        }

        public IEnumerable<VW_tbSucursales> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbSucursales>(ScriptsDataBase.UDP_Sucursales_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbSucursales item)
        {
            throw new NotImplementedException();
        }
    }
}
