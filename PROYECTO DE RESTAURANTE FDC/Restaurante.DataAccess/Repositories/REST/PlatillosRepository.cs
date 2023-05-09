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
    public class PlatillosRepository : IRepository<tbPlatillos, VW_tbPlatillos>
    {
        public RequestStatus Delete(tbPlatillos item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@plat_Id", item.plat_Id, DbType.Int32, ParameterDirection.Input);
            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Platillos_Delete, parametros, commandType: System.Data.CommandType.StoredProcedure);

            result.CodeStatus = resultado;

            return result;
        }

        public VW_tbPlatillos Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPlatillos item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewPlatillos(tbPlatillos item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@plat_Nombre",item.plat_Nombre, DbType.String, ParameterDirection.Input);
            parameters.Add("@plat_Precio",item.plat_Precio, DbType.Decimal, ParameterDirection.Input);
            parameters.Add("@cate_Id",item.cate_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@plat_Imagen",item.plat_Imagen, DbType.String, ParameterDirection.Input);
            parameters.Add("@plat_UsuCreacion",item.plat_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarPlatillos, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Platillo insertado !"
            };

            return reques;
        }

        public IEnumerable<VW_tbPlatillos> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbPlatillos>(ScriptsDataBase.UDP_Platillos_List, null, commandType: CommandType.StoredProcedure);
        }
        
        public IEnumerable<VW_tbPlatillos> Grafica()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbPlatillos>(ScriptsDataBase.UDP_Platillos_Chart, null, commandType: CommandType.StoredProcedure);
        }
        
        public IEnumerable<VW_tbPlatillos> GraficaPedidos()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbPlatillos>(ScriptsDataBase.UDP_Platillos_ChartPedidos, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbPlatillos item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@plat_Id", item.plat_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@plat_Nombre", item.plat_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@cate_Id", item.cate_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@plat_Imagen", item.plat_Imagen, DbType.String, ParameterDirection.Input);
            parametros.Add("@plat_UsuModificacion", item.plat_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Platillos_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }

        public RequestStatus IngredientesPorPlatillo(tbIngredientesXPlatillos item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@ingrplat_Id", item.ingrplat_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingrplat_Gramos", item.ingrplat_Gramos, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@ingrplat_UsuModificacion", item.ingrplat_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_IngredienteXPlatillos_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
