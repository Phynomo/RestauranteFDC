CREATE OR ALTER PROCEDURE rest.UDP_CargarDatosCliente
@clie_Id		INT
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


--rest.UDP_CargarDatosCliente 1

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
@dept_Id		INT
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
@empe_Id			INT
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

--rest.UDP_CargarDatosEmpleado 1

select*from rest.tbEmpleados

GO


CREATE OR ALTER PROCEDURE rest.UDP_DetallesEmpleados
@empe_Id			INT
AS
BEGIN

SELECT*FROM [rest].[VW_tbEmpleados] WHERE [empe_Id] = @empe_Id
END
GO
--rest.UDP_DetallesEmpleados 1

GO

CREATE OR ALTER PROCEDURE rest.UDP_DetallesCliente
@clie_Id			INT
AS
BEGIN

SELECT*FROM [rest].[VW_tbClientes] WHERE clie_Id = @clie_Id
END
GO
--rest.UDP_DetallesCliente 1




--------------------------- ACTUALIZADO -------------------------------------------------
GO
CREATE OR ALTER PROCEDURE [rest].[UDP_InsertarPlatillos] 
@plat_Nombre         NVARCHAR(200), --campos para la tabla rest.tbPlatillos
@plat_Precio         DECIMAL(18,2),
@cate_Id             INT,
@plat_Imagen         NVARCHAR(MAX), 
@plat_UsuCreacion    INT
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

            SELECT SCOPE_IDENTITY() 
        END
        ELSE IF EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
        
        SELECT -2 as Proceso
        
    END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO

--Ingredientes
CREATE OR ALTER PROCEDURE [rest].[UDP_tbIngredientes_Select]
AS
BEGIN
SELECT * FROM rest.VW_tbIngredientes WHERE [ingr_Estado] = 1
END
GO




-- INSERTAR INGREDIENTES DEL PLATILLO

CREATE OR ALTER PROCEDURE rest.UDP_IngredientesPlatillo
   @plat_Id					INT,
   @ingr_Id					INT,
   @ingrplat_Gramos			INT,
   @ingrplat_UsuCreacion	INT,
   @ingr_PrecioX100gr		DECIMAL(18,2)

AS
BEGIN
BEGIN TRY
 BEGIN TRAN 
	 
	 INSERT INTO [rest].[tbIngredientesXPlatillos]([plat_Id],[ingr_Id],[ingrplat_Gramos],[ingrplat_UsuCreacion])
	 VALUES(@plat_Id,@ingr_Id,@ingrplat_Gramos,@ingrplat_UsuCreacion)

	UPDATE [rest].[tbPlatillos] SET [plat_Precio] = [plat_Precio] + (@ingrplat_Gramos/100 *@ingr_PrecioX100gr)  WHERE [plat_Id] = @plat_Id

	SELECT 1
		COMMIT

END TRY
   BEGIN CATCH
SELECT 0
  ROLLBACK
END CATCH
END
GO

--ELIMINAR INGREDIENTES AL PLATILLO
CREATE OR ALTER PROCEDURE rest.UDP_EliminarIngredientesPlatillos
	@ingrplat_Id		INT,
	@plat_Id			INT,
	@ingr_Id			INT,
	@ingrplat_Gramos	INT
	AS
	BEGIN
	BEGIN TRY
	BEGIN TRAN 

	DELETE FROM [rest].[tbIngredientesXPlatillos] WHERE [ingrplat_Id] = @ingrplat_Id AND plat_Id = @plat_Id AND ingr_Id = @ingr_Id AND ingrplat_Gramos = @ingrplat_Gramos

	UPDATE [rest].[tbPlatillos] SET [plat_Precio] = [plat_Precio] - (SELECT ([ingr_PrecioX100gr]/100)*@ingrplat_Gramos FROM [rest].[tbIngredientes] WHERE ingr_Id = @ingr_Id ) WHERE plat_Id = @plat_Id
	SELECT 1
	COMMIT
END TRY
BEGIN CATCH
	SELECT 0
	ROLLBACK
END CATCH
END
GO

--rest.UDP_EliminarIngredientesPlatillos 18,23,2,150
--rest.UDP_IngredientesPlatillo 23,2,150,1,5.50

SELECT*FROM [rest].[tbIngredientesXPlatillos]
SELECT*FROM [rest].[tbPlatillos]
SELECT*FROM [rest].[tbIngredientes]



GO




--- VISTA INGREDIENTES X PLATILLOS
CREATE OR ALTER   VIEW rest.VW_IngredientesXPlatillo
AS
SELECT [ingrplat_Id], 
		pla.[plat_Id],
		plat.plat_Nombre,
		pla.[ingr_Id],
		ing.ingr_Nombre,
		ing.ingr_PrecioX100gr,
		[ingrplat_Gramos],
		[ingrplat_FechaCreacion],
		[ingrplat_UsuCreacion],
		usu.user_NombreUsuario AS user_NombreUsuCreacion,
		[ingrplat_FechaModificacion], 
		[ingrplat_UsuModificacion],
		usua.user_NombreUsuario AS user_NombreUsuModificacion,
		[ingrplat_Estado] 
		FROM [rest].[tbIngredientesXPlatillos] pla
INNER JOIN [rest].[tbIngredientes] ing ON pla.ingr_Id = ing.ingr_Id
INNER JOIN [rest].[tbPlatillos] plat ON plat.plat_Id = pla.plat_Id
INNER JOIN [acce].[tbUsuarios] usu ON usu.user_Id = pla.ingrplat_UsuCreacion
LEFT JOIN  [acce].[tbUsuarios] usua ON usua.user_Id = pla.ingrplat_UsuModificacion
GO

--SELECT*FROM [rest].[VW_IngredientesXPlatillo]


--- MOSTRAR INGREDIENTES POR PLATILLOS (PROBAR)

CREATE OR ALTER PROCEDURE rest.UDP_MostrarIngredientesXPlato
@plat_Id	INT
AS
BEGIN
	SELECT*FROM [rest].[VW_IngredientesXPlatillo] WHERE [plat_Id] = @plat_Id

END
GO
--rest.UDP_MostrarIngredientesXPlato 27



select*from rest.tbPlatillos


---UDP PARA QUE EDITE  
GO
CREATE OR ALTER PROCEDURE rest.UDP_EditarCreatePlatillo
	@plat_Id			 INT,
	@plat_Nombre         NVARCHAR(200), 
	@cate_Id             INT,
	@plat_Imagen         NVARCHAR(MAX)
	AS
	BEGIN
	BEGIN TRY
	IF NOT EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )
        BEGIN
		UPDATE [rest].[tbPlatillos] SET [plat_Nombre] = @plat_Nombre, [cate_Id] = @cate_Id, [plat_Imagen] = @plat_Imagen
		WHERE [plat_Id] = @plat_Id

	SELECT 1 AS Proceso
	END
	 ELSE IF EXISTS (SELECT * FROM rest.tbPlatillos WHERE @plat_Nombre = plat_Nombre )      
     SELECT -2 as Proceso

END TRY
BEGIN CATCH
	SELECT 0
END CATCH 
END
GO



--- UDP MOSTRAR PRECIO
CREATE OR ALTER PROCEDURE rest.UDP_MostrarPrecio
@plat_Id	INT
AS
BEGIN
SELECT * FROM [rest].[tbPlatillos] WHERE [plat_Id] = @plat_Id
END
GO

