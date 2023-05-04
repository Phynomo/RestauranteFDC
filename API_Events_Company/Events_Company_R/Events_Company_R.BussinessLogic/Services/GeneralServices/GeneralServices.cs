using Events_Company_R.DataAccess.Repositories.Gral;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.BussinessLogic.Services.GeneralServices
{
    public class GeneralServices
    {
        private readonly DepartamentosRepository _departamentosRepository;
        private readonly EstadosCivilesRepository _estadosCivilesRepository;
        private readonly MunicipiosRepository _municipiosRepository;
        private readonly TipoPagoRepository _tipoPagoRepository;
        private readonly DireccionesRepository _direccionesRepository;
        public GeneralServices(DireccionesRepository direccionesRepository, TipoPagoRepository tipoPagoRepository, MunicipiosRepository municipiosRepository, EstadosCivilesRepository estadosCivilesRepository, DepartamentosRepository departamentosRepository)
        {
            _departamentosRepository = departamentosRepository;
            _estadosCivilesRepository = estadosCivilesRepository;
            _municipiosRepository = municipiosRepository;
            _tipoPagoRepository = tipoPagoRepository;
            _direccionesRepository = direccionesRepository;
        }

        #region Departamentos
        public IEnumerable<VW_tbDepartamentos> ListarDepartamentos()
        {
            try
            {
                var list = _departamentosRepository.ListarDepartamentos();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbDepartamentos>();
            }
        }
        #endregion

        #region Estados Civiles
        public IEnumerable<VW_tbEstadosCiviles> ListarEstadosCiviles()
        {
            try
            {
                var list = _estadosCivilesRepository.ListarEstadosCiviles();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbEstadosCiviles>();
            }
        }
        #endregion

        #region Municipios
        public IEnumerable<VW_tbMunicipios> ListarMunicipios()
        {
            try
            {
                var list = _municipiosRepository.ListarMunicipios();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbMunicipios>();
            }
        }
        #endregion        

        #region TipoPago
        public IEnumerable<VW_tbTipoPago> ListarTipoDePago()
        {
            try
            {
                var list = _tipoPagoRepository.ListarTipoDePago();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbTipoPago>();
            }
        }
        #endregion

        #region Direcciones
        public IEnumerable<VW_tbDirecciones> ListarDirecciones()
        {
            try
            {
                var list = _direccionesRepository.ListarDirecciones();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbDirecciones>();
            }
        }
        #endregion
    }
}
