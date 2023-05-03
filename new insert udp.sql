
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

			SELECT 1 as Proceso		
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarProveedores 
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

		IF NOT EXISTS (SELECT * FROM rest.tbClientes WHERE @clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono)
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
		ELSE IF EXISTS (SELECT * FROM rest.tbClientes WHERE (@clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono) AND clie_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbClientes
			SET clie_Estado = 1
			WHERE @clie_Identidad = clie_Identidad AND @clie_RTN = clie_RTN AND @clie_Telefono = clie_Telefono
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarSucursales
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

		IF NOT EXISTS (SELECT * FROM rest.tbClientes WHERE @clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono)
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
		ELSE IF EXISTS (SELECT * FROM rest.tbClientes WHERE (@clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono) AND clie_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbClientes
			SET clie_Estado = 1
			WHERE @clie_Identidad = clie_Identidad AND @clie_RTN = clie_RTN AND @clie_Telefono = clie_Telefono
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO



CREATE OR ALTER PROCEDURE rest.UDP_InsertarIngedientes
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

		IF NOT EXISTS (SELECT * FROM rest.tbClientes WHERE @clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono)
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
		ELSE IF EXISTS (SELECT * FROM rest.tbClientes WHERE (@clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono) AND clie_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbClientes
			SET clie_Estado = 1
			WHERE @clie_Identidad = clie_Identidad AND @clie_RTN = clie_RTN AND @clie_Telefono = clie_Telefono
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_InsertarPlatillos
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

		IF NOT EXISTS (SELECT * FROM rest.tbClientes WHERE @clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono)
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
		ELSE IF EXISTS (SELECT * FROM rest.tbClientes WHERE (@clie_Identidad = clie_Identidad  OR @clie_RTN = clie_RTN OR @clie_Telefono = clie_Telefono) AND clie_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE rest.tbClientes
			SET clie_Estado = 1
			WHERE @clie_Identidad = clie_Identidad AND @clie_RTN = clie_RTN AND @clie_Telefono = clie_Telefono
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO





