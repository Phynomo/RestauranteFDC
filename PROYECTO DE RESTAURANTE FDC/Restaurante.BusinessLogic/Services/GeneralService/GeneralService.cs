using MAVEX.BusinessLogic;
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

        #region Departamentos

        public ServiceResult ListadoDepartamentos()
        {
            var result = new ServiceResult();
            try
            {
                var list = _departamentosRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Cargos

        public ServiceResult ListadoCargos()
        {
            var result = new ServiceResult();
            try
            {
                var list = _cargosRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Categorias

        public ServiceResult ListadoCategorias()
        {
            var result = new ServiceResult();
            try
            {
                var list = _categoriaRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Estados Civiles

        public ServiceResult ListadoEstadosCiviles()
        {
            var result = new ServiceResult();
            try
            {
                var list = _estadosCivilesRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Metodos de Pago

        public ServiceResult ListadoMetodosPago()
        {
            var result = new ServiceResult();
            try
            {
                var list = _metodosPagoRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Municipios

        public ServiceResult ListadoMunicipios()
        {
            var result = new ServiceResult();
            try
            {
                var list = _municipiosRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

    }


}
