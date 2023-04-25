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

        public RequestStatus Update(T item, int id);

        public RequestStatus Delete(T item);

        public T Find(int? id);
    }
}
