using MAVEX.BusinessLogic;
using Restaurante.DataAccess.Repositories.REST;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic.Services.RestauranteService
{
   public  class RestauranteService
    {

        private readonly ClienteRepository _clienteRepository;
        private readonly EmpleadosRepository _empleadosRepository;
        private readonly FacturasRepository _facturasRepository;
        private readonly IngredientesRepository _ingredientesRepository;
        private readonly PlatillosRepository _platillosRepository;
        private readonly ProveedoresRepository _proveedoresRepository;
        private readonly ReservacionesRepository _reservacionesRepository;
        private readonly SucursalesRepository _sucursalesRepository;
        private readonly IngredientesXPlatillos _ingredientesXPlatillos;

        public RestauranteService(ClienteRepository clienteRepository,
                                  EmpleadosRepository empleadosRepository,
                                  FacturasRepository facturasRepository,
                                  IngredientesRepository ingredientesRepository,
                                  PlatillosRepository platillosRepository,
                                  ProveedoresRepository proveedoresRepository,
                                  ReservacionesRepository reservacionesRepository,
                                  SucursalesRepository sucursalesRepository,
                                  IngredientesXPlatillos ingredientesXPlatillos
            )
        {
            _clienteRepository = clienteRepository;
            _empleadosRepository = empleadosRepository;
            _facturasRepository= facturasRepository;
            _ingredientesRepository = ingredientesRepository;
            _platillosRepository = platillosRepository;
            _proveedoresRepository = proveedoresRepository;
            _reservacionesRepository = reservacionesRepository;
            _sucursalesRepository = sucursalesRepository;
            _ingredientesXPlatillos = ingredientesXPlatillos;
        }


        #region Clientes

        public ServiceResult ListadoClientes()
        {
            var result = new ServiceResult();
            try
            {
                var list = _clienteRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult InsertarClientes(tbClientes item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _clienteRepository.NewClient(item);
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
        
        public ServiceResult EditarClientes(tbClientes item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _clienteRepository.Update(item);
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

        public ServiceResult CargarClientes(int id)
        {
            var result = new ServiceResult();
            try
            {
                var list = _clienteRepository.MostarDatos(id);
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult EliminarClientes(int id)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _clienteRepository.Delete(id);

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

        public ServiceResult DetallesClientes(int id)
        {
            var result = new ServiceResult();
            try
            {
                var list = _clienteRepository.Detalles(id);
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Empleados

        public ServiceResult ListadoEmpleados()
        {
            var result = new ServiceResult();
            try
            {
                var list = _empleadosRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult InsertarEmpleados(tbEmpleados item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _empleadosRepository.NewEmployee(item);
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

        public ServiceResult EditarEmpleado(tbEmpleados item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _empleadosRepository.Update(item);
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
        
        public ServiceResult EliminarEmpleados(tbEmpleados item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _empleadosRepository.Delete(item);

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

        public ServiceResult CargarEmpleados(int id)
        {
            var result = new ServiceResult();
            try
            {
                var list = _empleadosRepository.MostarDatos(id);
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult DetallesEmpleados(int id)
        {
            var result = new ServiceResult();
            try
            {
                var list = _empleadosRepository.Detalles(id);
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Facturas

        public ServiceResult ListadoFacturas()
        {
            var result = new ServiceResult();
            try
            {
                var list = _facturasRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult InsertarFactura(tbFacturas item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _facturasRepository.NewBill(item);
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

        public ServiceResult EditarFactura(tbFacturas item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _facturasRepository.Update(item);
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
        
        public ServiceResult EliminarFacturas(tbFacturas item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _facturasRepository.Delete(item);

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

        #region Ingredientes

        public ServiceResult ListadoIngredientes()
        {
            var result = new ServiceResult();
            try
            {
                var list = _ingredientesRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }


        public ServiceResult InsertarIngrediente(tbIngredientes item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _ingredientesRepository.NewIngrediente(item);
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

        public ServiceResult Editaringredientes(tbIngredientes item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _ingredientesRepository.Update(item);
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


        public ServiceResult EliminarIngredientes(tbIngredientes item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _ingredientesRepository.Delete(item);

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

        #region Platillos

        public ServiceResult ListadoPlatillos()
        {
            var result = new ServiceResult();
            try
            {
                var list = _platillosRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }


        public ServiceResult InsertarPlatillos(tbPlatillos item )
        {
            ServiceResult result = new ServiceResult();
            try
            {

                var list = _platillosRepository.NewPlatillos(item);
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


        public ServiceResult EditarPlatillo(tbPlatillos item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _platillosRepository.Update(item);
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
        
        public ServiceResult EliminarPlatillos(tbPlatillos item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _platillosRepository.Delete(item);

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

        #region Proveedores

        public ServiceResult ListadoProveedores()
        {
            var result = new ServiceResult();
            try
            {
                var list = _proveedoresRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }


        public ServiceResult InsertarProveedor(tbProveedores item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _proveedoresRepository.NewSupplier(item);
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

        public ServiceResult EditarProveedores(tbProveedores item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _proveedoresRepository.Update(item);
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


        public ServiceResult EliminarProveedores(tbProveedores item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _proveedoresRepository.Delete(item);

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

        #region Reservaciones

        public ServiceResult ListadoReservaciones()
        {
            var result = new ServiceResult();
            try
            {
                var list = _reservacionesRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        #endregion

        #region Sucursales

        public ServiceResult ListadoSucursales()
        {
            var result = new ServiceResult();
            try
            {
                var list = _sucursalesRepository.List();
                return result.Ok(list);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }


        public ServiceResult InsertarSucursal(tbSucursales item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _sucursalesRepository.NewBranch(item);
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


        public ServiceResult EditarSucursal(tbSucursales item)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                var list = _sucursalesRepository.Update(item);
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


        public ServiceResult EliminarSucursales(tbSucursales item)
        {
            var result = new ServiceResult();

            try
            {
                var insert = _sucursalesRepository.Delete(item);

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

        #region IngredientesXPlatillos

        public ServiceResult IngredientesXplatillo(int id)
        {
            var result = new ServiceResult();
            try
            {
                var list = _ingredientesXPlatillos.List(id);
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
