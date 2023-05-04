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
    public class CategoriaRepository : IRepository<tbCategorias, VW_tbCategorias>
    {
        public RequestStatus Delete(tbCategorias item)
        {
            throw new NotImplementedException();
        }

        public VW_tbCategorias Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbCategorias item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Newcategory(tbCategorias item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@cate_Descripcion", item.cate_Descripcion, DbType.String, ParameterDirection.Input);
            parameters.Add("@cate_UsuCreacion", item.cate_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarCategoria, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "categoria insertada"
            };

            return reques;
        }

        public IEnumerable<VW_tbCategorias> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbCategorias>(ScriptsDataBase.UDP_Categorias_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbCategorias item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@cate_Id", item.cate_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@cate_Descripcion", item.cate_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@cate_UsuModificacion", item.cate_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Categorias_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
