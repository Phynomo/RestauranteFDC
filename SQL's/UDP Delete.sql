--UDP Delete 

--Usuarios
CREATE OR ALTER PROCEDURE acce.UDP_tbUsuario_Delete
	@user_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [acce].[tbUsuarios]
	SET [user_Estado] = 0
	WHERE [user_Id] = @user_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Roles

CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Delete
	@role_Id INT
AS
BEGIN
BEGIN TRY
	if(EXISTS (SELECT * FROM acce.tbUsuarios where @role_Id = role_Id))
	BEGIN
	 select -2
	END
	ELSE
	BEGIN
	UPDATE [acce].[tbRoles]
	SET [role_Estado] = 0
	WHERE [role_Id] = @role_Id
		SELECT 1 AS Proceso
	END
	
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Departamentos
CREATE OR ALTER PROCEDURE gral.UDP_tbDepartamentos_Delete
	@depa_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbDepartamentos]
	SET [depa_Estado] = 0
	WHERE [depa_Id] = @depa_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Municipios
CREATE OR ALTER PROCEDURE gral.UDP_tbMunicipios_Delete
	@muni_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbMunicipios]
	SET [muni_Estado] = 0
	WHERE [muni_Id] = @muni_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Estados Civiles
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Delete
	@eciv_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbEstadosCiviles]
	SET [eciv_Estado] = 0
	WHERE [eciv_Id] = @eciv_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Metodos de Pago
CREATE OR ALTER PROCEDURE gral.UDP_tbMetodoPago_Delete
	@metp_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbMetodosPago]
	SET [metp_Estado] = 0
	WHERE [metp_Id] = @metp_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Cargos
CREATE OR ALTER PROCEDURE gral.UDP_tbCargos_Delete
	@carg_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbCargos]
	SET [carg_Estado] = 0
	WHERE [carg_Id] = @carg_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Categorias
CREATE OR ALTER PROCEDURE gral.UDP_tbCategorias_Delete
	@cate_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [gral].[tbCategorias]
	SET [cate_Estado] = 0
	WHERE [cate_Id] = @cate_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Sucursales
CREATE OR ALTER PROCEDURE rest.UDP_tbSucursales_Delete
	@sucu_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbSucursales]
	SET [sucu_Estado] = 0
	WHERE [sucu_Id] = @sucu_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Empleados
CREATE OR ALTER PROCEDURE rest.UDP_tbEmpleados_Delete
	@empe_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbEmpleados]
	SET [empe_Estado] = 0
	WHERE [empe_Id] = @empe_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Clientes
CREATE OR ALTER PROCEDURE rest.UDP_tbClientes_Delete
	@clie_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbClientes]
	SET [clie_Estado] = 0
	WHERE [clie_Id] = @clie_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Proveedores
CREATE OR ALTER PROCEDURE rest.UDP_tbProveedores_Delete
	@prov_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbProveedores]
	SET [prov_Estado] = 0
	WHERE [prov_Id] = @prov_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Ingredientes
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientes_Delete
	@ingr_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbIngredientes]
	SET [ingr_Estado] = 0
	WHERE [ingr_Id] = @ingr_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--IngredientesXSucursal
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientesXSucursal_Delete
	@ingrsucu_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbIngredientesXSucursal]
	SET [ingrsucu_Estado] = 0
	WHERE [ingrsucu_Id] = @ingrsucu_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO
SELECT * FROM [rest].[tbPlatillos]
--Platillos
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillos_Delete
	@plat_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbPlatillos]
	SET [plat_Estado] = 0
	WHERE [plat_Id] = @plat_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--IngredientesXPlatillos
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientesXPlatillos_Delete
	@ingrplat_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbIngredientesXPlatillos]
	SET [ingrplat_Estado] = 0
	WHERE [ingrplat_Id] = @ingrplat_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

----Reservaciones
--CREATE OR ALTER PROCEDURE rest.UDP_tbReservaciones_Delete
--	@rese_Id INT
--AS
--BEGIN
--	BEGIN TRY
--	UPDATE [rest].[tbReservaciones]
--	SET [rese_Estado] = 0
--	WHERE [rese_Id] = @rese_Id
--		SELECT 1 AS Proceso
-- END TRY
--    BEGIN CATCH
--        SELECT 0 as Proceso
--    END CATCH
--END
--GO

--Facturas
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturas_Delete
	@fact_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbFacturas]
	SET [fact_Estado] = 0
	WHERE [fact_Id] = @fact_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--FacturasDetalles
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturasDetalles_Delete
	@fade_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbFacturasDetalles]
	SET [fade_Estado] = 0
	WHERE [fade_Id] = @fade_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--PlatillosHistorial
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillosHistorial_Delete
	@plat_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbPlatillosHistorial]
	SET [plat_Estado] = 0
	WHERE [plat_Id] = @plat_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--IngredientesHistorial
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientesHistorial_Delete
	@ingr_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [rest].[tbIngredientesHistorial]
	SET [ingr_Estado] = 0
	WHERE [ingr_Id] = @ingr_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Pantallas
CREATE OR ALTER PROCEDURE acce.UDP_tbPantallas_Delete
	@pant_Id INT
AS
BEGIN
	BEGIN TRY
	UPDATE [acce].[tbPantallas]
	SET [pant_Estado] = 0
	WHERE [pant_Id] = @pant_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--PantallasPorRoles
CREATE OR ALTER PROCEDURE acce.UDP_tbPantallasPorRoles_Delete
	@role_Id INT
AS
BEGIN
	BEGIN TRY
	DELETE FROM [acce].[tbPantallasPorRoles]
	WHERE [role_Id] = @role_Id
		SELECT 1 AS Proceso
 END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO