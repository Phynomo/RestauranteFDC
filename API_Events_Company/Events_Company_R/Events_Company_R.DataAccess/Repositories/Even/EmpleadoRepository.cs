using Dapper;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.DataAccess.Repositories.Gral
{
    public class EmpleadoRepository : IRepository<tbEmpleados>
    {
        Events_Company con = new Events_Company();
        public IEnumerable<VW_tbEmpleados_ListarEmpleados> ListarEmpleados()
        {
            return con.VW_tbEmpleados_ListarEmpleados.AsList();
        }
        public RequestStatus Delete(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public tbEmpleados Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEmpleados item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbEmpleados> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEmpleados item, int id)
        {
            throw new NotImplementedException();
        }
    }
}
