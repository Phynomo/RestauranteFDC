--Views  

--Usuarios
CREATE OR ALTER VIEW acce.VW_tbUsuarios
AS
SELECT T1.[user_Id]
      ,T1.[user_NombreUsuario]
      ,T1.[user_Contrasena]
	  ,T1.[user_Image]
      ,T1.[user_EsAdmin]
      ,T1.[role_Id]
	  ,T2.role_Nombre
      ,T1.[empe_Id]
	  ,T3.empe_Nombres
	  ,T3.empe_Apellidos
	  ,T3.empe_Nombres + ' ' + T3.empe_Apellidos AS empe_NombreCompleto
	  ,t3.carg_Id
	  ,T4.carg_Descripcion
      ,T1.clie_Id
	  ,T5.clie_Nombres 
	  ,T5.clie_Apellidos
	  ,T5.clie_Nombres +' '+T5.clie_Apellidos AS clie_NombreCompleto
	  ,T1.[user_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,T1.[user_FechaCreacion]
      ,T1.[user_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,T1.[user_FechaModificacion]
      ,T1.[user_Estado]
  FROM [acce].[tbUsuarios] T1 INNER JOIN [acce].[tbRoles] T2
  ON T1.role_Id = T2.role_Id LEFT JOIN [rest].[tbEmpleados] T3
  ON T3.empe_Id = T1.empe_Id INNER JOIN [gral].[tbCargos] T4
  ON t4.carg_Id = T3.carg_Id  INNER JOIN acce.tbUsuarios TC
  ON T1.user_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.user_UsuModificacion = TM.[user_Id] LEFT JOIN [rest].[tbClientes] T5
  ON T5.clie_Id = T1.clie_Id

GO

--Roles
CREATE OR ALTER VIEW acce.VW_tbRoles
AS
SELECT T1.[role_Id]
      ,[role_Nombre]
      ,[role_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[role_FechaCreacion]
      ,[role_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[role_FechaModificacion]
      ,[role_Estado]
  FROM [acce].[tbRoles] T1  INNER JOIN acce.tbUsuarios TC
  ON T1.role_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.role_UsuModificacion = TM.[user_Id]
GO

--Departamentos 
CREATE OR ALTER VIEW gral.VW_tbDepartamentos 
AS
SELECT [depa_Id]
      ,[depa_Nombre]
      ,[depa_Codigo]
      ,[depa_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[depa_FechaCreacion]
      ,[depa_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[depa_FechaModificacion]
      ,[depa_Estado]
  FROM [gral].[tbDepartamentos] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.depa_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.depa_UsuModificacion = TM.[user_Id]

GO
--Municipios
CREATE OR ALTER VIEW gral.VW_tbMunicipios
AS
SELECT [muni_Id]
      ,[muni_Nombre]
      ,[muni_Codigo]
      ,T1.[depa_Id]
      ,T2.depa_Nombre
	  ,T2.depa_Codigo
	  ,[muni_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[muni_FechaCreacion]
      ,[muni_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[muni_FechaModificacion]
      ,[muni_Estado]
  FROM [gral].[tbMunicipios] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.muni_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.muni_UsuModificacion = TM.[user_Id] INNER JOIN gral.tbDepartamentos T2
  ON T2.depa_Id = T1.depa_Id

GO

--Estados Civiles
CREATE OR ALTER VIEW gral.VW_tbEstadosCiviles
AS
SELECT [eciv_Id]
      ,[eciv_Descripcion]
      ,[eciv_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[eciv_FechaCreacion]
      ,[eciv_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[eciv_FechaModificacion]
      ,[eciv_Estado]
  FROM [gral].[tbEstadosCiviles] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.eciv_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.eciv_UsuModificacion = TM.[user_Id] 

GO

--Metodos Pago
CREATE OR ALTER VIEW gral.VW_tbMetodosPago
AS
SELECT [metp_Id]
      ,[metp_Descripcion]
      ,[metp_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[metp_FechaCreacion]
      ,[metp_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[metp_FechaModificacion]
      ,[metp_Estado]
  FROM [gral].[tbMetodosPago] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.metp_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.metp_UsuModificacion = TM.[user_Id]

GO

--Cargos
CREATE OR ALTER VIEW gral.VW_tbCargos
AS
SELECT [carg_Id]
      ,[carg_Descripcion]
      ,[carg_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[carg_FechaCreacion]
      ,[carg_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[carg_FechaModificacion]
      ,[carg_Estado]
  FROM [gral].[tbCargos] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.carg_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.carg_UsuModificacion = TM.[user_Id]

GO

--Categorias
CREATE OR ALTER VIEW gral.VW_tbCategorias
AS
SELECT [cate_Id]
      ,[cate_Descripcion]
      ,[cate_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[cate_FechaCreacion]
      ,[cate_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[cate_FechaModificacion]
      ,[cate_Estado]
  FROM [gral].[tbCategorias] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.cate_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.cate_UsuModificacion = TM.[user_Id]

GO

--Sucursales
CREATE OR ALTER VIEW rest.VW_tbSucursales
AS
SELECT [sucu_Id]
      ,[sucu_Nombre]
      ,T1.[muni_Id]
	  ,T2.muni_Nombre
	  ,T2.muni_Codigo
	  ,T2.depa_Id
	  ,T3.depa_Nombre
	  ,T3.depa_Codigo
      ,[sucu_Direccion]
      ,[sucu_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[sucu_FechaCreacion]
      ,[sucu_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[sucu_FechaModificacion]
      ,[sucu_Estado]
  FROM [rest].[tbSucursales] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.sucu_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.sucu_UsuModificacion = TM.[user_Id] INNER JOIN [gral].[tbMunicipios] T2
  ON T2.muni_Id = T1.muni_Id INNER JOIN [gral].[tbDepartamentos] T3
  ON T3.depa_Id = T2.depa_Id

GO

--Empleados
CREATE OR ALTER VIEW rest.VW_tbEmpleados
AS
SELECT T1.[empe_Id]
      ,[empe_Nombres]
      ,[empe_Apellidos]
      ,[empe_Nombres] +' '+[empe_Apellidos] empe_NombreCompleto
      ,[empe_Identidad]
      ,[empe_FechaNacimiento]
      ,[empe_Sexo] AS InicialSexo
	  ,CASE WHEN [empe_Sexo] = 'F' THEN 'Femenino'
				ELSE 'Masculino'
			END AS empe_Sexo
      ,T1.[eciv_Id]
	  ,T2.eciv_Descripcion
      ,T1.[muni_Id]
	  ,T3.muni_Nombre
	  ,T3.muni_Codigo
	  ,T3.depa_Id
	  ,T4.depa_Nombre
	  ,T4.depa_Codigo
      ,[empe_DireccionExacta]
      ,[empe_Telefono]
      ,[empe_CorreoElectronico]
      ,T1.[sucu_Id]
	  ,T5.sucu_Nombre
      ,T1.[carg_Id]
	  ,T6.carg_Descripcion
      ,[empe_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[empe_FechaCreacion]
      ,[empe_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[empe_FechaModificacion]
      ,[empe_Estado]
  FROM [rest].[tbEmpleados]  T1 INNER JOIN acce.tbUsuarios TC
  ON T1.empe_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.empe_UsuModificacion = TM.[user_Id] INNER JOIN [gral].[tbEstadosCiviles] T2
  ON T2.eciv_Id = T1.eciv_Id INNER JOIN [gral].[tbMunicipios] T3
  ON T3.muni_Id = T1.muni_Id INNER JOIN [gral].[tbDepartamentos] T4
  ON T3.depa_Id = T3.depa_Id INNER JOIN [rest].[tbSucursales] T5
  ON T5.sucu_Id = T1.sucu_Id INNER JOIN [gral].[tbCargos] T6
  ON T6.carg_Id = T1.carg_Id

GO

--Clientes
CREATE OR ALTER VIEW rest.VW_tbClientes
AS
SELECT T1.[clie_Id]
      ,[clie_Nombres]
      ,[clie_Apellidos]
      ,[clie_Nombres]+' '+[clie_Apellidos] AS clie_NombreCompleto
      ,[clie_Identidad]
      ,[clie_RTN]
      ,[clie_Sexo] AS InicialSexo
	  ,CASE WHEN [clie_Sexo] = 'F' THEN 'Femenino'
				ELSE 'Masculino'
			END AS clie_Sexo
      ,[clie_Telefono]
      ,[clie_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[clie_FechaCreacion]
      ,[clie_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[clie_FechaModificacion]
      ,[clie_Estado]
  FROM [rest].[tbClientes] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.clie_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.clie_UsuModificacion = TM.[user_Id]

GO

--Proveedores
CREATE OR ALTER VIEW rest.VW_tbProveedores
AS
SELECT [prov_Id]
      ,T1.[prov_NombreEmpresa]
      ,[prov_NombreContacto]
      ,[prov_Telefono]
      ,T1.[muni_Id]
	  ,T2.muni_Nombre
	  ,T2.muni_Codigo
	  ,T2.depa_Id
	  ,T3.depa_Nombre
	  ,T3.depa_Codigo
      ,[prov_DireccionExacta]
      ,[prov_FechaCreacion]
      ,[prov_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[prov_FechaModificacion]
      ,[prov_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[prov_Estado]
  FROM [rest].[tbProveedores]  T1 INNER JOIN acce.tbUsuarios TC
  ON T1.prov_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.prov_UsuModificacion = TM.[user_Id] INNER JOIN [gral].[tbMunicipios] T2
  ON T2.muni_Id = T1.muni_Id INNER JOIN [gral].[tbDepartamentos] T3
  ON T3.depa_Id = T2.depa_Id

GO

--Ingredientes
CREATE OR ALTER VIEW rest.VW_tbIngredientes
AS
SELECT [ingr_Id]
      ,[ingr_Nombre]
      ,[ingr_PrecioX100gr]
      ,T1.[prov_Id]
	  ,T2.prov_NombreEmpresa
      ,[ingr_FechaCreacion]
      ,[ingr_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[ingr_FechaModificacion]
      ,[ingr_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[ingr_Estado]
  FROM [rest].[tbIngredientes] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.ingr_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.ingr_UsuModificacion = TM.[user_Id] INNER JOIN [rest].[tbProveedores] T2
  ON T1.prov_Id = T2.prov_Id

GO

--Platillos
CREATE OR ALTER VIEW rest.VW_tbPlatillos
AS
SELECT [plat_Id]
      ,[plat_Nombre]
      ,[plat_Precio]
	  ,[plat_Imagen]
      ,T1.[cate_Id]
	  ,T2.cate_Descripcion
      ,[plat_FechaCreacion]
      ,[plat_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[plat_FechaModificacion]
      ,[plat_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[plat_Estado]
  FROM [rest].[tbPlatillos] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.plat_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.plat_UsuModificacion = TM.[user_Id] INNER JOIN [gral].[tbCategorias] T2
  ON T2.cate_Id = T1.cate_Id

GO

--Reservacions
CREATE OR ALTER VIEW rest.VW_tbReservaciones
AS
SELECT [rese_Id]
      ,T1.[clie_Id]
	  ,T2.clie_Nombres
	  ,T2.clie_Apellidos
	  ,T2.clie_Nombres + ' ' + T2.clie_Apellidos AS clie_NombreCompleto
      ,T2.clie_RTN
	  ,T2.clie_Sexo
	  ,T1.[sucu_Id]
	  ,T3.sucu_Nombre
      ,[rese_Personas]
      ,[rese_FechaHora]
      ,[rese_FechaCreacion]
      ,[rese_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[rese_FechaModificacion]
      ,[rese_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[rese_Estado]
  FROM [rest].[tbReservaciones]  T1 INNER JOIN acce.tbUsuarios TC
  ON T1.rese_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.rese_UsuModificacion = TM.[user_Id] INNER JOIN [rest].[tbClientes] T2
  ON T2.clie_Id = T1.clie_Id INNER JOIN [rest].[tbSucursales] T3
  ON T3.sucu_Id = T1.sucu_Id

GO
--Factura
CREATE OR ALTER VIEW rest.VW_tbFacturas
AS
SELECT [fact_Id]
      ,T1.[clie_Id]
      ,T4.clie_Nombres
	  ,T4.clie_Apellidos
	  ,T4.clie_Nombres+' '+T4.clie_Apellidos AS clie_NombreCompleto
	  ,T4.clie_RTN
	  ,T4.clie_Telefono
	  ,T4.clie_Identidad
	  ,T4.clie_Sexo
	  ,T1.[empe_Id]
	  ,T3.empe_Nombres
	  ,T3.empe_Apellidos
	  ,T3.empe_Nombres +' '+ T3.empe_Apellidos AS empe_NombreCompleto
	  ,T3.sucu_Id
      ,T1.[metp_Id]
	  ,T2.metp_Descripcion
	  ,T1.fact_Cerrada
      ,[fact_Fecha]
      ,[fact_FechaCreacion]
      ,[fact_UsuCreacion]
      ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[fact_FechaModificacion]
      ,[fact_UsuModificacion]
      ,TM.user_NombreUsuario AS user_NombreUsuModificacion
     ,[fact_Estado]
  FROM [rest].[tbFacturas] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.fact_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.fact_UsuModificacion = TM.[user_Id] INNER JOIN [gral].[tbMetodosPago] T2
  ON T1.metp_Id =  T2.metp_Id INNER JOIN [rest].[tbEmpleados] T3
  ON T3.empe_Id = T1.empe_Id INNER JOIN [rest].[tbClientes] T4
  ON T4.clie_Id = T1.clie_Id 

GO

--FacturaDetalles
CREATE OR ALTER VIEW rest.VW_tbFacturaDetalles
AS
SELECT [fade_Id]
      ,T1.[fact_Id]
	  ,T2.clie_Nombres
	  ,T2.clie_Apellidos
	  ,T2.clie_NombreCompleto
	  ,T2.clie_RTN
	  ,T2.clie_Sexo
	  ,T2.clie_Id
	  ,T2.clie_Identidad
	  ,T2.clie_Telefono
	  ,T2.empe_Nombres
	  ,T2.empe_Apellidos
	  ,T2.empe_NombreCompleto
	  ,T2.fact_Cerrada
      ,T3.[plat_Id]
      ,T3.plat_Nombre
	  ,T3.plat_Precio
	  ,T3.[plat_Imagen]
	  ,T3.cate_Id
	  ,T4.cate_Descripcion
	  ,[fade_Cantidad]
      ,[fade_Precio]
      ,[fade_FechaCreacion]
      ,[fade_UsuCreacion]
      ,TC.user_NombreUsuario AS user_NombreUsuCreacion
      ,[fade_FechaModificacion]
      ,[fade_UsuModificacion]
      ,TM.user_NombreUsuario AS user_NombreUsuModificacion
      ,[fade_Estado]
  FROM [rest].[tbFacturasDetalles] T1 INNER JOIN acce.tbUsuarios TC
  ON T1.fade_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.fade_UsuModificacion = TM.[user_Id] INNER JOIN [rest].[VW_tbFacturas] T2
  ON T2.fact_Id = T1.fact_Id INNER JOIN [rest].[tbPlatillos] T3
  ON T3.plat_Id = T1.plat_Id INNER JOIN [gral].[tbCategorias] T4
  ON T4.cate_Id = T3.cate_Id

GO

--que es un hook y sem y seo

















