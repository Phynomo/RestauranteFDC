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
    public class FacturasRepository : IRepository<tbFacturas, VW_tbFacturas>
    {
        public RequestStatus Delete(tbFacturas item)
        {
            throw new NotImplementedException();
        }

        public VW_tbFacturas Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbFacturas item)
        {
            throw new NotImplementedException();
        }



        public RequestStatus NewBill(tbFacturas item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@clie_Id",item.clie_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@empe_Id",item.empe_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@metp_Id",item.metp_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@fact_Cerrada",item.fact_Cerrada, DbType.Boolean, ParameterDirection.Input);
            parameters.Add("@fact_UsuCreacion",item.fact_UsuCreacion, DbType.Int32, ParameterDirection.Input);

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarFactura, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Factura insertada !"
            };

            return reques;
        }

        public IEnumerable<VW_tbFacturas> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbFacturas>(ScriptsDataBase.UDP_Facturas_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbFacturas item)
        {
            throw new NotImplementedException();
        }
    }
}
