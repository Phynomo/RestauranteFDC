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
    public class EmpleadosRepository : IRepository<tbEmpleados, VW_tbEmpleados>
    {
        public RequestStatus Delete(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public VW_tbEmpleados Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbEmpleados> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbEmpleados>(ScriptsDataBase.UDP_Empleados_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbEmpleados item)
        {
            throw new NotImplementedException();
        }
    }
}
