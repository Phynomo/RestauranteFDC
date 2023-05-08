using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.DataAccess.Context;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.ACCE
{
    public class UsuariosRepository : IRepository<tbUsuarios, VW_tbUsuarios>
    {
        public RequestStatus Delete(tbUsuarios item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@user_Id", item.user_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Usuarios_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbUsuarios Find(int? id)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<VW_tbUsuarios> Login(string usuario, string contrasena)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@user_NombreUsuario", usuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_Contrasena", contrasena, DbType.String, ParameterDirection.Input);

            return db.Query<VW_tbUsuarios>(ScriptsDataBase.UDP_Login, parametros, commandType: System.Data.CommandType.StoredProcedure);
        }
        public RequestStatus Recuperar(tbUsuarios item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@user_NombreUsuario", item.user_NombreUsuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_Contrasena", item.user_Contrasena, DbType.String, ParameterDirection.Input);

            var resultado = db.QueryFirst<string>(ScriptsDataBase.UDP_Recuperar_Usuarios, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.MessageStatus = resultado;

            return result;
        }

        public RequestStatus Insert(tbUsuarios item)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            RequestStatus result = new RequestStatus();

            var parametros = new DynamicParameters();
            parametros.Add("@user_NombreUsuario", item.user_NombreUsuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_Contrasena", item.user_Contrasena, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_Correo", item.user_Correo, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_Image", item.user_Image, DbType.String, ParameterDirection.Input);
            parametros.Add("@user_EsAdmin", item.user_EsAdmin, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@role_Id", item.role_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@empe_Id", item.empe_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@clie_Id", item.clie_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@user_UsuCreacion", item.user_UsuCreacion, DbType.Int32, ParameterDirection.Input);



            var respuesta = db.QueryFirst<int>(ScriptsDataBase.UDP_Usuarios_Insert, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = respuesta;
            return result;
        }

        public IEnumerable<VW_tbUsuarios> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            return db.Query<VW_tbUsuarios>(ScriptsDataBase.UDP_Usuarios_List, null, commandType: System.Data.CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbUsuarios item)
        {
            throw new NotImplementedException();
        }
    }
}
