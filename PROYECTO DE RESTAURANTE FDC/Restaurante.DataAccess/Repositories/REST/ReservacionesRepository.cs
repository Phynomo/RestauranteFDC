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
    public class ReservacionesRepository : IRepository<tbReservaciones, VW_tbReservaciones>
    {
        public RequestStatus Delete(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public VW_tbReservaciones Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbReservaciones> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbReservaciones>(ScriptsDataBase.UDP_Reservaciones_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbReservaciones item)
        {
            throw new NotImplementedException();
        }
    }
}
