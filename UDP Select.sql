--Procedimientos Select
--Usuarios
CREATE OR ALTER PROCEDURE acce.UDP_tbUsuarios_Select
AS
BEGIN
SELECT * FROM acce.VW_tbUsuarios
END
GO
--Roles
CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Select
AS
BEGIN
SELECT * FROM acce.VW_tbRoles
END
GO
--Departamentod
CREATE OR ALTER PROCEDURE gral.UDP_tbDepartamentos_Select
AS
BEGIN
SELECT * FROM gral.VW_tbDepartamentos
END
GO
--Municipios
CREATE OR ALTER PROCEDURE gral.UDP_tbMunicipios_Select
AS
BEGIN
SELECT * FROM gral.VW_tbMunicipios
END
GO
--Estados Civiles
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Select
AS
BEGIN
SELECT * FROM gral.VW_tbEstadosCiviles
END
GO
--MetodosPago
CREATE OR ALTER PROCEDURE gral.UDP_tbMetodosPago_Select
AS
BEGIN
SELECT * FROM gral.VW_tbMetodosPago
END
GO
--Cargos
CREATE OR ALTER PROCEDURE gral.UDP_tbCargos_Select
AS
BEGIN
SELECT * FROM gral.VW_tbCargos
END
GO
--Categorias
CREATE OR ALTER PROCEDURE acce.UDP_tbCategorias_Select
AS
BEGIN
SELECT * FROM gral.VW_tbCategorias
END
GO
--Sucursales
CREATE OR ALTER PROCEDURE rest.UDP_tbSucursales_Select
AS
BEGIN
SELECT * FROM rest.VW_tbSucursales
END
GO
--Empleados
CREATE OR ALTER PROCEDURE rest.UDP_tbEmpleados_Select
AS
BEGIN
SELECT * FROM rest.VW_tbEmpleados
END
GO
--Clientes
CREATE OR ALTER PROCEDURE rest.UDP_tbClientes_Select
AS
BEGIN
SELECT * FROM rest.VW_tbClientes
END
GO
--Proveedores
CREATE OR ALTER PROCEDURE rest.UDP_tbProveedores_Select
AS
BEGIN
SELECT * FROM rest.VW_tbProveedores
END
GO
--Ingredientes
CREATE OR ALTER PROCEDURE rest.UDP_tbIngredientes_Select
AS
BEGIN
SELECT * FROM rest.VW_tbIngredientes
END
GO
--Platillos
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillos_Select
AS
BEGIN
SELECT * FROM rest.VW_tbPlatillos
END
GO
--Recervaciones
CREATE OR ALTER PROCEDURE rest.UDP_tbReservaciones_Select
AS
BEGIN
SELECT * FROM rest.VW_tbReservaciones
END
GO
--Factura
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturas_Select
AS
BEGIN
SELECT * FROM rest.VW_tbFacturas
END
GO
--FacturaDetalles
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturasDetalles_Select
AS
BEGIN
SELECT * FROM rest.VW_tbFacturaDetalles
END
GO