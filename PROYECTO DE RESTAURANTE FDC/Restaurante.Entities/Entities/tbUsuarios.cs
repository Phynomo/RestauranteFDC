﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Restaurante.Entities.Entities
{
    public partial class tbUsuarios
    {
        public tbUsuarios()
        {
            Inverseuser_UsuCreacionNavigation = new HashSet<tbUsuarios>();
            Inverseuser_UsuModificacionNavigation = new HashSet<tbUsuarios>();
            tbCargoscarg_UsuCreacionNavigation = new HashSet<tbCargos>();
            tbCargoscarg_UsuModificacionNavigation = new HashSet<tbCargos>();
            tbCategoriascate_UsuCreacionNavigation = new HashSet<tbCategorias>();
            tbCategoriascate_UsuModificacionNavigation = new HashSet<tbCategorias>();
            tbClientesclie_UsuCreacionNavigation = new HashSet<tbClientes>();
            tbClientesclie_UsuModificacionNavigation = new HashSet<tbClientes>();
            tbDepartamentosdepa_UsuCreacionNavigation = new HashSet<tbDepartamentos>();
            tbDepartamentosdepa_UsuModificacionNavigation = new HashSet<tbDepartamentos>();
            tbEmpleadosempe_UsuCreacionNavigation = new HashSet<tbEmpleados>();
            tbEmpleadosempe_UsuModificacionNavigation = new HashSet<tbEmpleados>();
            tbEstadosCivileseciv_UsuCreacionNavigation = new HashSet<tbEstadosCiviles>();
            tbEstadosCivileseciv_UsuModificacionNavigation = new HashSet<tbEstadosCiviles>();
            tbFacturasDetallesfade_UsuCreacionNavigation = new HashSet<tbFacturasDetalles>();
            tbFacturasDetallesfade_UsuModificacionNavigation = new HashSet<tbFacturasDetalles>();
            tbFacturasfact_UsuCreacionNavigation = new HashSet<tbFacturas>();
            tbFacturasfact_UsuModificacionNavigation = new HashSet<tbFacturas>();
            tbIngredientesXPlatillosingrplat_UsuCreacionNavigation = new HashSet<tbIngredientesXPlatillos>();
            tbIngredientesXPlatillosingrplat_UsuModificacionNavigation = new HashSet<tbIngredientesXPlatillos>();
            tbIngredientesXSucursalingrsucu_UsuCreacionNavigation = new HashSet<tbIngredientesXSucursal>();
            tbIngredientesXSucursalingrsucu_UsuModificacionNavigation = new HashSet<tbIngredientesXSucursal>();
            tbIngredientesingr_UsuCreacionNavigation = new HashSet<tbIngredientes>();
            tbIngredientesingr_UsuModificacionNavigation = new HashSet<tbIngredientes>();
            tbMetodosPagometp_UsuCreacionNavigation = new HashSet<tbMetodosPago>();
            tbMetodosPagometp_UsuModificacionNavigation = new HashSet<tbMetodosPago>();
            tbMunicipiosmuni_UsuCreacionNavigation = new HashSet<tbMunicipios>();
            tbMunicipiosmuni_UsuModificacionNavigation = new HashSet<tbMunicipios>();
            tbPantallasPorRolesprol_UsuCreacionNavigation = new HashSet<tbPantallasPorRoles>();
            tbPantallasPorRolesprol_UsuModificacionNavigation = new HashSet<tbPantallasPorRoles>();
            tbPlatillosHistorial2plat_UsuarioCreacionNavigation = new HashSet<tbPlatillosHistorial2>();
            tbPlatillosHistorial2plat_UsuarioModificacionNavigation = new HashSet<tbPlatillosHistorial2>();
            tbPlatillosplat_UsuCreacionNavigation = new HashSet<tbPlatillos>();
            tbPlatillosplat_UsuModificacionNavigation = new HashSet<tbPlatillos>();
            tbProveedoresprov_UsuCreacionNavigation = new HashSet<tbProveedores>();
            tbProveedoresprov_UsuModificacionNavigation = new HashSet<tbProveedores>();
            tbReservacionesrese_UsuCreacionNavigation = new HashSet<tbReservaciones>();
            tbReservacionesrese_UsuModificacionNavigation = new HashSet<tbReservaciones>();
            tbRolesrole_UsuCreacionNavigation = new HashSet<tbRoles>();
            tbRolesrole_UsuModificacionNavigation = new HashSet<tbRoles>();
            tbSucursalessucu_UsuCreacionNavigation = new HashSet<tbSucursales>();
            tbSucursalessucu_UsuModificacionNavigation = new HashSet<tbSucursales>();
        }

        public int user_Id { get; set; }
        public string user_NombreUsuario { get; set; }
        public string user_Contrasena { get; set; }
        public string user_Correo { get; set; }
        public string user_Image { get; set; }
        public bool? user_EsAdmin { get; set; }
        public int? role_Id { get; set; }
        public int? empe_Id { get; set; }
        public int? clie_Id { get; set; }
        public int user_UsuCreacion { get; set; }
        public DateTime user_FechaCreacion { get; set; }
        public int? user_UsuModificacion { get; set; }
        public DateTime? user_FechaModificacion { get; set; }
        public bool? user_Estado { get; set; }

        public virtual tbRoles role { get; set; }
        public virtual tbUsuarios user_UsuCreacionNavigation { get; set; }
        public virtual tbUsuarios user_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbUsuarios> Inverseuser_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbUsuarios> Inverseuser_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbCargos> tbCargoscarg_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbCargos> tbCargoscarg_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbCategorias> tbCategoriascate_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbCategorias> tbCategoriascate_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesclie_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesclie_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosdepa_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosdepa_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosempe_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosempe_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivileseciv_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivileseciv_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbFacturasDetalles> tbFacturasDetallesfade_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbFacturasDetalles> tbFacturasDetallesfade_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbFacturas> tbFacturasfact_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbFacturas> tbFacturasfact_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbIngredientesXPlatillos> tbIngredientesXPlatillosingrplat_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbIngredientesXPlatillos> tbIngredientesXPlatillosingrplat_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbIngredientesXSucursal> tbIngredientesXSucursalingrsucu_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbIngredientesXSucursal> tbIngredientesXSucursalingrsucu_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbIngredientes> tbIngredientesingr_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbIngredientes> tbIngredientesingr_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbMetodosPago> tbMetodosPagometp_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbMetodosPago> tbMetodosPagometp_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosmuni_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosmuni_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbPantallasPorRoles> tbPantallasPorRolesprol_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbPantallasPorRoles> tbPantallasPorRolesprol_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbPlatillosHistorial2> tbPlatillosHistorial2plat_UsuarioCreacionNavigation { get; set; }
        public virtual ICollection<tbPlatillosHistorial2> tbPlatillosHistorial2plat_UsuarioModificacionNavigation { get; set; }
        public virtual ICollection<tbPlatillos> tbPlatillosplat_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbPlatillos> tbPlatillosplat_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbProveedores> tbProveedoresprov_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbProveedores> tbProveedoresprov_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbReservaciones> tbReservacionesrese_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbReservaciones> tbReservacionesrese_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesrole_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesrole_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbSucursales> tbSucursalessucu_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbSucursales> tbSucursalessucu_UsuModificacionNavigation { get; set; }
    }
}