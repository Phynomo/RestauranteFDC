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
        public static string UDP_Cargos_Update = "gral.UDP_tbCargos_Update";

        #endregion

        #region Categorias

        public static string UDP_Categorias_List = "acce.UDP_tbCategorias_Select";
        public static string UDP_Categorias_Update = "acce.UDP_tbCategorias_Update";
        public static string InsertarCategoria = "gral.UDP_tbCategorias_Insert";

        #endregion

        #region Clientes

        public static string UDP_Clientes_List = "rest.UDP_tbClientes_Select";
        public static string UDP_Clientes_Update = "rest.UDP_tbClientes_Update";
        public static string InsertarClientes = "rest.UDP_InsertarCliente";

        #endregion

        #region Departamentos

        public static string UDP_Departamentos_List = "gral.UDP_tbDepartamentos_Select";
        public static string UDP_Departamentos_Update = "gral.UDP_tbDepartamentos_Update";
        public static string InsertarDepartamento = "gral.UDP_tbDepartamentos_Insert";

        #endregion

        #region Empleados

        public static string UDP_Empleados_List = "rest.UDP_tbEmpleados_Select";
        public static string UDP_Empleados_Update = "rest.UDP_tbEmpleados_Update";
        public static string InsertarEmpleados = "rest.UDP_InsertarEmpleados";
        #endregion

        #region Estados Civiles

        public static string UDP_EstadosCiviles_List = "gral.UDP_tbEstadosCiviles_Select";
        public static string UDP_EstadosCiviles_Update = "gral.UDP_tbEstadosCiviles_Update";
        public static string InsertarEstadosCiviles = "gral.UDP_tbEstadosCiviles_Insert";

        #endregion

        #region Facturas

        public static string UDP_Facturas_List = "rest.UDP_tbFacturas_Select";
        public static string UDP_Facturas_Update = "rest.UDP_tbFacturas_Update";
        public static string InsertarFactura = "rest.UDP_InsertarFactura";

        #endregion

        #region FacturaDetalle

        public static string UDP_FacturasDetalle_List = "rest.UDP_tbFacturasDetalles_Select";

        #endregion

        #region Ingredientes

        public static string UDP_Ingredientes_List = "rest.UDP_tbIngredientes_Select";
        public static string UDP_Ingredientes_Update = "rest.UDP_tbIngredientes_Update";
        public static string InsertarIngredientes = "rest.UDP_InsertarIngedientes";

        #endregion

        #region Metodos De Pago

        public static string UDP_MetodosPago_List = "gral.UDP_tbMetodosPago_Select";
        public static string UDP_MetodosPago_Update = "gral.UDP_tbMetodosPago_Update";
        public static string InsertarMetodoPago = "gral.UDP_tbMetodoPago_Insert";

        #endregion

        #region Municipios

        public static string UDP_Municipios_List = "gral.UDP_tbMunicipios_Select";
        public static string UDP_Municipios_Update = "gral.UDP_tbMunicipios_Update";
        public static string InsertarMunicipio = "gral.UDP_tbMunicipios_Insert";

        #endregion

        #region Platillos

        public static string UDP_Platillos_List = "rest.UDP_tbPlatillos_Select";
        public static string UDP_Platillos_Update = "rest.UDP_tbPlatillos_Update";
        public static string UDP_IngredienteXPlatillos_Update = "rest.UDP_tbIngredientesXPlatillos_Update";
        public static string InsertarPlatillos = "rest.UDP_InsertarPlatillos";
        #endregion
        
        #region Proveedores

        public static string UDP_Proveedores_List = "rest.UDP_tbProveedores_Select";
        public static string UDP_Proveedores_Update = "rest.UDP_tbProveedores_Update";
        public static string InsertarProveedores = "rest.UDP_InsertarProveedores";
        #endregion

        #region Reservaciones

        public static string UDP_Reservaciones_List = "rest.UDP_tbReservaciones_Select";

        #endregion

        #region Roles

        public static string UDP_Roles_List = "acce.UDP_tbRoles_Select";
        public static string UDP_Roles_Update = "acce.UDP_tbRoles_Update";

        #endregion

        #region Sucursales

        public static string UDP_Sucursales_List = "rest.UDP_tbSucursales_Select";
        public static string UDP_Sucursales_Update = "rest.UDP_tbSucursales_Update";
        public static string UDP_IngredientesXxSucursales_Update = "rest.UDP_tbIngredientesXSucursal_Update";
        public static string InsertarSucursales = "rest.UDP_InsertarSucursales";

        #endregion
        
        #region Usuarios

        public static string UDP_Usuarios_List = "acce.UDP_tbUsuarios_Select";
        public static string UDP_Login = "acce.UDP_Login";
        public static string UDP_Recuperar_Usuarios = "acce.UDP_RecuperarContrasenia";

        #endregion
    }
}
