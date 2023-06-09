﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.DataAccess
{
    public class ScriptsDataBase
    {
        #region Cargos

        public static string UDP_Cargos_List = "gral.UDP_tbCargos_Select";
        public static string InsertarCargos = "gral.UDP_tbCargos_Insert";
        public static string UDP_Cargos_Insert = "gral.UDP_tbCargos_Insert";
        public static string UDP_Cargos_Update = "gral.UDP_tbCargos_Update";
        public static string UDP_Cargos_Delete = "gral.UDP_tbCargos_Delete";

        #endregion

        #region Categorias

        public static string UDP_Categorias_List = "gral.UDP_tbCategorias_Select";
        public static string UDP_Categorias_Update = "gral.UDP_tbCategorias_Update";
        public static string InsertarCategoria = "gral.UDP_tbCategorias_Insert";
        public static string UDP_Categorias_Delete = "gral.UDP_tbCategorias_Delete";

        #endregion

        #region Clientes

        public static string UDP_Clientes_List = "rest.UDP_tbClientes_Select";
        public static string UDP_Clientes_Update = "rest.UDP_tbClientes_Update";
        public static string InsertarClientes = "rest.UDP_InsertarCliente";
        public static string UDP_Clientes_Delete = "rest.UDP_tbClientes_Delete";

        public static string CargarClientes = "rest.UDP_CargarDatosCliente";
        public static string DetallesClientes = "rest.UDP_DetallesCliente";
        #endregion

        #region Departamentos

        public static string UDP_Departamentos_List = "gral.UDP_tbDepartamentos_Select";
        public static string UDP_Departamentos_Update = "gral.UDP_tbDepartamentos_Update";
        public static string InsertarDepartamento = "gral.UDP_tbDepartamentos_Insert";
        public static string UDP_Departamentos_Delete = "gral.UDP_tbDepartamentos_Delete";

        public static string UDP_Departamentos_CargarDepa = "rest.UDP_CargarDepartamentos";

        #endregion

        #region Empleados

        public static string UDP_Empleados_List = "rest.UDP_tbEmpleados_Select";
        public static string UDP_Empleados_Reporte = "rest.UDP_tbEmpleados_SelectReportes";
        public static string UDP_Empleados_Cantidad = "rest.UDP_TotalEmpleados_Chart";
        public static string UDP_Empleados_Update = "rest.UDP_tbEmpleados_Update";
        public static string InsertarEmpleados = "rest.UDP_InsertarEmpleados";
        public static string UDP_Empleados_Delete = "rest.UDP_tbEmpleados_Delete";

        public static string CargarDatosEmpleados = "rest.UDP_CargarDatosEmpleado";
        public static string DetallesEmpleados = "rest.UDP_DetallesEmpleados";
        #endregion

        #region Estados Civiles

        public static string UDP_EstadosCiviles_List = "gral.UDP_tbEstadosCiviles_Select";
        public static string UDP_EstadosCiviles_Update = "gral.UDP_tbEstadosCiviles_Update";
        public static string InsertarEstadosCiviles = "gral.UDP_tbEstadosCiviles_Insert";
        public static string UDP_EstadosCiviles_Delete = "gral.UDP_tbEstadosCiviles_Delete";

        #endregion

        #region Facturas

        public static string UDP_Facturas_List = "rest.UDP_tbFacturas_Select";
        public static string UDP_Facturas_Reporte = "rest.UDP_tbFacturas_SelectReporte";
        public static string UDP_Facturas_Chart = "rest.UDP_FacturasPorSucursal_Chart";
        public static string UDP_Facturas_ChartCantidad = "rest.UDP_TotalFacturas_Chart";
        public static string UDP_Facturas_ChartIngresos= "rest.UDP_IngresosTotales_Chart";
        public static string UDP_Facturas_ListDetalles = "rest.UDP_tbFacturasDetalles_Select";
        public static string UDP_Facturas_Update = "rest.UDP_tbFacturas_Update";
        public static string InsertarFactura = "rest.UDP_InsertarFactura";
        public static string InsertarFacturaDetalle = "rest.UDP_tbFacturasDetalles_Insert";
        public static string DeleteFacturaDetalle = "rest.UDP_tbFacturasDetalles_Delete";
        public static string UpdateFacturaDetalle = "rest.UDP_tbFacturaDetalles_Update";
        public static string UDP_Facturas_Delete = "rest.UDP_tbFacturas_Delete";

        #endregion

        #region FacturaDetalle

        public static string UDP_FacturasDetalle_List = "rest.UDP_tbFacturasDetalles_Select";
        public static string UDP_FacturasDetalle_Delete = "rest.UDP_tbFacturasDetalles_Delete";

        #endregion

        #region Ingredientes

        public static string UDP_Ingredientes_List = "rest.UDP_tbIngredientes_Select";
        public static string UDP_Ingredientes_ListSucu = "rest.UDP_tbIngredientes_SelectSucu";
        public static string UDP_Ingredientes_Update = "rest.UDP_tbIngredientes_Update";
        public static string InsertarIngredientes = "rest.UDP_InsertarIngedientes";
        public static string InsertarIngredientesStock = "rest.UDP_tbIngredientesXSucursales_Insert";
        public static string UDP_Ingredientes_Delete = "rest.UDP_tbIngredientes_Delete";

        #endregion

        #region Metodos De Pago

        public static string UDP_MetodosPago_List = "gral.UDP_tbMetodosPago_Select";
        public static string UDP_MetodosPago_Chart= "gral.UDP_MetodosPago_Chart";
        public static string UDP_MetodosPago_Update = "gral.UDP_tbMetodosPago_Update";
        public static string InsertarMetodoPago = "gral.UDP_tbMetodoPago_Insert";
        public static string UDP_MetodosPago_Delete = "gral.UDP_tbMetodoPago_Delete";

        #endregion

        #region Municipios

        public static string UDP_Municipios_List = "gral.UDP_tbMunicipios_Select";
        public static string UDP_Municipios_Update = "gral.UDP_tbMunicipios_Update";
        public static string InsertarMunicipio = "gral.UDP_tbMunicipios_Insert";
        public static string UDP_Municipios_Delete = "gral.UDP_tbMunicipios_Delete";

        public static string CargarMunicipios = "rest.UDP_CargarMuniPorDep";

        #endregion

        #region Pantallas
        public static string UDP_Pantallas_List = "acce.UDP_tbPantallas_Select";
        public static string UDP_Pantallas_ListporRoles = "acce.UDP_tbPantallasPorRoles";
        #endregion

        #region PantallasPorRoles
        public static string UDP_PantallasPorRoles_Insert = "acce.UDP_tbPantallasPorRoles_Insert";
        public static string UDP_PantallasPorRoles_Delete = "acce.UDP_tbPantallasPorRoles_Delete";
        #endregion
        #region Platillos

        public static string UDP_Platillos_List = "rest.UDP_tbPlatillos_Select";
        public static string UDP_Platillos_Reporte = "rest.UDP_tbPlatillos_Select_Reporte";
        public static string UDP_Platillos_Chart = "rest.UDP_Platillos_Chart";
        public static string UDP_Platillos_ChartPedidos = "rest.UDP_PlatillosPedidos_Chart";
        public static string UDP_Platillos_Update = "rest.UDP_tbPlatillos_Update";
        public static string UDP_IngredienteXPlatillos_Update = "rest.UDP_tbIngredientesXPlatillos_Update";
        public static string InsertarPlatillos = "rest.UDP_InsertarPlatillos";
        public static string UDP_Platillos_Delete = "rest.UDP_tbPlatillos_Delete";
        public static string EditarCreatePlatillo = "rest.UDP_EditarCreatePlatillo";
        public static string Precio = "rest.UDP_MostrarPrecio";
        public static string PlatillosXcate = "rest.UDP_MostrarPlatillosCate";
        public static string Datos = "rest.UDP_CargarDatosPlatillo";
        #endregion

        #region Ingredientes Por PLatillos
        public static string MostarIngredientesXplatillo = "rest.UDP_MostrarIngredientesXPlato";
        public static string AgregarIngredientePlatillo = "rest.UDP_IngredientesPlatillo";
        public static string EliminarIngredientePlatillo = "rest.UDP_EliminarIngredientesPlatillos";
      
        #endregion

        #region Proveedores

        public static string UDP_Proveedores_List = "rest.UDP_tbProveedores_Select";
        public static string UDP_Proveedores_Update = "rest.UDP_tbProveedores_Update";
        public static string InsertarProveedores = "rest.UDP_InsertarProveedores";
        public static string UDP_Proveedores_Delete = "rest.UDP_tbProveedores_Delete";
        #endregion

        #region Reservaciones

        public static string UDP_Reservaciones_List = "rest.UDP_tbReservaciones_Select";

        #endregion

        #region Roles

        public static string UDP_Roles_List = "acce.UDP_tbRoles_Select";
        public static string UDP_Roles_Insert = "acce.UDP_tbRoles_Insert";
        public static string UDP_Roles_Update = "acce.UDP_tbRoles_Update";
        public static string UDP_Roles_Delete = "acce.UDP_tbRoles_Delete";

        

        #endregion

        #region Sucursales

        public static string UDP_Sucursales_List = "rest.UDP_tbSucursales_Select";
        public static string UDP_Sucursales_Update = "rest.UDP_tbSucursales_Update";
        public static string UDP_IngredientesXxSucursales_Update = "rest.UDP_tbIngredientesXSucursal_Update";
        public static string InsertarSucursales = "rest.UDP_InsertarSucursales";
        public static string UDP_Sucursales_Delete = "rest.UDP_tbSucursales_Delete";

        #endregion
        
        #region Usuarios

        public static string UDP_Usuarios_List = "acce.UDP_tbUsuarios_Select";
        public static string UDP_Usuarios_Insert = "acce.UDP_tbusuarios_INSERT";
        public static string UDP_Usuarios_Update = "acce.UDP_tbUsuarios_Update";
        public static string UDP_Usuarios_Delete = "acce.UDP_tbUsuario_Delete";
        public static string UDP_Login = "acce.UDP_Login";
        public static string UDP_Recuperar_Usuarios = "acce.UDP_RecuperarContrasenia";

        #endregion
    }
}
