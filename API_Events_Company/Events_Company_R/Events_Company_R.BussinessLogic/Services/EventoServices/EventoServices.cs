using Events_Company_R.DataAccess.Repositories.Even;
using Events_Company_R.DataAccess.Repositories.Gral;
using Events_Company_R.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events_Company_R.BussinessLogic.Services.EventoServices
{
    public class EventoServices
    {
        private readonly EventosRepository _eventoRepository;
        private readonly FacturasRepository _facturaRepository;
        private readonly InventarioRepository _inventarioRepository;
        private readonly PedidosRepository _pedidosRepository;
        private readonly PedidosDetalllesRepository _pedidosDetalllesRepository;
        private readonly ProveedoresRepository _proveedoresRepository;
        private readonly ServiciosRepository _serviciosRepository;
        private readonly PaqueteDetallesRepository _paqueteDetallesRepository;
        private readonly Paquetes_EncabezadoRepository _paquetes_EncabezadoRepository;
        private readonly ClienteRepository _clienteRepository;
        private readonly EmpleadoRepository _empleadoRepository;
        public EventoServices(EmpleadoRepository empleadoRepository, ClienteRepository clienteRepository, Paquetes_EncabezadoRepository paquetes_EncabezadoRepository, PaqueteDetallesRepository paqueteDetallesRepository, ServiciosRepository serviciosRepository, ProveedoresRepository  proveedoresRepository, PedidosDetalllesRepository pedidosDetalllesRepository, PedidosRepository pedidosRepository, InventarioRepository inventarioRepository , EventosRepository eventosRepository, FacturasRepository facturasRepository)
        {
            _eventoRepository = eventosRepository;
            _facturaRepository = facturasRepository;
            _inventarioRepository = inventarioRepository;
            _pedidosRepository = pedidosRepository;
            _pedidosDetalllesRepository = pedidosDetalllesRepository;
            _proveedoresRepository = proveedoresRepository;
            _serviciosRepository = serviciosRepository;
            _paqueteDetallesRepository = paqueteDetallesRepository;
            _paquetes_EncabezadoRepository = paquetes_EncabezadoRepository;
            _empleadoRepository = empleadoRepository;
            _clienteRepository = clienteRepository;
        }
        #region Clientes
        public IEnumerable<VW_tbClientes_ListarClientes> ListarClientes()
        {
            try
            {
                var list = _clienteRepository.ListarClientes();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbClientes_ListarClientes>();
            }
        }
        #endregion

        #region Empleados
        public IEnumerable<VW_tbEmpleados_ListarEmpleados> ListarEmpleados()
        {
            try
            {
                var list = _empleadoRepository.ListarEmpleados();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbEmpleados_ListarEmpleados>();
            }
        }
        #endregion

        #region Evento
        public IEnumerable<VW_tbEventos_ListarEventos> ListarEventos()
        {
            try
            {
                var list = _eventoRepository.ListarEventos();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbEventos_ListarEventos>();
            }
        }
        #endregion

        #region Factura

        #endregion

        #region Inventario
        public IEnumerable<VW_tbInventario_ListarInventario> ListarInventarios()
        {
            try
            {
                var list = _inventarioRepository.ListarInventarios();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbInventario_ListarInventario>();
            }
        }
        #endregion

        #region Pedidos
        public IEnumerable<VW_Pedidos_ListarPedidos> ListarPedidos()
        {
            try
            {
                var list = _pedidosRepository.ListarPedidos();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_Pedidos_ListarPedidos>();
            }
        }
        #endregion

        #region PedidosDetalles

        #endregion

        #region Proveedores
        public IEnumerable<VW_tbProveedores_ListarProveedores> ListarProveedores()
        {
            try
            {
                var list = _proveedoresRepository.ListarProveedores();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbProveedores_ListarProveedores>();
            }
        }
        #endregion

        #region Servicios
        public IEnumerable<VW_tbServicios_ListarServicios> ListarServicios()
        {
            try
            {
                var list = _serviciosRepository.ListarServicios();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbServicios_ListarServicios>();
            }
        }
        #endregion

        #region PaquetesDetalles
        public IEnumerable<VW_tbPaqueteDetalles_ListarPaqueteDetalles> ListarPaquetesDetalles()
        {
            try
            {
                var list = _paqueteDetallesRepository.ListarPaqueteDetalles();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbPaqueteDetalles_ListarPaqueteDetalles>();
            }
        }
        #endregion

        #region PaquetesEncabezado
        public IEnumerable<VW_tbPaquetes_Encabezado_ListarPaquetesEncabezado> ListarPaquetesEncabezados()
        {
            try
            {
                var list = _paquetes_EncabezadoRepository.ListarPaquetesEncabezados();
                return list;
            }
            catch (Exception ex)
            {

                return Enumerable.Empty<VW_tbPaquetes_Encabezado_ListarPaquetesEncabezado>();
            }
        }
        #endregion


    }
}
