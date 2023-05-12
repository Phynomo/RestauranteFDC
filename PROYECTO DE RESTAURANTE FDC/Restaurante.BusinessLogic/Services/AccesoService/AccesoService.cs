using MAVEX.BusinessLogic;
using Restaurante.DataAccess.Repositories.ACCE;
using Restaurante.Entities.Entities;
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
        private readonly PantallasRepository _pantallasRepository;
        private readonly PantallasPorRolesRepository _pantallasPorRolesRepository;

        public AccesoService(   UsuariosRepository usuarioRepository,
                                RolesRepository rolesRepository,
                                PantallasRepository pantallasRepository,
                                PantallasPorRolesRepository pantallasPorRolesRepository
            )
        {
            _usuariosRepository = usuarioRepository;
            _rolesRepository = rolesRepository;
            _pantallasRepository = pantallasRepository;
            _pantallasPorRolesRepository = pantallasPorRolesRepository;
        }

        #region Pantallas

        public ServiceResult ListadoPantallas()
        {
            var result = new ServiceResult();
            try
            {
                var list = _pantallasRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }
        #endregion

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

        public ServiceResult InsertarUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();
            try
            {
                var list = _usuariosRepository.Insert(item);
                if (list.CodeStatus > 0)
                {
                    return result.SetMessage("Exitoso", ServiceResultType.Success);
                }
                else if (list.CodeStatus == -2)
                {
                    return result.SetMessage("YaExiste", ServiceResultType.Conflict);
                }
                else if (list.CodeStatus == 0)
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
                else
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
            }
            catch (Exception x)
            {

                return result.Error(x.Message);
            }
        }
        public ServiceResult EliminarUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _usuariosRepository.Delete(item);

                if (insert.CodeStatus == 1)
                    return result.SetMessage("Registro eliminado", ServiceResultType.Success);
                else if (insert.CodeStatus == 0)
                    return result.SetMessage("Error Inesperado", ServiceResultType.Error);
                else
                    return result.SetMessage("Conexión perdida", ServiceResultType.Error);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult RecuperarUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _usuariosRepository.Recuperar(item);

                if (insert.MessageStatus == "usuario recuperado")
                    return result.SetMessage(insert.MessageStatus, ServiceResultType.Success);
                else if (insert.MessageStatus == "usuario errado")
                    return result.Conflict(insert.MessageStatus);
                else if (insert.MessageStatus == "error en operacion")
                    return result.Error("Algun dato ha sido enviado de forma incorrecta");
                else
                    return result.SetMessage("Conexión perdida", ServiceResultType.Error);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }



        public ServiceResult Login(string usuario, string contrasena)
        {
            var result = new ServiceResult();
            try
            {
                var list = _usuariosRepository.Login(usuario, contrasena);
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

        public ServiceResult InsertarRoles(tbRoles item)
        {
            var result = new ServiceResult();
            try
            {
                var list = _rolesRepository.Insert(item);
                if (list.CodeStatus > 0)
                {
                    return result.SetMessage(list.CodeStatus.ToString(), ServiceResultType.Success);
                }
                else if (list.CodeStatus == -2)
                {
                    return result.SetMessage("YaExiste", ServiceResultType.Conflict);
                }
                else if (list.CodeStatus == 0)
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
                else
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
            }
            catch (Exception x)
            {

                return result.Error(x.Message);
            }
        }
        public ServiceResult EditarRol(tbRoles item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _rolesRepository.Update(item);
                if (list.CodeStatus > 0)
                {
                    return result.SetMessage("Exitoso", ServiceResultType.Success);
                }
                else if (list.CodeStatus == -2)
                {
                    return result.SetMessage("YaExiste", ServiceResultType.Conflict);
                }
                else if (list.CodeStatus == 0)
                {
                    return result.SetMessage("ErrorInespero", ServiceResultType.Error);
                }
                else
                {
                    return result.SetMessage("ErrorInespero", ServiceResultType.Error);
                }
            }
            catch (Exception xe)
            {

                return result.Error(xe.Message);

            }

        }
        
        public ServiceResult EliminarRoles(tbRoles item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _rolesRepository.Delete(item);

                if (insert.CodeStatus == 1)
                    return result.SetMessage("Registro eliminado", ServiceResultType.Success);
                else if (insert.CodeStatus == 0)
                    return result.SetMessage("Error Inesperado", ServiceResultType.Error);
                else
                    return result.SetMessage("Conexión perdida", ServiceResultType.Error);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }

        #endregion

        #region PantallasXRol

        public ServiceResult InsertarPantallasPorRoles(tbPantallasPorRoles item)
        {
            var result = new ServiceResult();
            try
            {
                var list = _pantallasPorRolesRepository.Insert(item);
                if (list.CodeStatus > 0)
                {
                    return result.SetMessage("Exitoso", ServiceResultType.Success);
                }
                else if (list.CodeStatus == -2)
                {
                    return result.SetMessage("YaExiste", ServiceResultType.Conflict);
                }
                else if (list.CodeStatus == 0)
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
                else
                {
                    return result.SetMessage("ErrorInesperado", ServiceResultType.Error);
                }
            }
            catch (Exception x)
            {

                return result.Error(x.Message);
            }
        }

        public ServiceResult EliminarPantallasPorRoles(tbPantallasPorRoles item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _pantallasPorRolesRepository.Delete(item);

                if (insert.CodeStatus == 1)
                    return result.SetMessage("Registro eliminado", ServiceResultType.Success);
                else if (insert.CodeStatus == 0)
                    return result.SetMessage("Error Inesperado", ServiceResultType.Error);
                else
                    return result.SetMessage("Conexión perdida", ServiceResultType.Error);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }

        #endregion

    }
}
