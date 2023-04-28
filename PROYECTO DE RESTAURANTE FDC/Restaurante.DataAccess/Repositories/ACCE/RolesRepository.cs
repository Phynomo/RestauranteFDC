﻿using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.ACCE
{
    public class RolesRepository : IRepository<tbRoles, VW_tbRoles>
    {
        public RequestStatus Delete(tbRoles item)
        {
            throw new NotImplementedException();
        }

        public VW_tbRoles Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbRoles item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbRoles> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbRoles>(ScriptsDataBase.UDP_Roles_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbRoles item)
        {
            throw new NotImplementedException();
        }
    }
}