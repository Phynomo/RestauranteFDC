using Dapper;
using Microsoft.Data.SqlClient;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess.Repositories.GRAL
{
    public class MunicipiosRepository : IRepository<tbMunicipios, VW_tbMunicipios>
    {
        public RequestStatus Delete(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public VW_tbMunicipios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus NewMunicipio(tbMunicipios item)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@muni_Nombre", item.muni_Nombre, DbType.String, ParameterDirection.Input);
            parameters.Add("@muni_Codigo", item.muni_Codigo, DbType.String, ParameterDirection.Input);
            parameters.Add("@depa_Id", item.depa_Id, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@muni_UsuCreacion", item.muni_UsuCreacion, DbType.Int32, ParameterDirection.Input);
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var result = db.QueryFirst<int>(ScriptsDataBase.InsertarMunicipio, parameters, commandType: CommandType.StoredProcedure);

            RequestStatus reques = new()
            {
                CodeStatus = result,
                MessageStatus = "Municipio insertado !"
            };

            return reques;
        }
        public IEnumerable<VW_tbMunicipios> List()
        {
            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();

            return db.Query<VW_tbMunicipios>(ScriptsDataBase.UDP_Municipios_List, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbMunicipios item)
        {
            RequestStatus result = new RequestStatus();

            using var db = new SqlConnection(RestauranteCon.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@muni_Id", item.muni_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@muni_Nombre", item.muni_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_Codigo", item.muni_Codigo, DbType.String, ParameterDirection.Input);
            parametros.Add("@depa_Id", item.depa_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@muni_UsuModificacion", item.muni_UsuModificacion, DbType.Int32, ParameterDirection.Input);

            var resultado = db.QueryFirst<int>(ScriptsDataBase.UDP_Municipios_Update, parametros, commandType: System.Data.CommandType.StoredProcedure);
            result.CodeStatus = resultado;

            return result;
        }
    }
}
