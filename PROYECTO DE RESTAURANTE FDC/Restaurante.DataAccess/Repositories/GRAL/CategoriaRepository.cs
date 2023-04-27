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

        public IEnumerable<VW_tbCategorias> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbCategorias>(ScriptsDataBase.UDP_Categorias_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbCategorias item)
        {
            throw new NotImplementedException();
        }
    }
}
