using Dapper;
using Events_Company_R.Entities.Entities;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Acce
{
    public class UsuariosRepository : IRepository<tbUsuarios>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbUsuario> ListarUsuarios()
        {
            return con.VW_tbUsuario.AsList();
        }

        public tbUsuarios ValidarLogin(tbUsuarios item)
        {
            using var db = new SqlConnection(Events_Company.ConnectionString);

            var parametros = new DynamicParameters();

            parametros.Add("@usua_Usuario", item.usua_Usuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@usua_Clave", item.usua_Clave, DbType.String, ParameterDirection.Input);

            return db.QueryFirst<tbUsuarios>(ScriptsDataBase.ValidarLogin, parametros, commandType: CommandType.StoredProcedure);
        }
        public RequestStatus Delete(tbUsuarios item)
        {
            throw new NotImplementedException();
        }

        public tbUsuarios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbUsuarios item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbUsuarios> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbUsuarios item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
