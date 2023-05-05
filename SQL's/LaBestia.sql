CREATE OR ALTER PROCEDURE rest.UDP_tbFacturasDetalles_Insert --'1', '1', '10', '1'
@fact_Id int,
@plat_Id int,
@fade_Cantidad int,
@fade_UsuCreacion int
AS
BEGIN

	DECLARE @stockSuficiente bit = 1;

	BEGIN TRY 

		DECLARE @Ingredientes INT;

		DECLARE verificarStock CURSOR FOR 
			  SELECT ingr_Id FROM rest.tbIngredientesXPlatillos WHERE plat_Id = @plat_Id

			OPEN verificarStock;

				FETCH NEXT FROM verificarStock INTO @Ingredientes;

				WHILE @@FETCH_STATUS = 0
				BEGIN
				IF((Select top(1) ingrsucu_StockEnGramos from rest.tbIngredientesXSucursal WHERE ingr_Id = @Ingredientes ) < (@fade_Cantidad * (SELECT TOP(1) ingrplat_Gramos FROM rest.tbIngredientesXPlatillos WHERE plat_Id = @plat_Id AND ingr_Id = @Ingredientes)))
				BEGIN
					SET @stockSuficiente = 0
				END
			  FETCH NEXT FROM verificarStock INTO @Ingredientes;
		END;

		CLOSE verificarStock;
		DEALLOCATE verificarStock;

	END TRY
	BEGIN CATCH
		SET @stockSuficiente = 0
	END CATCH

	BEGIN TRY
		print @stockSuficiente
		IF (@stockSuficiente = 1)
		BEGIN

			INSERT INTO [rest].[tbFacturasDetalles]
					   ([fact_Id]
					   ,[plat_Id]
					   ,[fade_Cantidad]
					   ,[fade_Precio]
					   ,[fade_FechaCreacion]
					   ,[fade_UsuCreacion]
					   ,[fade_Estado])
				 VALUES
					   (@fact_Id
					   ,@plat_Id
					   ,@fade_Cantidad
					   ,(Select plat_Precio from rest.tbPlatillos WHERE plat_Id = @plat_Id)
					   ,GETDATE()
					   ,@fade_UsuCreacion
					   ,1)

		  
			DECLARE @ingr_Id INT;

			DECLARE cursor_reducirStock CURSOR FOR 
			  SELECT ingr_Id FROM rest.tbIngredientesXSucursal WHERE ingr_Id IN (select ingr_Id from rest.tbIngredientesXPlatillos WHERE plat_Id = @plat_Id);

			OPEN cursor_reducirStock;

				FETCH NEXT FROM cursor_reducirStock INTO @ingr_Id;

				WHILE @@FETCH_STATUS = 0
				BEGIN

					UPDATE [rest].[tbIngredientesXSucursal]
					   SET [ingrsucu_StockEnGramos] = ingrsucu_StockEnGramos - (select T1.ingrplat_Gramos from rest.tbIngredientesXPlatillos T1 WHERE ingr_Id = @ingr_Id AND plat_Id = @plat_Id ) * @fade_Cantidad
					 WHERE ingr_Id = @ingr_Id


				  FETCH NEXT FROM cursor_reducirStock INTO @ingr_Id;
				END;

			CLOSE cursor_reducirStock;
			DEALLOCATE cursor_reducirStock;

			SELECT 1

		END
		ELSE
			SELECT -4

	END TRY
	BEGIN CATCH
	PRINT 'Error: ' + ERROR_MESSAGE();
		SELECT 0
	END CATCH

END
GO

CREATE OR ALTER PROCEDURE rest.UDP_tbFacturasDetalles_Delete --'7'
@fade_Id int
AS
BEGIN

	BEGIN TRY
			
			Declare @fact_Id INT = (SELECT fact_Id FROM rest.tbFacturasDetalles WHERE fade_Id = @fade_Id)
			Declare @plat_Id INT = (SELECT plat_Id FROM rest.tbFacturasDetalles WHERE fade_Id = @fade_Id)
			Declare @fade_Cantidad INT = (SELECT fade_Cantidad FROM rest.tbFacturasDetalles WHERE fade_Id = @fade_Id)

		  
			DECLARE @ingr_Id INT;

			DECLARE cursor_reducirStock CURSOR FOR 
			  SELECT ingr_Id FROM rest.tbIngredientesXSucursal WHERE ingr_Id IN (select ingr_Id from rest.tbIngredientesXPlatillos WHERE plat_Id = @plat_Id);

			OPEN cursor_reducirStock;

				FETCH NEXT FROM cursor_reducirStock INTO @ingr_Id;

				WHILE @@FETCH_STATUS = 0
				BEGIN

					UPDATE [rest].[tbIngredientesXSucursal]
					   SET [ingrsucu_StockEnGramos] = ingrsucu_StockEnGramos + (select T1.ingrplat_Gramos from rest.tbIngredientesXPlatillos T1 WHERE ingr_Id = @ingr_Id AND plat_Id = @plat_Id ) * @fade_Cantidad
					 WHERE ingr_Id = @ingr_Id


				  FETCH NEXT FROM cursor_reducirStock INTO @ingr_Id;
				END;

			CLOSE cursor_reducirStock;
			DEALLOCATE cursor_reducirStock;

			SELECT 1

	END TRY
	BEGIN CATCH
	PRINT 'Error: ' + ERROR_MESSAGE();
		SELECT 0	
	END CATCH

END