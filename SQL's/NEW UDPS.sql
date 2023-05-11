CREATE OR ALTER PROCEDURE rest.UDP_CargarDatosCliente
@clie_Id INT
AS
BEGIN
BEGIN TRY

	SELECT [clie_Nombres], [clie_Apellidos], [clie_Identidad], [clie_RTN],
	[clie_Sexo], [clie_Telefono] FROM rest.tbClientes
	WHERE ([clie_Id] = @clie_Id AND [clie_Estado] = 1)
	select 1
		
END TRY

BEGIN CATCH
   
	SELECT 0
END CATCH
END
GO


rest.UDP_CargarDatosCliente 1

GO
--Clientes
CREATE OR ALTER   PROCEDURE [rest].[UDP_tbClientes_Select]
AS
BEGIN
SELECT * FROM rest.VW_tbClientes WHERE [clie_Estado] = 1
END
GO



select*from rest.tbEmpleados

GO
CREATE OR ALTER PROCEDURE rest.UDP_CargarMuniPorDep
@dept_Id	INT
AS
BEGIN
 SELECT [muni_Id],[muni_Nombre] FROM [gral].[tbMunicipios] muni WHERE muni.depa_Id = @dept_Id
 END
 GO

 rest.UDP_CargarMuniPorDep 1

	select*from gral.tbEstadosCiviles
		select*from rest.tbSucursales
			 select*from gral.tbCargos
				 select*from gral.tbDepartamentos
				     select*from gral.tbMunicipios
						select*from rest.tbEmpleados
GO


CREATE OR ALTER PROCEDURE rest.UDP_CargarDatosEmpleado
@empe_Id INT
AS
BEGIN
BEGIN TRY
	SELECT [empe_Nombres], [empe_Apellidos], [empe_Identidad], empe_FechaNacimiento,empe_DireccionExacta,
	[empe_Sexo], [empe_Telefono],sucu_Id, e.muni_Id,d.depa_Id, d.depa_Nombre, eciv_Id, carg_Id,[empe_CorreoElectronico]
	FROM rest.tbEmpleados e
	INNER JOIN [gral].[tbMunicipios] m ON e.muni_Id = m.muni_Id 
	INNER JOIN gral.tbDepartamentos d ON m.depa_Id = d.depa_Id
	WHERE (empe_Id = @empe_Id )
	select 1
		
END TRY

BEGIN CATCH
   
	SELECT 0
END CATCH
END
GO

rest.UDP_CargarDatosEmpleado 1

select*from rest.tbEmpleados

GO


CREATE OR ALTER PROCEDURE rest.UDP_DetallesEmpleados
@empe_Id	INT
AS
BEGIN

SELECT*FROM [rest].[VW_tbEmpleados] WHERE [empe_Id] = @empe_Id
END
GO
rest.UDP_DetallesEmpleados 1

GO

CREATE OR ALTER PROCEDURE rest.UDP_DetallesCliente
@clie_Id	INT
AS
BEGIN

SELECT*FROM [rest].[VW_tbClientes] WHERE clie_Id = @clie_Id
END
GO
rest.UDP_DetallesCliente 1


--UPDATE [rest].[tbPlatillos] SET [plat_Imagen] = 'https://i.pinimg.com/736x/dc/a9/45/dca945f603a0a6059322c82b90412458--arroz-buffet.jpg'






--**************************************** PRUEBA ********************************************************-

--CREATE TYPE rest.IngredientePlatilloType AS TABLE  
--(  
--   ingr_Id INT,
--   ingrplat_Gramos INT,
--   ingrplat_UsuCreacion INT
--);


--GO
--CREATE OR ALTER   PROCEDURE [rest].[UDP_InsertarPlatillos] 
--@plat_Nombre			NVARCHAR(200), --campos para la tbala rest.tbPlatillos
--@plat_Precio			DECIMAL(18,2),
--@cate_Id				INT,
--@plat_Imagen			NVARCHAR(MAX), 
--@plat_UsuCreacion		INT,

--@ingredientes           rest.IngredientePlatilloType READONLY ---Campos para la de Ingredientes Por Platillo
--AS
--BEGIN
--BEGIN TRY
--	IF NOT EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
--			BEGIN
--			DECLARE @plat_Id INT;

--				INSERT INTO [rest].tbPlatillos
--					   (plat_Nombre	
--					   ,plat_Precio	
--					   ,cate_Id		
--					   ,plat_Imagen	
--					   ,plat_UsuCreacion	
--					   ,plat_FechaCreacion
--					   ,plat_UsuModificacion
--					   ,plat_FechaModificacion
--					   ,plat_Estado)
--				 VALUES
--						(@plat_Nombre	
--						,@plat_Precio	
--						,@cate_Id		
--						,@plat_Imagen	
--						,@plat_UsuCreacion
--						,GETDATE()
--						,NULL 
--						,NULL 
--						,1);

--				SET @plat_Id = SCOPE_IDENTITY();

--				INSERT INTO [rest].[tbIngredientesXPlatillos]([plat_Id],[ingr_Id],[ingrplat_Gramos],[ingrplat_UsuCreacion])
--               SELECT @plat_Id, ingr_Id, ingrplat_Gramos, ingrplat_UsuCreacion FROM @ingredientes;

--		SELECT 1 as Proceso
--		END
--		ELSE IF EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
		
--		SELECT -2 as Proceso
		
--	END TRY
--	BEGIN CATCH
--		SELECT 0 as Proceso
--	END CATCH
--END
--GO



----EXEC [rest].[UDP_InsertarPlatillos] 'Prueba 2 UDP',50,1,'https://economia.org/anexo/Buffet.jpg',1,1,20,1

----GO
--SELECT*FROM [rest].[tbPlatillos]
--SELECT*FROM [rest].[tbIngredientesXPlatillos]

----UDP 
--DECLARE @ingredientes AS rest.IngredientePlatilloType;
--INSERT INTO @ingredientes VALUES (1, 200, 1), (2, 300, 1); -- ejemplo de datos de los ingredientes

--EXEC [rest].[UDP_InsertarPlatillos] 'Platillo de prueba', 10, 1, 'https://economia.org/anexo/Buffet.jpg', 1, @ingredientes;
--*********************************************





--------------------------- ACTUALIZADO -------------------------------------------------
GO
CREATE OR ALTER   PROCEDURE [rest].[UDP_InsertarPlatillos] 
@plat_Nombre			NVARCHAR(200), --campos para la tbala rest.tbPlatillos
@plat_Precio			DECIMAL(18,2),
@cate_Id				INT,
@plat_Imagen			NVARCHAR(MAX), 
@plat_UsuCreacion		INT
AS
BEGIN
BEGIN TRY
	IF NOT EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
			BEGIN
		

				INSERT INTO [rest].tbPlatillos
					   (plat_Nombre	
					   ,plat_Precio	
					   ,cate_Id		
					   ,plat_Imagen	
					   ,plat_UsuCreacion	
					   ,plat_FechaCreacion
					   ,plat_UsuModificacion
					   ,plat_FechaModificacion
					   ,plat_Estado)
				 VALUES
						(@plat_Nombre	
						,@plat_Precio	
						,@cate_Id		
						,@plat_Imagen	
						,@plat_UsuCreacion
						,GETDATE()
						,NULL 
						,NULL 
						,1);

		SELECT 1 as Proceso
		END
		ELSE IF EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
		
		SELECT -2 as Proceso
		
	END TRY
	BEGIN CATCH
		SELECT 0 as Proceso
	END CATCH
END
GO


CREATE OR ALTER PROCEDURE rest.UDP_IngredientesPlatillo
   @plat_Id INT,
   @ingr_Id INT,
   @ingrplat_Gramos INT,
   @ingrplat_UsuCreacion INT

AS
BEGIN

	INSERT INTO [rest].[tbIngredientesXPlatillos]([plat_Id],[ingr_Id],[ingrplat_Gramos],[ingrplat_FechaCreacion])
	VALUES(@plat_Id,@ingr_Id,@ingrplat_Gramos,@ingrplat_UsuCreacion)
END
GO

