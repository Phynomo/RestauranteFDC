--Procedimientos Select
--Usuarios
CREATE OR ALTER PROCEDURE acce.UDP_tbUsuarios_Select
AS
BEGIN
SELECT * FROM acce.VW_tbUsuarios
WHERE [user_Estado] = 1
END
GO
--Roles
CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Select
AS
BEGIN
SELECT * FROM acce.VW_tbRoles
WHERE [role_Estado] = 1
END
GO
--Departamentod
CREATE OR ALTER PROCEDURE gral.UDP_tbDepartamentos_Select
AS
BEGIN
SELECT * FROM gral.VW_tbDepartamentos
WHERE [depa_Estado] = 1
END
GO
--Municipios
CREATE OR ALTER PROCEDURE gral.UDP_tbMunicipios_Select
AS
BEGIN
SELECT * FROM gral.VW_tbMunicipios
WHERE [muni_Estado] = 1
END
GO
--Estados Civiles
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Select
AS
BEGIN
SELECT * FROM gral.VW_tbEstadosCiviles
WHERE [eciv_Estado] = 1
END
GO
--MetodosPago
CREATE OR ALTER PROCEDURE gral.UDP_tbMetodosPago_Select
AS
BEGIN
SELECT * FROM gral.VW_tbMetodosPago
WHERE [metp_Estado] = 1
END
GO
--Cargos
CREATE OR ALTER PROCEDURE gral.UDP_tbCargos_Select
AS
BEGIN
SELECT * FROM gral.VW_tbCargos
WHERE [carg_Estado] = 1
END
GO
--Categorias
CREATE OR ALTER PROCEDURE acce.UDP_tbCategorias_Select
AS
BEGIN
SELECT * FROM gral.VW_tbCategorias
WHERE [cate_Estado] = 1
END
GO
--Sucursales
CREATE OR ALTER PROCEDURE rest.UDP_tbSucursales_Select
AS
BEGIN
SELECT * FROM rest.VW_tbSucursales
WHERE [sucu_Estado] = 1
END
GO
--Empleados
CREATE OR ALTER PROCEDURE rest.UDP_tbEmpleados_Select
AS
BEGIN
SELECT * FROM rest.VW_tbEmpleados
WHERE [empe_Estado] = 1
END
GO
--Clientes
CREATE OR ALTER PROCEDURE rest.UDP_tbClientes_Select
AS
BEGIN
SELECT * FROM rest.VW_tbClientes
WHERE [clie_Estado] =  1
END
GO
--Proveedores
CREATE OR ALTER PROCEDURE rest.UDP_tbProveedores_Select
AS
BEGIN
SELECT * FROM rest.VW_tbProveedores
WHERE [prov_Estado] = 1
END
GO
--Ingredientes
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientes_Select
AS
BEGIN
SELECT * FROM rest.VW_tbIngredientes
WHERE [ingr_Estado] = 1
END
GO
--Platillos
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillos_Select
AS
BEGIN
SELECT * FROM rest.VW_tbPlatillos
WHERE [plat_Estado] = 1
END
GO
--Recervaciones
CREATE OR ALTER PROCEDURE rest.UDP_tbReservaciones_Select
AS
BEGIN
SELECT * FROM rest.VW_tbReservaciones
WHERE [rese_Estado] = 1
END
GO
--Factura
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturas_Select
AS
BEGIN
SELECT * FROM rest.VW_tbFacturas
WHERE [fact_Estado] = 1
END
GO
--FacturaDetalles
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturasDetalles_Select
AS
BEGIN
SELECT * FROM rest.VW_tbFacturaDetalles
WHERE [fade_Estado] = 1
END
GO