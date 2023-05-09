CREATE OR ALTER PROCEDURE UDP_FacturasPorSucursal_Chart
AS
BEGIN

SELECT
	sucu_Id,
	sucu_Nombre,
	(SELECT COUNT(T2.fact_Id) FROM rest.VW_tbFacturas T2 WHERE T2.sucu_Id = T1.sucu_Id) AS CantidadFacturas
FROM rest.VW_tbSucursales T1

END
GO
CREATE OR ALTER PROCEDURE dbo.UDP_MetodosPago_Chart
AS
BEGIN

SELECT	COUNT(metp_Descripcion) AS CatidadMetodosPago,
		metp_Descripcion,
		metp_Id
FROM rest.VW_tbFacturas T1
GROUP BY metp_Descripcion,metp_Id

END
GO
CREATE OR ALTER PROCEDURE UDP_Platillos_Chart
AS
BEGIN

SELECT TOP(4) plat_Id,plat_Nombre,plat_Imagen,plat_Precio,
	(SELECT SUM(T2.fade_Cantidad) FROM rest.VW_tbFacturaDetalles T2 WHERE T2.plat_Id = T1.plat_Id) AS CantidadPlatillos
FROM rest.VW_tbPlatillos T1
ORDER BY CantidadPlatillos desc

END
GO
CREATE OR ALTER PROCEDURE dbo.UDP_TotalEmpleados_Chart
AS
BEGIN
SELECT COUNT(*)as TotalEmpleados FROM rest.tbEmpleados WHERE empe_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE dbo.UDP_TotalFacturas_Chart
AS
BEGIN
SELECT COUNT(*)as CantidadFacturas FROM rest.tbFacturas WHERE fact_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE dbo.UDP_PlatillosPedidos_Chart
AS
BEGIN
SELECT sum(fade_Cantidad) AS CantidadPlatillos FROM rest.tbFacturasDetalles WHERE fade_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE dbo.UDP_IngresosTotales_Chart
AS
BEGIN
SELECT sum(fade_Cantidad * fade_Precio) AS CantidadFacturas FROM rest.tbFacturasDetalles WHERE fade_Estado = 1 
END
GO