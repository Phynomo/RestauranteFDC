using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories
{
    interface IRepository<T,U>
    {
        public IEnumerable<U> List();

        public RequestStatus Insert(T item);

        public RequestStatus Update(T item);

        public RequestStatus Delete(T item);

        public U Find(int? id);
    }
}
