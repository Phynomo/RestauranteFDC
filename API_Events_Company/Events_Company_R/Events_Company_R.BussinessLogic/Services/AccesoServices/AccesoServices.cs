using Events_Company_R.DataAccess.Repositories.Acce;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.BussinessLogic.Services.AccesoServices
{
    public class AccesoServices
    {
        private readonly UsuariosRepository _usuariosRepository;
        private readonly RolesPorPantallaRepository _rolesPorPantallaRepository;
        private readonly RolesRepository _rolesRepository;
        private readonly PantallasRepository _pantallasRepository;

        public AccesoServices(PantallasRepository pantallasRepository, RolesRepository rolesRepository, RolesPorPantallaRepository rolesPorPantallaRepository, UsuariosRepository usuariosRepository)
        {
            _usuariosRepository = usuariosRepository;
            _rolesPorPantallaRepository = rolesPorPantallaRepository;
            _rolesRepository = rolesRepository;
            _pantallasRepository = pantallasRepository;
        }

        #region Usuarios
        public IEnumerable<VW_tbUsuario> ListarUsuarios()
        {
            try
            {
                var list = _usuariosRepository.ListarUsuarios();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbUsuario>();
            }
        }
        #endregion

        #region Roles Por Pantalla

        #endregion

        #region Roles
        public IEnumerable<VW_tbRoles_ListarRoles> ListarRoles()
        {
            try
            {
                var list = _rolesRepository.ListarRoles();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbRoles_ListarRoles>();
            }
        }
        #endregion

        #region Pantallas

        #endregion

        #region Login
        public ServiceResult ValidarLogin(tbUsuarios item)
        {
            var resultado = new ServiceResult();

            try
            {
                var usuario = _usuariosRepository.ValidarLogin(item);
                return resultado.Ok(usuario);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion
    }
}
