
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
		ELSE IF EXISTS (SELECT * FROM gral.tbDepartamentos WHERE (@depa_Nombre = depa_Nombre OR @depa_Codigo = depa_Codigo) AND depa_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE gral.tbDepartamentos
			SET depa_Estado = 1
			WHERE @depa_Nombre = depa_Nombre AND @depa_Codigo = depa_Codigo
			SELECT 1 as Proceso
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO



