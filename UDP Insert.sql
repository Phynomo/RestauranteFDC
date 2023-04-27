--UDP insert
--Roles
CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Insert
		@role_Nombre nvarchar(100),
        @role_UsuCreacion int
AS

BEGIN
    BEGIN TRY
        IF EXISTS (SELECT * FROM acce.tbRoles WHERE role_Nombre = @role_Nombre AND role_Estado = 1)
        BEGIN

            SELECT -2 as Proceso

        END
        ELSE IF NOT EXISTS (SELECT * FROM acce.tbRoles WHERE role_Nombre = @role_Nombre)
        BEGIN
		INSERT INTO [acce].[tbRoles]
				   ([role_Nombre]
				   ,[role_UsuCreacion]
				   ,[role_FechaCreacion]
				   ,[role_UsuModificacion]
				   ,[role_FechaModificacion]
				   ,[role_Estado])
			 VALUES
				   (@role_Nombre
				   ,@role_UsuCreacion
				   ,GETDATE()
				   ,Null
				   ,Null
				   ,1)

            SELECT SCOPE_IDENTITY() 
			END
        ELSE
        BEGIN
            UPDATE acce.tbRoles
            SET  role_Estado = 1
				,role_Nombre = @role_Nombre
				,role_UsuCreacion = @role_UsuCreacion
				,role_FechaCreacion = GETDATE()
				,role_UsuModificacion = NULL
				,role_FechaModificacion = NULL
            WHERE role_Nombre = @role_Nombre

            select role_Id From acce.tbRoles  WHERE role_Nombre = @role_Nombre
        END

    END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Roles por pantalla
CREATE OR ALTER PROCEDURE acce.UDP_tbPantallasPorRoles_Insert 
	@role_Id int,
	@pant_Id int,
	@prol_UsuCreacion int
AS
BEGIN
    BEGIN TRY
        IF EXISTS (SELECT * FROM acce.tbPantallasPorRoles WHERE role_Id = @role_Id AND pant_Id = @pant_Id AND prol_Estado = 1)
        BEGIN

            SELECT -2 as Proceso

        END
        ELSE IF NOT EXISTS (SELECT * FROM acce.tbPantallasPorRoles WHERE role_Id = @role_Id AND pant_Id = @pant_Id)
        BEGIN
		INSERT INTO [acce].[tbPantallasPorRoles]
           ([role_Id]
           ,[pant_Id]
           ,[prol_UsuCreacion]
           ,[prol_FechaCreacion]
           ,[prol_UsuModificacion]
           ,[prol_FechaModificacion]
           ,[prol_Estado])
     VALUES
           (@role_Id
           ,@pant_Id
           ,@prol_UsuCreacion
           ,GETDATE()
           ,NULL
           ,NULL
           ,1)

            SELECT 1 as Proceso
        END
        ELSE
        BEGIN
            UPDATE acce.tbPantallasPorRoles
            SET  prol_Estado = 1
				,prol_UsuCreacion = @prol_UsuCreacion
				,prol_FechaCreacion = GETDATE()
				,prol_UsuModificacion = NULL
				,prol_FechaModificacion = NULL
            WHERE role_Id = @role_Id AND pant_Id = @pant_Id

            select 1
        END

    END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Usuarios
CREATE OR ALTER PROCEDURE acce.UDP_tbusuarios_INSERT
 @user_NombreUsuario NVARCHAR(100),
 @user_Contrasena NVARCHAR(MAX),
 @user_EsAdmin BIT,
 @role_Id INT,
 @empe_Id INT,
 @clie_Id INT,
 @user_UsuCreacion INT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM acce.tbUsuarios WHERE user_NombreUsuario = @user_NombreUsuario)
			BEGIN
				SELECT -2 AS Proceso
			END

		ELSE 
			BEGIN
				INSERT INTO [acce].[tbUsuarios]
           ([user_NombreUsuario]
           ,[user_Contrasena]
           ,[user_EsAdmin]
           ,[role_Id]
           ,[empe_Id]
           ,[clie_Id]
           ,[user_UsuCreacion]
           ,[user_FechaCreacion]
           ,[user_UsuModificacion]
           ,[user_FechaModificacion]
           ,[user_Estado])
     VALUES
           (@user_NombreUsuario
           ,HASHBYTES('SHA2_512',@user_Contrasena)
           ,@user_EsAdmin
           ,@role_Id
           ,@empe_Id
           ,@clie_Id
           ,@user_UsuCreacion
           ,GETDATE()
           ,NULL
           ,NULL
           ,1)
				SELECT 1 AS Proceso

			END

	END TRY
	BEGIN CATCH
		SELECT 0 AS Processo
	END CATCH
END
GO

--Departamentos
CREATE OR ALTER PROCEDURE gral.UDP_tbDepartamentos_Insert
    @depa_Nombre nvarchar(100),
    @depa_Codigo char(2),
    @depa_UsuCreacion int

AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbDepartamentos WHERE @depa_Nombre = depa_Nombre OR @depa_Codigo = depa_Codigo)
			BEGIN
				INSERT INTO [gral].[tbDepartamentos]
					   ([depa_Nombre]
					   ,[depa_Codigo]
					   ,[depa_UsuCreacion]
					   ,[depa_FechaCreacion]
					   ,[depa_UsuModificacion]
					   ,[depa_FechaModificacion]
					   ,[depa_Estado])
				 VALUES
						(@depa_Nombre
						,@depa_Codigo 
						,@depa_UsuCreacion
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

--Municipios
CREATE OR ALTER PROCEDURE gral.UDP_tbMunicipios_Insert
    @muni_Nombre nvarchar(80),
	@muni_Codigo char(4),
	@depa_Id int,
	@muni_UsuCreacion int

AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbMunicipios WHERE @muni_Nombre = muni_Nombre OR @muni_Codigo = muni_Codigo)
			BEGIN

				INSERT INTO [gral].[tbMunicipios]
						   ([muni_Nombre]
						   ,[muni_Codigo]
						   ,[depa_Id]
						   ,[muni_UsuCreacion]
						   ,[muni_FechaCreacion]
						   ,[muni_UsuModificacion]
						   ,[muni_FechaModificacion]
						   ,[muni_Estado])
					 VALUES
						   (@muni_Nombre
						   ,@muni_Codigo
						   ,@depa_Id
						   ,@muni_UsuCreacion
						   ,NULL
						   ,NULL
						   ,NULL
						   ,1)

			SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT * FROM gral.tbMunicipios WHERE (@muni_Nombre = muni_Nombre OR @muni_Codigo = muni_Codigo) AND muni_Estado = 1 )
		
		SELECT -2 as Proceso
		
		ELSE
			UPDATE gral.tbMunicipios
			SET muni_Estado = 1
			WHERE @muni_Nombre = muni_Nombre AND @muni_Codigo = muni_Codigo
			SELECT 1 as Proceso

	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO

--Estados Civiles
