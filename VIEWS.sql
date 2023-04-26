--Views  

--Usuarios
CREATE OR ALTER VIEW VW_tbUsuarios
AS
SELECT T1.[user_Id]
      ,T1.[user_NombreUsuario]
      ,T1.[user_Contrasena]
      ,T1.[user_EsAdmin]
      ,T1.[role_Id]
	  ,T2.role_Nombre
      ,T1.[empe_Id]
	  ,T3.empe_Nombres
	  ,T3.empe_Apellidos
	  ,T3.empe_Nombres + ' ' + T3.empe_Apellidos AS empe_NombreCompleto
	  ,t3.carg_Id
	  ,T4.carg_Descripcion
      ,T1.[user_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuarioCreacion
      ,T1.[user_FechaCreacion]
      ,T1.[user_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuarioModificacion
      ,T1.[user_FechaModificacion]
      ,T1.[user_Estado]
  FROM [acce].[tbUsuarios] T1 INNER JOIN [acce].[tbRoles] T2
  ON T1.role_Id = T2.role_Id INNER JOIN [rest].[tbEmpleados] T3
  ON T3.empe_Id = T1.empe_Id INNER JOIN [gral].[tbCargos] T4
  ON t4.carg_Id = T3.carg_Id  INNER JOIN acce.tbUsuarios TC
  ON T1.user_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.user_UsuModificacion = TM.[user_Id]

GO
--Roles
CREATE OR ALTER VIEW VW_tbRoles
AS
SELECT T1.[role_Id]
      ,[role_Nombre]
      ,[role_UsuCreacion]
	  ,TC.user_NombreUsuario AS user_NombreUsuarioCreacion
      ,[role_FechaCreacion]
      ,[role_UsuModificacion]
	  ,TM.user_NombreUsuario AS user_NombreUsuarioModificacion
      ,[role_FechaModificacion]
      ,[role_Estado]
  FROM [acce].[tbRoles] T1  INNER JOIN acce.tbUsuarios TC
  ON T1.role_UsuCreacion = TC.[user_Id] LEFT JOIN acce.tbUsuarios TM
  ON T1.role_UsuModificacion = TM.[user_Id]
GO


