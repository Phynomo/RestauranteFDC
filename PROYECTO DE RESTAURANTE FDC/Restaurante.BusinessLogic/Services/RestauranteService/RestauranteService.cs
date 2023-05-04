using MAVEX.BusinessLogic;
using Restaurante.DataAccess.Repositories.REST;
using Restaurante.Entities.Entities;
using System;
using System.Collections.Generic;
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

        public RestauranteService(ClienteRepository clienteRepository,
                                  EmpleadosRepository empleadosRepository,
                                  FacturasRepository facturasRepository,
                                  IngredientesRepository ingredientesRepository,
                                  PlatillosRepository platillosRepository,
                                  ProveedoresRepository proveedoresRepository,
                                  ReservacionesRepository reservacionesRepository,
                                  SucursalesRepository sucursalesRepository
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

        #endregion
    }

}
