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
    public class PantallasRepository : IRepository<tbPantallas, VW_tbPantallas>
    {
        public RequestStatus Delete(tbPantallas item)
        {
            throw new NotImplementedException();
        }

        public VW_tbPantallas Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPantallas item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbPantallas> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbPantallas>(ScriptsDataBase.UDP_Pantallas_List, null, commandType: CommandType.StoredProcedure);
        }
        
        public IEnumerable<VW_tbPantallas> ListporRol(int rol, int esAdmin)
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            parametros.Add("@role_Id", rol, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@esAdmin", esAdmin, DbType.Int32, ParameterDirection.Input);

            return db.Query<VW_tbPantallas>(ScriptsDataBase.UDP_Pantallas_ListporRoles, parametros, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbPantallas item)
        {
            throw new NotImplementedException();
        }
    }
}
