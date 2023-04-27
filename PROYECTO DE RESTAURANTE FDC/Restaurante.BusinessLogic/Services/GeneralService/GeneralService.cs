using Restaurante.DataAccess.Repositories.GRAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic.Services.GeneralService
{
   public class GeneralService
    {

        private readonly DepartamentosRepository _departamentosRepository;
        private readonly CargosRepository _cargosRepository;
        private readonly CategoriaRepository _categoriaRepository;
        private readonly EstadosCivilesRepository _estadosCivilesRepository;
        private readonly MetodosPagoRepository _metodosPagoRepository;
        private readonly MunicipiosRepository _municipiosRepository;

        public GeneralService(DepartamentosRepository departamentosRepository,
                              CargosRepository cargosRepository,
                              CategoriaRepository categoriaRepository,
                              EstadosCivilesRepository estadosCivilesRepository,
                              MetodosPagoRepository metodosPagoRepository,
                              MunicipiosRepository municipiosRepository
            )
        {
            _departamentosRepository = departamentosRepository;
            _cargosRepository = cargosRepository;
            _categoriaRepository = categoriaRepository;
            _estadosCivilesRepository = estadosCivilesRepository;
            _metodosPagoRepository = metodosPagoRepository;
            _municipiosRepository = municipiosRepository;
        }




    }

    #region Departamentos

    //public IEnumerable<VW_tbUsuarios> ListadoUsuarios()
    //{
    //    try
    //    {
    //        return _usuariosRepository.List();
    //    }
    //    catch (Exception e)
    //    {

    //        return Enumerable.Empty<VW_tbUsuarios>();
    //    }
    //}

    #endregion
}
