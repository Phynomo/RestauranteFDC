--Roles
CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Update
  @role_Id				INT,
  @role_Nombre			nvarchar(100),
  @role_UsuModificacion INT
AS
BEGIN
    BEGIN TRY
        IF EXISTS (SELECT * FROM acce.tbRoles WHERE (role_Nombre = @role_Nombre AND role_Id != @role_Id))
        BEGIN

            SELECT -2 as Proceso

        END
        ELSE
        BEGIN

			UPDATE acce.tbRoles
				SET  role_Estado = 1
					,role_Nombre = @role_Nombre
					,role_UsuModificacion = @role_UsuModificacion
					,role_FechaModificacion = GETDATE()
				WHERE role_Id = @role_Id


            SELECT 1 as Proceso
        END

    END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Cargos
CREATE OR ALTER PROCEDURE gral.UDP_tbCargos_Update
@carg_Id INT,
@carg_Descripcion NVARCHAR(100),
@carg_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbCargos WHERE (carg_Descripcion = @carg_Descripcion AND carg_Id != @carg_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbCargos]
		   SET [carg_Descripcion] = @carg_Descripcion
			  ,[carg_UsuModificacion] = @carg_UsuModificacion
			  ,[carg_FechaModificacion] = GETDATE()
		 WHERE @carg_Id = carg_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Categorias
CREATE OR ALTER PROCEDURE gral.UDP_tbCategorias_Update
@cate_Id INT,
@cate_Descripcion NVARCHAR(100),
@cate_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbCategorias WHERE (cate_Descripcion = @cate_Descripcion AND cate_Id != @cate_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbCategorias]
		   SET [cate_Descripcion] = @cate_Descripcion
			  ,[cate_UsuModificacion] = @cate_UsuModificacion
			  ,[cate_FechaModificacion] = GETDATE()
		 WHERE @cate_Id = cate_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Departametos
CREATE OR ALTER PROCEDURE gral.UDP_tbDepartamentos_Update
@depa_Id INT,
@depa_Nombre NVARCHAR(100),
@depa_Codigo CHAR(2),
@depa_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbDepartamentos WHERE (depa_Codigo = @depa_Codigo AND depa_Id != @depa_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbDepartamentos]
		   SET [depa_Nombre] = @depa_Nombre
			  ,[depa_Codigo] = @depa_Codigo
			  ,[depa_UsuModificacion] = @depa_UsuModificacion
			  ,[depa_FechaModificacion] = GETDATE()
		 WHERE @depa_Id = depa_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Municipios
CREATE OR ALTER PROCEDURE gral.UDP_tbMunicipios_Update
@muni_Id INT,
@muni_Nombre NVARCHAR(100),
@muni_Codigo CHAR(4),
@depa_Id INT,
@muni_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbMunicipios WHERE (muni_Codigo = @muni_Codigo AND muni_Id != @muni_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbMunicipios]
		   SET [muni_Nombre] = @muni_Nombre
			  ,[muni_Codigo] = @muni_Codigo
			  ,[depa_Id] = @depa_Id
			  ,[muni_UsuModificacion] = @muni_UsuModificacion
			  ,[muni_FechaModificacion] = GETDATE()
		 WHERE @muni_Id = muni_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Estados civiles
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Update
@eciv_Id INT,
@eciv_Descripcion NVARCHAR(100),
@eciv_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbEstadosCiviles WHERE (eciv_Descripcion = @eciv_Descripcion AND eciv_Id != @eciv_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbEstadosCiviles]
		   SET [eciv_Descripcion] = @eciv_Descripcion
			  ,[eciv_UsuModificacion] = @eciv_UsuModificacion
			  ,[eciv_FechaModificacion] = GETDATE()
		 WHERE @eciv_Id = eciv_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--MetodosPago
CREATE OR ALTER PROCEDURE gral.UDP_tbMetodosPago_Update
@metp_Id INT,
@metp_Descripcion NVARCHAR(100),
@metp_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM gral.tbMetodosPago WHERE (metp_Descripcion = @metp_Descripcion AND metp_Id != @metp_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [gral].[tbMetodosPago]
		   SET [metp_Descripcion] = @metp_Descripcion
			  ,[metp_UsuModificacion] = @metp_UsuModificacion
			  ,[metp_FechaModificacion] = GETDATE()
		 WHERE @metp_Id = metp_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Clientes
CREATE OR ALTER PROCEDURE rest.UDP_tbClientes_Update
@clie_Id INT,
@clie_Nombres NVARCHAR(200),
@clie_Apellidos NVARCHAR (200),
@clie_Identidad NVARCHAR(10),
@clie_RTN NVARCHAR(14),
@clie_Sexo CHAR(1),
@clie_Telefono NVARCHAR(20),
@clie_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM rest.tbClientes WHERE (clie_Identidad = @clie_Identidad AND clie_Id != @clie_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [rest].[tbClientes]
		   SET [clie_Nombres] = @clie_Nombres
			  ,[clie_Apellidos] = @clie_Apellidos
			  ,[clie_Identidad] = @clie_Identidad
			  ,[clie_RTN] = @clie_RTN
			  ,[clie_Sexo] = @clie_Sexo
			  ,[clie_Telefono] = @clie_Telefono
			  ,[clie_UsuModificacion] = @clie_UsuModificacion
			  ,[clie_FechaModificacion] = GETDATE()
		 WHERE @clie_Id = clie_Id
	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Empleados
CREATE OR ALTER PROCEDURE rest.UDP_tbEmpleados_Update
@empe_Id INT,
@empe_Nombres NVARCHAR(200),
@empe_Apellidos NVARCHAR(200),
@empe_Identidad NVARCHAR(13),
@empe_FechaNacimiento DATE,
@empe_Sexo CHAR(1),
@eciv_Id INT,
@muni_Id INT,
@empe_DireccionExacta NVARCHAR(250),
@empe_Telefono NVARCHAR(20),
@empe_CorreoElectronico NVARCHAR(200),
@sucu_Id INT,
@carg_Id INT,
@empe_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM rest.tbEmpleados WHERE (empe_Identidad = @empe_Identidad AND empe_Id != @empe_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		UPDATE [rest].[tbEmpleados]
		   SET [empe_Nombres] = @empe_Nombres
			  ,[empe_Apellidos] = @empe_Apellidos
			  ,[empe_Identidad] = @empe_Identidad
			  ,[empe_FechaNacimiento] = @empe_FechaNacimiento
			  ,[empe_Sexo] = @empe_Sexo
			  ,[eciv_Id] = @eciv_Id
			  ,[muni_Id] = @muni_Id
			  ,[empe_DireccionExacta] = @empe_DireccionExacta
			  ,[empe_Telefono] = @empe_Telefono
			  ,[empe_CorreoElectronico] = @empe_CorreoElectronico
			  ,[sucu_Id] = @sucu_Id
			  ,[carg_Id] = @carg_Id
			  ,[empe_UsuModificacion] = @empe_UsuModificacion
			  ,[empe_FechaModificacion] = GETDATE()
		 WHERE @empe_Id = empe_Id
		
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Factura
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturas_Update
@fact_Id INT,
@clie_Id INT,
@empe_Id INT,
@metp_Id INT,
@fact_Cerrada INT,
@fact_UsuModificacion INT
AS
BEGIN
	BEGIN TRY

		UPDATE [rest].[tbFacturas]
		   SET [clie_Id] = @clie_Id
			  ,[empe_Id] = @empe_Id
			  ,[metp_Id] = @metp_Id
			  ,[fact_Cerrada] = @fact_Cerrada
			  ,[fact_FechaModificacion] = GETDATE()
			  ,[fact_UsuModificacion] = @fact_UsuModificacion
		 WHERE @fact_Id = fact_Id
	
		Select 1

	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--ingredientes
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientes_Update
@ingr_Id INT,
@ingr_Nombre NVARCHAR(200),
@ingr_PrecioX100gr DECIMAL(18,2),
@prov_Id INT,
@ingr_UsuModificacion INT
AS
BEGIN
	BEGIN TRY

		UPDATE [rest].[tbIngredientes]
		   SET [ingr_Nombre] = @ingr_Nombre
			  ,[ingr_PrecioX100gr] = @ingr_PrecioX100gr
			  ,[prov_Id] = @prov_Id
			  ,[ingr_FechaModificacion] = GETDATE()
			  ,[ingr_UsuModificacion] = @ingr_UsuModificacion
		 WHERE @ingr_Id = ingr_Id

		Select 1

	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Platillos
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillos_Update
@plat_Id INT,
@plat_Nombre NVARCHAR(200),
@cate_Id INT,
@plat_Imagen NVARCHAR(MAX),
@plat_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM rest.tbPlatillos WHERE (plat_Nombre = @plat_Nombre AND plat_Id != @plat_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

		DECLARE @plat_Precio DECIMAL(18,2) = (SELECT SUM(T2.ingr_PrecioX100gr * (T1.ingrplat_Gramos/100)) FROM rest.tbIngredientesXPlatillos T1 INNER JOIN [rest].[tbIngredientes] T2 ON T1.ingr_Id = T2.ingr_Id WHERE(plat_Id = @plat_Id))

		UPDATE [rest].[tbPlatillos]
		   SET [plat_Nombre] = @plat_Nombre
			  ,[plat_Precio] = @plat_Precio
			  ,[cate_Id] = @cate_Id
			  ,[plat_Imagen] = @plat_Imagen
			  ,[plat_FechaModificacion] = GETDATE()
			  ,[plat_UsuModificacion] = @plat_UsuModificacion
		 WHERE @plat_Id = plat_Id

		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Proveedores
CREATE OR ALTER PROCEDURE rest.UDP_tbProveedores_Update
@prov_Id INT,
@prov_NombreEmpresa NVARCHAR(150),
@prov_NombreContacto NVARCHAR(150),
@prov_Telefono NVARCHAR(20),
@muni_Id INT,
@prov_DireccionExacta NVARCHAR(500),
@prov_UsuModificacion INT
AS
BEGIN
	BEGIN TRY

	UPDATE [rest].[tbProveedores]
	   SET [prov_NombreEmpresa] = @prov_NombreEmpresa
		  ,[prov_NombreContacto] = @prov_NombreContacto
		  ,[prov_Telefono] = @prov_Telefono
		  ,[muni_Id] = @muni_Id
		  ,[prov_DireccionExacta] = @prov_DireccionExacta
		  ,[prov_FechaModificacion] = GETDATE()
		  ,[prov_UsuModificacion] = @prov_UsuModificacion
	 WHERE @prov_Id = prov_Id

		Select 1

	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Sucursales
CREATE OR ALTER PROCEDURE rest.UDP_tbSucursales_Update
@sucu_Id INT,
@sucu_Nombre NVARCHAR(200),
@muni_Id INT,
@sucu_Direccion NVARCHAR(200),
@sucu_UsuModificacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM rest.tbSucursales WHERE (sucu_Nombre = @sucu_Nombre AND sucu_Id != @sucu_Id))
		BEGIN
			SELECT -2
		END
		ELSE
		BEGIN

			UPDATE [rest].[tbSucursales]
			   SET [sucu_Nombre] = @sucu_Nombre
				  ,[muni_Id] = @muni_Id
				  ,[sucu_Direccion] = @sucu_Direccion
				  ,[sucu_UsuModificacion] = @sucu_UsuModificacion
				  ,[sucu_FechaModificacion] = GETDATE()
			 WHERE @sucu_Id = sucu_Id

	
		Select 1

		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Ingrediente Por Platillo
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientesXPlatillos_Update
@ingrplat_Id INT,
@ingrplat_Gramos INT,
@ingrplat_UsuModificacion INT
AS
BEGIN
	BEGIN TRY

		UPDATE [rest].[tbIngredientesXPlatillos]
		   SET [ingrplat_Gramos] = @ingrplat_Gramos
			  ,[ingrplat_FechaModificacion] = GETDATE()
			  ,[ingrplat_UsuModificacion] = @ingrplat_UsuModificacion
		 WHERE @ingrplat_Id = ingrplat_Id 

		 DECLARE @plat_Id INT = (SELECT plat_Id FROM rest.tbIngredientesXPlatillos WHERE @ingrplat_Id = ingrplat_Id)
		 DECLARE @plat_Precio DECIMAL(18,2) = (SELECT SUM(T2.ingr_PrecioX100gr * (T1.ingrplat_Gramos/100)) FROM rest.tbIngredientesXPlatillos T1 INNER JOIN [rest].[tbIngredientes] T2 ON T1.ingr_Id = T2.ingr_Id WHERE(plat_Id = @plat_Id))
		 
		UPDATE [rest].[tbPlatillos]
		   SET [plat_Precio] = @plat_Precio
			  ,[plat_FechaModificacion] = GETDATE()
			  ,[plat_UsuModificacion] = @ingrplat_UsuModificacion
		 WHERE @plat_Id = plat_Id


		Select 1

	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--Ingrediente Por Sucursal
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientesXSucursal_Update
@ingrsucu_Id INT,
@ingrsucu_StockEnGramos DECIMAL(18,2),
@ingrsucu_UsuModificacion INT
AS
BEGIN
	BEGIN TRY

		UPDATE [rest].[tbIngredientesXSucursal]
		   SET [ingrsucu_StockEnGramos] = @ingrsucu_StockEnGramos
			  ,[ingrsucu_FechaModificacion] = GETDATE()
			  ,[ingrsucu_UsuModificacion] = @ingrsucu_UsuModificacion
		 WHERE @ingrsucu_Id = ingrsucu_Id

		Select 1

	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO