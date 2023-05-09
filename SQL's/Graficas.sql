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
CREATE OR ALTER PROCEDURE UDP_MetodosPago_Chart
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

SELECT TOP(5) plat_Id,plat_Nombre,
	(SELECT COUNT(T2.fact_Id) FROM rest.VW_tbFacturaDetalles T2 WHERE T2.plat_Id = T1.plat_Id) AS CantidadPlatillos
FROM rest.VW_tbPlatillos T1
ORDER BY CantidadPlatillos desc

END