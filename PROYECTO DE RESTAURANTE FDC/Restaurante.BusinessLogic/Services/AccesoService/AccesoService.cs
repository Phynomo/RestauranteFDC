using MAVEX.BusinessLogic;
using Restaurante.DataAccess.Repositories.ACCE;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic.Services.AccesoService
{
    public class AccesoService
    {
        private readonly UsuariosRepository _usuariosRepository;

        public AccesoService(UsuariosRepository usuarioRepository)
        {
            _usuariosRepository = usuarioRepository;
        }

        #region Usuarios

        public ServiceResult ListadoUsuarios()
        {
            var result = new ServiceResult();
            try
            {
                var list = _usuariosRepository.List();
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
