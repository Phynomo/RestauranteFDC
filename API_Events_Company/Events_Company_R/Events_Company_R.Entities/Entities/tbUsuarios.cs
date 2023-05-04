﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Events_Company_R.Entities.Entities
{
    public partial class tbUsuarios
    {
        public tbUsuarios()
        {
            Pedidos_Detallespede_UsuarioCreadorNavigation = new HashSet<Pedidos_Detalles>();
            Pedidos_Detallespede_UsuarioModificadorNavigation = new HashSet<Pedidos_Detalles>();
            Pedidospedi_UsuarioCreadorNavigation = new HashSet<Pedidos>();
            Pedidospedi_UsuarioModificadorNavigation = new HashSet<Pedidos>();
            tbClientesclie_UsuarioCreadorNavigation = new HashSet<tbClientes>();
            tbClientesclie_UsuarioModificadorNavigation = new HashSet<tbClientes>();
            tbDepartamentosdept_UsuarioCreadorNavigation = new HashSet<tbDepartamentos>();
            tbDepartamentosdept_UsuarioModificadorNavigation = new HashSet<tbDepartamentos>();
            tbDireccionesdire_UsuarioCreadorNavigation = new HashSet<tbDirecciones>();
            tbDireccionesdire_UsuarioModificadorNavigation = new HashSet<tbDirecciones>();
            tbEmpleadosempl_UsuarioCreadorNavigation = new HashSet<tbEmpleados>();
            tbEmpleadosempl_UsuarioModificadorNavigation = new HashSet<tbEmpleados>();
            tbEstadosCivilesesci_UsuarioCreadorNavigation = new HashSet<tbEstadosCiviles>();
            tbEstadosCivilesesci_UsuarioModificadorNavigation = new HashSet<tbEstadosCiviles>();
            tbEventosevnt_UsuarioCreadorNavigation = new HashSet<tbEventos>();
            tbEventosevnt_UsuarioModificadorNavigation = new HashSet<tbEventos>();
            tbFacturasfact_UsuarioCreadorNavigation = new HashSet<tbFacturas>();
            tbFacturasfact_UsuarioModificadorNavigation = new HashSet<tbFacturas>();
            tbInventarioinve_UsuarioCreadorNavigation = new HashSet<tbInventario>();
            tbInventarioinve_UsuarioModificadorNavigation = new HashSet<tbInventario>();
            tbMunicipiosmuni_UsuarioCreadorNavigation = new HashSet<tbMunicipios>();
            tbMunicipiosmuni_UsuarioModificadorNavigation = new HashSet<tbMunicipios>();
            tbPantallasRolesuser_UsuCreacionNavigation = new HashSet<tbPantallasRoles>();
            tbPantallasRolesuser_UsuModificacionNavigation = new HashSet<tbPantallasRoles>();
            tbPantallasuser_UsuCreacionNavigation = new HashSet<tbPantallas>();
            tbPantallasuser_UsuModificacionNavigation = new HashSet<tbPantallas>();
            tbPaquete_Detallespqsv_UsuarioCreadorNavigation = new HashSet<tbPaquete_Detalles>();
            tbPaquete_Detallespqsv_UsuarioModificadorNavigation = new HashSet<tbPaquete_Detalles>();
            tbPaquetes_Encabezadopaqt_UsuarioCreadorNavigation = new HashSet<tbPaquetes_Encabezado>();
            tbPaquetes_Encabezadopaqt_UsuarioModificadorNavigation = new HashSet<tbPaquetes_Encabezado>();
            tbProveedoresprov_UsuarioCreadorNavigation = new HashSet<tbProveedores>();
            tbProveedoresprov_UsuarioModificadorNavigation = new HashSet<tbProveedores>();
            tbRolesrole_UsuarioCreadorNavigation = new HashSet<tbRoles>();
            tbRolesrole_UsuarioModificadorNavigation = new HashSet<tbRoles>();
            tbServiciosserv_UsuarioCreadorNavigation = new HashSet<tbServicios>();
            tbServiciosserv_UsuarioModificadorNavigation = new HashSet<tbServicios>();
            tbTipoPagopago_UsuarioCreadorNavigation = new HashSet<tbTipoPago>();
            tbTipoPagopago_UsuarioModificadorNavigation = new HashSet<tbTipoPago>();
        }

        [NotMapped] 
        public string empleado { get; set; }
        public int usua_Id { get; set; }
        public string usua_Usuario { get; set; }
        public string usua_Clave { get; set; }
        public int? empl_Id { get; set; }
        public int? role_Id { get; set; }
        public int? usua_UsuarioCreador { get; set; }
        public DateTime? usua_FechaCreacion { get; set; }
        public int? usua_UsuarioModificador { get; set; }
        public DateTime? usua_FechaModificacion { get; set; }
        public bool? usua_Estado { get; set; }

        public virtual tbEmpleados empl { get; set; }
        public virtual tbRoles role { get; set; }
        public virtual ICollection<Pedidos_Detalles> Pedidos_Detallespede_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<Pedidos_Detalles> Pedidos_Detallespede_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<Pedidos> Pedidospedi_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<Pedidos> Pedidospedi_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesclie_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbClientes> tbClientesclie_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosdept_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbDepartamentos> tbDepartamentosdept_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbDirecciones> tbDireccionesdire_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbDirecciones> tbDireccionesdire_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosempl_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbEmpleados> tbEmpleadosempl_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivilesesci_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbEstadosCiviles> tbEstadosCivilesesci_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbEventos> tbEventosevnt_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbEventos> tbEventosevnt_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbFacturas> tbFacturasfact_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbFacturas> tbFacturasfact_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbInventario> tbInventarioinve_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbInventario> tbInventarioinve_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosmuni_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbMunicipios> tbMunicipiosmuni_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbPantallasRoles> tbPantallasRolesuser_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbPantallasRoles> tbPantallasRolesuser_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbPantallas> tbPantallasuser_UsuCreacionNavigation { get; set; }
        public virtual ICollection<tbPantallas> tbPantallasuser_UsuModificacionNavigation { get; set; }
        public virtual ICollection<tbPaquete_Detalles> tbPaquete_Detallespqsv_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbPaquete_Detalles> tbPaquete_Detallespqsv_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbPaquetes_Encabezado> tbPaquetes_Encabezadopaqt_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbPaquetes_Encabezado> tbPaquetes_Encabezadopaqt_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbProveedores> tbProveedoresprov_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbProveedores> tbProveedoresprov_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesrole_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbRoles> tbRolesrole_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbServicios> tbServiciosserv_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbServicios> tbServiciosserv_UsuarioModificadorNavigation { get; set; }
        public virtual ICollection<tbTipoPago> tbTipoPagopago_UsuarioCreadorNavigation { get; set; }
        public virtual ICollection<tbTipoPago> tbTipoPagopago_UsuarioModificadorNavigation { get; set; }
    }
}