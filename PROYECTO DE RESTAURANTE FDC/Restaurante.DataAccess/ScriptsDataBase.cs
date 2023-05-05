using System;
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
        public static string UDP_Cargos_Delete = "gral.UDP_tbCargos_Delete";

        #endregion

        #region Categorias

        public static string UDP_Categorias_List = "acce.UDP_tbCategorias_Select";
        public static string InsertarCategoria = "gral.UDP_tbCategorias_Insert";
        public static string UDP_Categorias_Delete = "gral.UDP_tbCategorias_Delete";

        #endregion

        #region Clientes

        public static string UDP_Clientes_List = "rest.UDP_tbClientes_Select";
        public static string InsertarClientes = "rest.UDP_InsertarCliente";
        public static string UDP_Clientes_Delete = "rest.UDP_tbClientes_Delete";

        #endregion

        #region Departamentos

        public static string UDP_Departamentos_List = "gral.UDP_tbDepartamentos_Select";
        public static string InsertarDepartamento = "gral.UDP_tbDepartamentos_Insert";
        public static string UDP_Departamentos_Delete = "gral.UDP_tbDepartamentos_Delete";

        #endregion

        #region Empleados

        public static string UDP_Empleados_List = "rest.UDP_tbEmpleados_Select";
        public static string InsertarEmpleados = "rest.UDP_InsertarEmpleados";
        public static string UDP_Empleados_Delete = "rest.UDP_tbEmpleados_Delete";

        #endregion

        #region Estados Civiles

        public static string UDP_EstadosCiviles_List = "gral.UDP_tbEstadosCiviles_Select";
        public static string InsertarEstadosCiviles = "gral.UDP_tbEstadosCiviles_Insert";
        public static string UDP_EstadosCiviles_Delete = "gral.UDP_tbEstadosCiviles_Delete";

        #endregion

        #region Facturas

        public static string UDP_Facturas_List = "rest.UDP_tbFacturas_Select";
        public static string InsertarFactura = "rest.UDP_InsertarFactura";
        public static string UDP_Facturas_Delete = "rest.UDP_tbFacturas_Delete";

        #endregion

        #region FacturaDetalle

        public static string UDP_FacturasDetalle_List = "rest.UDP_tbFacturasDetalles_Select";
        public static string UDP_FacturasDetalle_Delete = "rest.UDP_tbFacturasDetalles_Delete";

        #endregion

        #region Ingredientes

        public static string UDP_Ingredientes_List = "rest.UDP_tbIngredientes_Select";
        public static string InsertarIngredientes = "rest.UDP_InsertarIngedientes";
        public static string UDP_Ingredientes_Delete = "rest.UDP_tbIngredientes_Delete";

        #endregion

        #region Metodos De Pago

        public static string UDP_MetodosPago_List = "gral.UDP_tbMetodosPago_Select";
        public static string InsertarMetodoPago = "gral.UDP_tbMetodoPago_Insert";
        public static string UDP_MetodosPago_Delete = "gral.UDP_tbMetodoPago_Delete";

        #endregion

        #region Municipios

        public static string UDP_Municipios_List = "gral.UDP_tbMunicipios_Select";
        public static string InsertarMunicipio = "gral.UDP_tbMunicipios_Insert";
        public static string UDP_Municipios_Delete = "gral.UDP_tbMunicipios_Delete";

        #endregion

        #region Platillos

        public static string UDP_Platillos_List = "rest.UDP_tbPlatillos_Select";
        public static string InsertarPlatillos = "rest.UDP_InsertarPlatillos";
        public static string UDP_Platillos_Delete = "rest.UDP_tbPlatillos_Delete";
        #endregion
        
        #region Proveedores

        public static string UDP_Proveedores_List = "rest.UDP_tbProveedores_Select";
        public static string InsertarProveedores = "rest.UDP_InsertarProveedores";
        public static string UDP_Proveedores_Delete = "rest.UDP_tbProveedores_Delete";
        #endregion

        #region Reservaciones

        public static string UDP_Reservaciones_List = "rest.UDP_tbReservaciones_Select";

        #endregion

        #region Roles

        public static string UDP_Roles_List = "acce.UDP_tbRoles_Select";
        public static string UPD_Roles_Insert = "acce.UDP_tbRoles_Insert";
        public static string UDP_Roles_Delete = "acce.UDP_tbRoles_Delete";

        #endregion

        #region Sucursales

        public static string UDP_Sucursales_List = "rest.UDP_tbSucursales_Select";
        public static string InsertarSucursales = "rest.UDP_InsertarSucursales";
        public static string UDP_Sucursales_Delete = "rest.UDP_tbSucursales_Delete";

        #endregion
        
        #region Usuarios

        public static string UDP_Usuarios_List = "acce.UDP_tbUsuarios_Select";
        public static string UDP_Usuarios_Insert = "acce.UDP_tbusuarios_INSERT";
        public static string UDP_Usuarios_Delete = "acce.UDP_tbUsuario_Delete";
        public static string UDP_Login = "acce.UDP_Login";
        public static string UDP_Recuperar_Usuarios = "acce.UDP_RecuperarContrasenia";

        #endregion
    }
}
