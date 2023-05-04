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
    public class IngredientesRepository : IRepository<tbIngredientes, VW_tbIngredientes>
    {
        public RequestStatus Delete(tbIngredientes item)
        {
            throw new NotImplementedException();
        }

        public VW_tbIngredientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbIngredientes item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbIngredientes> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbIngredientes>(ScriptsDataBase.UDP_Ingredientes_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbIngredientes item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@ingr_Id", item.ingr_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingr_Nombre", item.ingr_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@ingr_PrecioX100gr", item.ingr_PrecioX100gr, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@prov_Id", item.prov_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingr_UsuModificacion", item.ingr_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Ingredientes_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
