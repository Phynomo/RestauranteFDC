CREATE OR ALTER PROCEDURE rest.UDP_FacturasPorSucursal_Chart
AS
BEGIN

SELECT
	sucu_Id,
	sucu_Nombre,
	(SELECT COUNT(T2.fact_Id) FROM rest.VW_tbFacturas T2 WHERE T2.sucu_Id = T1.sucu_Id) AS CantidadFacturas
FROM rest.VW_tbSucursales T1

END
GO
CREATE OR ALTER PROCEDURE gral.UDP_MetodosPago_Chart
AS
BEGIN

SELECT	COUNT(metp_Descripcion) AS CatidadMetodosPago,
		metp_Descripcion,
		metp_Id
FROM rest.VW_tbFacturas T1
GROUP BY metp_Descripcion,metp_Id

END
GO
CREATE OR ALTER PROCEDURE rest.UDP_Platillos_Chart
AS
BEGIN

SELECT TOP(4) plat_Id,plat_Nombre,plat_Imagen,plat_Precio,
	(SELECT SUM(T2.fade_Cantidad) FROM rest.VW_tbFacturaDetalles T2 WHERE T2.plat_Id = T1.plat_Id) AS CantidadPlatillos
FROM rest.VW_tbPlatillos T1
WHERE T1.plat_Estado = 1
ORDER BY CantidadPlatillos desc

END
GO
CREATE OR ALTER PROCEDURE rest.UDP_TotalEmpleados_Chart
AS
BEGIN
SELECT COUNT(*)as TotalEmpleados FROM rest.tbEmpleados WHERE empe_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE rest.UDP_TotalFacturas_Chart
AS
BEGIN
SELECT COUNT(*)as CantidadFacturas FROM rest.tbFacturas WHERE fact_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE rest.UDP_PlatillosPedidos_Chart
AS
BEGIN
SELECT sum(fade_Cantidad) AS CantidadPlatillos FROM rest.tbFacturasDetalles WHERE fade_Estado = 1 
END
GO
CREATE OR ALTER PROCEDURE rest.UDP_IngresosTotales_Chart
AS
BEGIN
SELECT sum(fade_Cantidad * fade_Precio) AS CantidadFacturas FROM rest.tbFacturasDetalles WHERE fade_Estado = 1 
END
GO



--Reportes
--Factura Tuneada
CREATE OR ALTER PROCEDURE rest.UDP_tbFacturas_SelectReporte
@sucu_Id INT
AS
BEGIN
SELECT *,
		ISNULL((SELECT SUM(T2.fade_Cantidad * T2.fade_Precio) FROM rest.tbFacturasDetalles T2 WHERE T2.fact_Id = T1.fact_Id ),0) as CantidadFacturas
FROM rest.VW_tbFacturas T1
WHERE [fact_Estado] = 1 AND sucu_Id = @sucu_Id
END
GO
--Platillos TUNEADO
CREATE OR ALTER PROCEDURE rest.UDP_tbPlatillos_Select_Reporte
@sucu_Id INT
AS
BEGIN
SELECT T1.*,
		ISNULL((SELECT SUM(T2.fade_Cantidad) FROM rest.VW_tbFacturaDetalles T2 INNER JOIN rest.VW_tbFacturas T3 ON T2.fact_Id = T3.fact_Id WHERE T2.plat_Id = T1.plat_Id AND T3.sucu_Id = 1),0) AS CantidadPlatillos

FROM rest.VW_tbPlatillos T1
WHERE [plat_Estado] = 1
END
GO
--Empleados Tuneados 
CREATE OR ALTER PROCEDURE rest.UDP_tbEmpleados_SelectReportes
@sucu_Id INT
AS
BEGIN
SELECT * FROM rest.VW_tbEmpleados
WHERE [empe_Estado] = 1 and sucu_Id = @sucu_Id
END
GO