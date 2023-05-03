﻿using Dapper;
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
    public class ClienteRepository : IRepository<tbClientes, VW_tbClientes>
    {
        public RequestStatus Delete(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public VW_tbClientes Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClientes item)
        {
            throw new NotImplementedException();
        }
        //public RequestStatus NewCustomer(tbClientes item)
        //{
        //    var parameters = new DynamicParameters();
        //    parameters.Add("@muni_Nombre", item.muni_Nombre, DbType.String, ParameterDirection.Input);
        //    parameters.Add("@muni_Codigo", item.muni_Codigo, DbType.String, ParameterDirection.Input);
        //    parameters.Add("@depa_Id", item.depa_Id, DbType.Int32, ParameterDirection.Input);
        //    parameters.Add("@muni_UsuCreacion", item.muni_UsuCreacion, DbType.Int32, ParameterDirection.Input);
        //    using var db = new SqlConnection(RestauranteCon.ConnectionString);
        //    var result = db.QueryFirst<int>(ScriptsDataBase.InsertarMunicipio, parameters, commandType: CommandType.StoredProcedure);

        //    RequestStatus reques = new()
        //    {
        //        CodeStatus = result,
        //        MessageStatus = "Municipio insertado !"
        //    };

        //    return reques;
        //}
        public IEnumerable<VW_tbClientes> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbClientes>(ScriptsDataBase.UDP_Clientes_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbClientes item)
        {
            throw new NotImplementedException();
        }
    }
}
