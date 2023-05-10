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
