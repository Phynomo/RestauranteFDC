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
    public class ClienteRepository : IRepository<tbClientes, VW_tbClientes>
    {
        public RequestStatus Delete(int id)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Id", id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Clientes_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbClientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewClient(tbClientes item)
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
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarClientes, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Cliente insertado !"
            };

            return reques;
        }
        public IEnumerable<VW_tbClientes> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbClientes>(ScriptsDataBase.UDP_Clientes_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbClientes item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Id", item.clie_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@clie_Nombres", item.clie_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Apellidos", item.clie_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Identidad", item.clie_Identidad, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_RTN", item.clie_RTN, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Sexo", item.clie_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Telefono", item.clie_Telefono, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_UsuModificacion", item.clie_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Clientes_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }

        public IEnumerable<tbClientes> MostarDatos(int id)
        {

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbClientes>(ScriptsDataBase.CargarClientes, parametros, commandType: CommandType.StoredProcedure);
        }

        public IEnumerable<VW_tbClientes> Detalles(int id)
        {

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<VW_tbClientes>(ScriptsDataBase.DetallesClientes, parametros, commandType: CommandType.StoredProcedure);
        }
        public RequestStatus Delete(tbClientes item)
        {
            throw new NotImplementedException();
        }
    }
}
