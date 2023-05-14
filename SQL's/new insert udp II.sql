
CREATE OR ALTER PROCEDURE rest.UDP_InsertarCliente
@clie_Nombres		NVARCHAR(200),
@clie_Apellidos		NVARCHAR(200), 
@clie_Identidad		VARCHAR(13),
@clie_RTN			VARCHAR(14),
@clie_Sexo			CHAR(1), 
@clie_Telefono		NVARCHAR(20),
@clie_UsuCreacion	INT
AS
BEGIN
BEGIN TRY

		IF NOT EXISTS (SELECT * FROM rest.tbClientes WHERE @clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN )
			BEGIN
				INSERT INTO [rest].[tbClientes]
					   (clie_Nombres	
					   ,clie_Apellidos	
					   ,clie_Identidad	
					   ,clie_RTN		
					   ,clie_Sexo		
					   ,clie_Telefono	
					   ,clie_UsuCreacion
					   ,[clie_FechaCreacion]
					   ,[clie_UsuModificacion]
					   ,[clie_FechaModificacion]
					   ,[clie_Estado])
				 VALUES
						(@clie_Nombres	
						,@clie_Apellidos	
						,@clie_Identidad	
						,@clie_RTN		
						,@clie_Sexo		
						,@clie_Telefono	
						,@clie_UsuCreacion
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT * FROM rest.tbClientes WHERE (@clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN) AND clie_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbClientes
			SET clie_Estado = 1
			WHERE @clie_Identidad = clie_Identidad AND @clie_RTN = clie_RTN
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO





CREATE OR ALTER PROCEDURE rest.UDP_InsertarEmpleados 
@empe_Nombres			NVARCHAR(200), 
@empe_Apellidos			NVARCHAR(200), 
@empe_Identidad			VARCHAR(13), 
@empe_FechaNacimiento	DATE,
@empe_Sexo				CHAR(1),
@eciv_Id				INT,
@muni_Id				INT,
@empe_DireccionExacta   NVARCHAR(250), 
@empe_Telefono			NVARCHAR(20),
@empe_CorreoElectronico NVARCHAR(200),
@sucu_Id				INT, 
@carg_Id				INT,
@empe_UsuCreacion		INT
AS
BEGIN
BEGIN TRY

IF NOT EXISTS (SELECT*FROM rest.tbEmpleados WHERE @empe_Identidad = empe_Identidad)
			BEGIN
				INSERT INTO [rest].tbEmpleados
					   (empe_Nombres				
					   ,empe_Apellidos				
					   ,empe_Identidad				
					   ,empe_FechaNacimiento		
					   ,empe_Sexo					
					   ,eciv_Id				
					   ,muni_Id				
					   ,empe_DireccionExacta   
					   ,empe_Telefono			
					   ,empe_CorreoElectronico 
					   ,sucu_Id				
					   ,carg_Id				
					   ,empe_UsuCreacion		
					   ,empe_FechaCreacion
					   ,empe_UsuModificacion
					   ,empe_FechaModificacion
					   ,empe_Estado)
				 VALUES
						(@empe_Nombres			
						,@empe_Apellidos			
						,@empe_Identidad			
						,@empe_FechaNacimiento	
						,@empe_Sexo				
						,@eciv_Id				
						,@muni_Id				
						,@empe_DireccionExacta   
						,@empe_Telefono			
						,@empe_CorreoElectronico 
						,@sucu_Id				
						,@carg_Id				
						,@empe_UsuCreacion		
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT*FROM rest.tbEmpleados WHERE (@empe_Identidad = empe_Identidad) AND empe_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbEmpleados
			SET empe_Estado = 1
			WHERE @empe_Identidad = empe_Identidad
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarFactura 
@clie_Id			INT, 
@empe_Id			INT,
@metp_Id			INT, 
@fact_Cerrada       BIT,
@fact_UsuCreacion	INT
AS
BEGIN
BEGIN TRY	
				INSERT INTO [rest].tbFacturas
					   (clie_Id		
					   ,empe_Id			
					   ,metp_Id			
					   ,fact_Cerrada    
					   ,fact_UsuCreacion
					   ,fact_FechaCreacion
					   ,fact_UsuModificacion
					   ,fact_FechaModificacion
					   ,fact_Estado)
				 VALUES
						(@clie_Id		
						,@empe_Id			
						,@metp_Id			
						,@fact_Cerrada    
						,@fact_UsuCreacion
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT SCOPE_IDENTITY() as Proceso		
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO

---sergundo archivo 
CREATE OR ALTER PROCEDURE rest.UDP_InsertarProveedores 
@prov_NombreEmpresa				NVARCHAR(150),
@prov_NombreContacto			NVARCHAR(150),
@prov_Telefono					NVARCHAR(20), 
@muni_Id						INT,
@prov_DireccionExacta			NVARCHAR(500), 
@prov_UsuCreacion				INT

AS
BEGIN
BEGIN TRY

	IF(Exists (SELECT * FROM rest.tbProveedores WHERE prov_NombreEmpresa = @prov_NombreEmpresa AND prov_Estado = 1))
	BEGIN
	Select -2
	END
	ELSE IF (NOT Exists (SELECT * FROM rest.tbProveedores WHERE prov_NombreEmpresa = @prov_NombreEmpresa))
	BEGIN
				INSERT INTO [rest].tbProveedores
					   (prov_NombreEmpresa		
					   ,prov_NombreContacto	
					   ,prov_Telefono			
					   ,muni_Id				
					   ,prov_DireccionExacta	
					   ,prov_UsuCreacion		
					   ,prov_FechaCreacion
					   ,prov_UsuModificacion
					   ,prov_FechaModificacion
					   ,prov_Estado)
				 VALUES
						(@prov_NombreEmpresa		
						,@prov_NombreContacto	
						,@prov_Telefono			
						,@muni_Id				
						,@prov_DireccionExacta	
						,@prov_UsuCreacion	
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT 1 as Proceso		
	END
	ELSE
	BEGIN
		
		UPDATE [rest].tbProveedores
		SET prov_NombreContacto	=	@prov_NombreContacto	,
			prov_Telefono		=	@prov_Telefono			,
			muni_Id				=	@muni_Id				,
			prov_DireccionExacta=	@prov_DireccionExacta	,
			prov_UsuCreacion	=	@prov_UsuCreacion		,
			prov_FechaCreacion	=	GETDATE()				,
			prov_Estado			=	1
		WHERE prov_NombreEmpresa = @prov_NombreEmpresa

		SELECT 1 as Proceso	
	END								
									
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarSucursales
@sucu_Nombre			NVARCHAR(200),
@muni_Id				INT, 
@sucu_Direccion			NVARCHAR(200),
@sucu_UsuCreacion		INT
AS
BEGIN
BEGIN TRY

		IF NOT EXISTS (SELECT * FROM rest.tbSucursales WHERE @sucu_Nombre = sucu_Nombre)
			BEGIN
				INSERT INTO [rest].tbSucursales
					   (sucu_Nombre	
					   ,muni_Id		
					   ,sucu_Direccion	
					   ,sucu_UsuCreacion
					   ,sucu_FechaCreacion		
					   ,sucu_UsuModificacion	
					   ,sucu_FechaModificacion
					   ,sucu_Estado)
				 VALUES
						(@sucu_Nombre		
						,@muni_Id				
						,@sucu_Direccion			
						,@sucu_UsuCreacion	
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT * FROM rest.tbSucursales WHERE (@sucu_Nombre = sucu_Nombre  ) AND sucu_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbSucursales
			SET sucu_Estado = 1
			WHERE @sucu_Nombre = sucu_Nombre
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarIngedientes
@ingr_Nombre				NVARCHAR(200), 
@ingr_PrecioX100gr			DECIMAL(18,2), 
@prov_Id					INT,
@ingr_UsuCreacion			INT
AS
BEGIN
BEGIN TRY

	
				INSERT INTO [rest].tbIngredientes
					   (ingr_Nombre		
					   ,ingr_PrecioX100gr	
					   ,prov_Id			
					   ,ingr_UsuCreacion	
					   ,ingr_FechaCreacion		
					   ,ingr_UsuModificacion	
					   ,ingr_FechaModificacion
					   ,ingr_Estado)
				 VALUES
						(@ingr_Nombre		
						,@ingr_PrecioX100gr		
						,@prov_Id				
						,@ingr_UsuCreacion	
						,GETDATE()
						,NULL 
						,NULL 
						,1);
			SELECT SCOPE_IDENTITY() as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarPlatillos 
@plat_Nombre			NVARCHAR(200),
@plat_Precio			DECIMAL(18,2),
@cate_Id				INT,
@plat_Imagen			NVARCHAR(MAX), 
@plat_UsuCreacion		INT
AS
BEGIN
BEGIN TRY

	
				INSERT INTO [rest].tbPlatillos
					   (plat_Nombre	
					   ,plat_Precio	
					   ,cate_Id		
					   ,plat_Imagen	
					   ,plat_UsuCreacion	
					   ,plat_FechaCreacion
					   ,plat_UsuModificacion
					   ,plat_FechaModificacion
					   ,plat_Estado)
				 VALUES
						(@plat_Nombre	
						,@plat_Precio	
						,@cate_Id		
						,@plat_Imagen	
						,@plat_UsuCreacion
						,GETDATE()
						,NULL 
						,NULL 
						,1);

			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO

