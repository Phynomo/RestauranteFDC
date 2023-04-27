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
        private readonly RolesRepository _rolesRepository;

        public AccesoService(   UsuariosRepository usuarioRepository,
                                RolesRepository rolesRepository 
            )
        {
            _usuariosRepository = usuarioRepository;
            _rolesRepository = rolesRepository;
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

        #region Roles

        public ServiceResult ListadoRoles()
        {
            var result = new ServiceResult();
            try
            {
                var list = _rolesRepository.List();
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
