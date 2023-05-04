CREATE OR ALTER PROCEDURE acce.UDP_tbRoles_Update
  @role_Id				INT,
  @role_Nombre			nvarchar(100),
  @role_UsuModificacion INT
AS
BEGIN
    BEGIN TRY
        IF EXISTS (SELECT * FROM acce.tbRoles WHERE (role_Nombre = @role_Nombre AND role_Id != @role_Id))
        BEGIN

            SELECT -2 as Proceso

        END
        ELSE
        BEGIN

			UPDATE acce.tbRoles
				SET  role_Estado = 1
					,role_Nombre = @role_Nombre
					,role_UsuModificacion = @role_UsuModificacion
					,role_FechaModificacion = GETDATE()
				WHERE role_Id = @role_Id


            SELECT 1 as Proceso
        END

    END TRY
    BEGIN CATCH
        SELECT 0 as Proceso
    END CATCH
END
GO