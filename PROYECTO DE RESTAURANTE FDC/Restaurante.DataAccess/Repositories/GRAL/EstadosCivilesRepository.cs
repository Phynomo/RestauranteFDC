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
    public class EstadosCivilesRepository : IRepository<tbEstadosCiviles, VW_tbEstadosCiviles>
    {
        public RequestStatus Delete(tbEstadosCiviles item)
        {
            throw new NotImplementedException();
        }

        public VW_tbEstadosCiviles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEstadosCiviles item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbEstadosCiviles> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbEstadosCiviles>(ScriptsDataBase.UDP_EstadosCiviles_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbEstadosCiviles item)
        {
            throw new NotImplementedException();
        }
    }
}
