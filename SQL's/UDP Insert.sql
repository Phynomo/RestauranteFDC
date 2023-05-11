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
 @user_Correo     NVARCHAR(200),
 @user_Image NVARCHAR(MAX),
 @user_EsAdmin INT,
 @role_Id INT,
 @empe_Id INT,
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
		   ,[user_Correo]
           ,[user_EsAdmin]
		   ,[user_Image]
           ,[role_Id]
           ,[empe_Id]
           ,[user_UsuCreacion]
           ,[user_FechaCreacion]
           ,[user_UsuModificacion]
           ,[user_FechaModificacion]
           ,[user_Estado])
     VALUES
           (@user_NombreUsuario
           ,HASHBYTES('SHA2_512',@user_Contrasena)
		   ,@user_Correo
           ,@user_EsAdmin
		   ,@user_Image
           ,@role_Id
           ,@empe_Id
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

--Procedimientos Almacenados del Login

GO
CREATE OR ALTER PROCEDURE acce.UDP_Login
	@user_NombreUsuario Nvarchar(100),
	@user_Contrasena Nvarchar(Max)
AS
BEGIN

        BEGIN TRY
        Declare @Password Nvarchar(max) = (HASHBYTES('SHA2_512',@user_Contrasena))
        SELECT *
		FROM acce.VW_tbUsuarios
		WHERE   user_Contrasena = @Password 
        AND     user_NombreUsuario = @user_NombreUsuario

        END TRY
        BEGIN CATCH

        SELECT 0 as Proceso
        END CATCH

END
GO
--acce.UDP_Login 'admin', '123' 

--CREATE OR ALTER PROCEDURE acce.UDP_Login
--	@user_NombreUsuario		NVARCHAR(100),
--	@user_Contrasena		NVARCHAR(200)
--AS
--BEGIN
--	Declare @Password Nvarchar(max) = (HASHBYTES('SHA2_512',@user_Contrasena));
--	SELECT  t1.[user_Id], t1.user_NombreUsuario,t2.empe_Nombres,t1.role_Id,t2.empe_Id
--	FROM	acce.tbUsuarios t1 INNER JOIN [rest].[tbEmpleados] t2
--	ON		t1.empe_Id = t2.empe_Id
--	WHERE	[user_NombreUsuario] = @user_NombreUsuario
--	AND		[user_Contrasena] = @user_Contrasena
--	AND		user_Estado = 1

--END;

--GO


GO
CREATE OR ALTER    PROCEDURE acce.UDP_RecuperarContrasenia
@user_NombreUsuario VARCHAR(100),
@user_Contrasena NVARCHAR(MAX)

as
BEGIN

BEGIN TRY

Declare @Password Nvarchar(max) = (HASHBYTES('SHA2_512',@user_Contrasena))

UPDATE [acce].[tbUsuarios]
   SET [user_Contrasena] = @Password
 WHERE user_NombreUsuario = @user_NombreUsuario

 IF EXISTS (select * FROM acce.tbUsuarios WHERE user_NombreUsuario = @user_NombreUsuario
												AND [user_Contrasena] = @Password)
 BEGIN
 SELECT 1 as Proceso
 END
 ELSE
 SELECT -2 as Proceso

END TRY
BEGIN CATCH

SELECT 0 as Proceso
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
						   ,GETDATE()
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
CREATE OR ALTER  PROCEDURE gral.UDP_tbEstadosCiviles_Insert
@eciv_Descripcion varchar(100),
@eciv_UsuCreacion int
AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbEstadosCiviles WHERE eciv_Descripcion = @eciv_Descripcion)
		BEGIN

		INSERT INTO [gral].[tbEstadosCiviles]
				   ([eciv_Descripcion]
				   ,[eciv_UsuCreacion]
				   ,[eciv_FechaCreacion]
				   ,[eciv_UsuModificacion]
				   ,[eciv_FechaModificacion]
				   ,[eciv_Estado])
			 VALUES
				   (@eciv_Descripcion
				   ,@eciv_UsuCreacion
				   ,GETDATE()
				   ,NULL
				   ,NULL
				   ,1)

		SELECT 1 as Proceso
	END
	ELSE IF EXISTS (SELECT * FROM gral.tbEstadosCiviles WHERE eciv_Descripcion = @eciv_Descripcion and eciv_Estado = 1)
		SELECT -2 as Proceso
	ELSE 
		UPDATE gral.tbEstadosCiviles
		SET eciv_Estado = 1
		WHERE eciv_Descripcion = @eciv_Descripcion

	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH

END
GO

--Metodos de pago 
CREATE OR ALTER PROCEDURE gral.UDP_tbMetodoPago_Insert
    @metp_Descripcion             NVARCHAR (100),
    @metp_UsuCreacion         INT
AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbMetodosPago WHERE @metp_Descripcion = metp_Descripcion)
		BEGIN

			INSERT INTO gral.tbMetodosPago 
						([metp_Descripcion], 
						[metp_FechaCreacion], 
						[metp_UsuCreacion], 
						[metp_FechaModificacion], 
						[metp_UsuModificacion], 
						[metp_Estado])
				VALUES 
						(@metp_Descripcion, 
						GETDATE(), 
						@metp_UsuCreacion, 
						NULL, 
						NULL, 
						1);

			SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT * FROM gral.tbMetodosPago WHERE @metp_Descripcion = metp_Descripcion and metp_Estado = 1)
			SELECT -2 as Proceso
		ELSE
			UPDATE gral.tbMetodosPago
			SET metp_Estado = 1
			WHERE @metp_Descripcion = metp_Descripcion
		SELECT 1 as Proceso

	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
    
END
GO

--Cargos
CREATE OR ALTER PROCEDURE gral.UDP_tbCargos_Insert
	@carg_Descripcion Nvarchar(100),
	@carg_UsuCreacion int

AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbCargos WHERE carg_Descripcion = @carg_Descripcion)
		BEGIN

			INSERT INTO [gral].[tbCargos]
					   ([carg_Descripcion]
					   ,[carg_FechaCreacion]
					   ,[carg_UsuCreacion]
					   ,[carg_FechaModificacion]
					   ,[carg_UsuModificacion]
					   ,[carg_Estado])
				 VALUES
					   (@carg_Descripcion
					   ,GETDATE()
					   ,@carg_UsuCreacion
					   ,null
					   ,null
					   ,1)

			SELECT 1 as Proceso

		END
		ELSE IF EXISTS (SELECT * FROM gral.tbCargos WHERE carg_Descripcion = @carg_Descripcion AND carg_Estado = 1)
			SELECT -2 as Proceso
		ELSE
			UPDATE gral.tbCargos
			SET carg_Estado = 1
			WHERE carg_Descripcion = @carg_Descripcion
			select 1
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO

--Categorias
CREATE OR ALTER PROCEDURE gral.UDP_tbCategorias_Insert
	@cate_Descripcion Nvarchar(150),
	@cate_UsuCreacion int
AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM gral.tbCategorias WHERE cate_Descripcion = @cate_Descripcion)		
		BEGIN

			INSERT INTO [gral].tbCategorias
					   ([cate_Descripcion]
					   ,[cate_FechaCreacion]
					   ,[cate_UsuCreacion]
					   ,[cate_FechaModificacion]
					   ,[cate_UsuModificacion]
					   ,[cate_Estado])
				 VALUES
					   (@cate_Descripcion
					   ,GETDATE()
					   ,@cate_UsuCreacion
					   ,null
					   ,null
					   ,1)

			SELECT 1 as Proceso

		END
		ELSE IF EXISTS (SELECT * FROM gral.tbCategorias WHERE cate_Descripcion = @cate_Descripcion AND cate_Estado = 1)
			SELECT -2 as Proceso
		ELSE 
		BEGIN

			UPDATE gral.tbCategorias
			SET cate_Estado = 1
			WHERE cate_Descripcion = @cate_Descripcion

			SELECT 1 as Proceso

		END

	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH


END
GO

--Sucursales
CREATE OR ALTER PROCEDURE rest.UDP_tbSucursales_Insert
	@sucu_Nombre Nvarchar(200),
	@muni_Id INT,
	@sucu_Direccion Nvarchar(200),
	@sucu_UsuCreacion INT
AS
BEGIN
	BEGIN TRY

		IF NOT EXISTS (SELECT * FROM rest.tbSucursales WHERE sucu_Nombre = @sucu_Nombre)		
		BEGIN

			INSERT INTO rest.tbSucursales
					   (sucu_Nombre,
						muni_Id,
						sucu_Direccion,
						sucu_UsuCreacion,
						sucu_UsuModificacion,
						sucu_FechaModificacion,
						sucu_Estado)
				 VALUES
					   (@sucu_Nombre
					   ,@muni_Id
					   ,@sucu_Direccion
					   ,@sucu_UsuCreacion
					   ,null
					   ,null
					   ,1)

			SELECT 1 as Proceso

		END
		ELSE IF EXISTS (SELECT * FROM rest.tbSucursales WHERE sucu_Nombre = @sucu_Nombre AND sucu_Estado = 1)
			SELECT -2 as Proceso
		ELSE 
		BEGIN

			UPDATE rest.tbSucursales
			SET sucu_Estado = 1
			WHERE sucu_Nombre = @sucu_Nombre

			SELECT 1 as Proceso

		END

	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH


END
GO

--Ingredientes
--CREATE OR ALTER PROCEDURE rest.UDP_tbIngredinetes_Insert
--	@ingr_Nombre Nvarchar(200),
--	@ingr_PrecioX100gr Decimal(18,2),
--	@prov_Id INT,
--	@ingr_UsuarioCreacion INT
--AS
--BEGIN
--	BEGIN TRY

--		IF NOT EXISTS (SELECT * FROM rest.tbSucursales WHERE sucu_Nombre = @sucu_Nombre)		
--		BEGIN

--			INSERT INTO rest.tbSucursales
--					   (sucu_Nombre,
--						muni_Id,
--						sucu_Direccion,
--						sucu_UsuCreacion,
--						sucu_FechaCreacion,
--						sucu_UsuModificacion,
--						sucu_FechaModificacion,
--						sucu_Estado)
--				 VALUES
--					   (@sucu_Nombre
--					   ,@muni_Id
--					   ,@sucu_Direccion
--					   ,@sucu_UsuCreacion
--					   ,null
--					   ,null
--					   ,1)

--			SELECT 1 as Proceso

--		END
--		ELSE IF EXISTS (SELECT * FROM rest.tbSucursales WHERE sucu_Nombre = @sucu_Nombre AND sucu_Estado = 1)
--			SELECT -2 as Proceso
--		ELSE 
--		BEGIN

--			UPDATE rest.tbSucursales
--			SET sucu_Estado = 1
--			WHERE sucu_Nombre = @sucu_Nombre

--			SELECT 1 as Proceso

--		END

--	END TRY
--	BEGIN CATCH
--		SELECT 0 as Proceso
--	END CATCH


--END
--GO