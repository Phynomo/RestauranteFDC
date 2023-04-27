CREATE DATABASE dbRestaurante
GO
USE dbRestaurante
GO
CREATE SCHEMA gral;
GO
CREATE SCHEMA rest;
GO
CREATE SCHEMA acce;
GO


--------------------CREACION DE TABLAS-------------------
--tbRoles
CREATE TABLE acce.tbRoles(
	role_Id					INT IDENTITY,
	role_Nombre				NVARCHAR(100) UNIQUE NOT NULL,
	role_UsuCreacion		INT NOT NULL,
	role_FechaCreacion		DATETIME NOT NULL CONSTRAINT DF_role_FechaCreacion DEFAULT(GETDATE()),
	role_UsuModificacion	INT,
	role_FechaModificacion	DATETIME,
	role_Estado				BIT NOT NULL CONSTRAINT DF_role_Estado DEFAULT(1)
	CONSTRAINT PK_acce_tbRoles_role_Id PRIMARY KEY(role_Id)
);
GO
--tbPantallas
CREATE TABLE acce.tbPantallas(
	pant_Id					INT IDENTITY,
	pant_Nombre				NVARCHAR(100) NOT NULL,
	pant_Url				NVARCHAR(300) NOT NULL,
	pant_Menu				NVARCHAR(300) NOT NULL,
	pant_HtmlId				NVARCHAR(80) NOT NULL,
	pant_UsuCreacion		INT NOT NULL,
	pant_FechaCreacion		DATETIME NOT NULL CONSTRAINT DF_pant_FechaCreacion DEFAULT(GETDATE()),
	pant_UsuModificacion	INT,
	pant_FechaModificacion	DATETIME,
	pant_Estado				BIT NOT NULL CONSTRAINT DF_pant_Estado DEFAULT(1)
	CONSTRAINT PK_acce_tbPantallas_pant_Id PRIMARY KEY(pant_Id)
);
GO
--tbPantallasPorRoles
CREATE TABLE acce.tbPantallasPorRoles(
	prol_Id						INT IDENTITY,
	role_Id						INT NOT NULL,
	pant_Id						INT NOT NULL,
	prol_UsuCreacion			INT NOT NULL,
	prol_FechaCreacion			DATETIME NOT NULL CONSTRAINT DF_pantrole_FechaCreacion DEFAULT(GETDATE()),
	prol_UsuModificacion		INT,
	prol_FechaModificacion		DATETIME,
	prol_Estado					BIT NOT NULL CONSTRAINT DF_pantrole_Estado DEFAULT(1)
	CONSTRAINT FK_acce_tbPantallasPorRoles_acce_tbRoles_role_Id FOREIGN KEY(role_Id) REFERENCES acce.tbRoles(role_Id),
	CONSTRAINT FK_acce_tbPantallasPorRoles_acce_tbPantallas_pant_Id FOREIGN KEY(pant_Id)	REFERENCES acce.tbPantallas(pant_Id),
	CONSTRAINT PK_acce_tbPantallasPorRoles_pantrole_Id PRIMARY KEY(prol_Id)
);
GO
--tbUsuarios
CREATE TABLE acce.tbUsuarios(
	[user_Id] 				INT IDENTITY(1,1),
	user_NombreUsuario		NVARCHAR(100) NOT NULL,
	user_Contrasena			NVARCHAR(MAX) NOT NULL,
	user_EsAdmin			BIT,
	role_Id					INT,
	empe_Id					INT,
	clie_Id					INT,
	user_UsuCreacion		INT NOT NULL,
	user_FechaCreacion		DATETIME NOT NULL CONSTRAINT DF_user_FechaCreacion DEFAULT(GETDATE()),
	user_UsuModificacion	INT,
	user_FechaModificacion	DATETIME,
	user_Estado				BIT NOT NULL CONSTRAINT DF_user_Estado DEFAULT(1)
	CONSTRAINT PK_acce_tbUsuarios_user_Id  PRIMARY KEY([user_Id]),
);

GO
CREATE OR ALTER PROCEDURE acce.UDP_InsertUsuario
	@user_NombreUsuario NVARCHAR(100),	
    @user_Contrasena NVARCHAR(200),
	@user_EsAdmin BIT,					
    @role_Id INT, 
	@empe_Id INT, 
	@clie_Id INT											
AS
BEGIN
	DECLARE @password NVARCHAR(MAX)=(SELECT HASHBYTES('Sha2_512', @user_Contrasena));

	INSERT acce.tbUsuarios(user_NombreUsuario, user_Contrasena, user_EsAdmin, role_Id, empe_Id, clie_id,  user_UsuCreacion)
	VALUES(@user_NombreUsuario, @password, @user_EsAdmin, @role_Id, @empe_Id,@clie_Id, 1);
END;


GO
EXEC acce.UDP_InsertUsuario 'Admin', '123', 1, NULL, 1, null;
GO
ALTER TABLE acce.tbRoles
ADD CONSTRAINT FK_acce_tbRoles_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(role_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_acce_tbRoles_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(role_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id]);

GO
INSERT INTO acce.tbRoles(role_Nombre, role_UsuCreacion)
VALUES ('Admin', 1)

GO
ALTER TABLE [acce].[tbUsuarios]
ADD CONSTRAINT FK_acce_tbUsuarios_acce_tbUsuarios_user_UsuCreacion_user_Id  FOREIGN KEY(user_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_acce_tbUsuarios_acce_tbUsuarios_user_UsuModificacion_user_Id  FOREIGN KEY(user_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_acce_tbUsuarios_acce_tbRoles_role_Id FOREIGN KEY(role_Id) REFERENCES acce.tbRoles(role_Id)

GO 
ALTER TABLE [acce].[tbPantallasPorRoles]
ADD CONSTRAINT FK_acce_tbPantallasPorRoles_acce_tbUsuarios_pantrole_UsuCreacion_user_Id FOREIGN KEY([prol_UsuCreacion]) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_acce_tbPantallasPorRoles_acce_tbUsuarios_pantrole_UsuModificacion_user_Id FOREIGN KEY([prol_UsuModificacion]) REFERENCES acce.tbUsuarios([user_Id])

GO
--tbDepartamentos
CREATE TABLE [gral].[tbDepartamentos](
    depa_Id                     INT IDENTITY(1,1),
	depa_Nombre 				NVARCHAR(100) NOT NULL,
	depa_Codigo  				CHAR(2) NOT NULL,
	depa_UsuCreacion			INT NOT NULL,
	depa_FechaCreacion			DATETIME NOT NULL CONSTRAINT DF_depa_FechaCreacion DEFAULT(GETDATE()),
	depa_UsuModificacion		INT,
	depa_FechaModificacion		DATETIME,
	depa_Estado					BIT NOT NULL CONSTRAINT DF_depa_Estado DEFAULT(1)
	CONSTRAINT PK_gral_tbDepartamentos_depa_Id 									PRIMARY KEY(depa_Id),
	CONSTRAINT FK_gral_tbDepartamentos_acce_tbUsuarios_depa_UsuCreacion_user_Id  		FOREIGN KEY(depa_UsuCreacion) 		REFERENCES acce.tbUsuarios(user_Id),
	CONSTRAINT FK_gral_tbDepartamentos_acce_tbUsuarios_depa_UsuModificacion_user_Id  	FOREIGN KEY(depa_UsuModificacion) 	REFERENCES acce.tbUsuarios(user_Id)
);
GO
--tbMunicipios
CREATE TABLE gral.tbMunicipios(
	muni_Id                 INT IDENTITY(1,1),
    muni_Nombre				NVARCHAR(80) NOT NULL,
	muni_Codigo				CHAR(4)	NOT NULL,
	depa_Id					INT	NOT NULL,
	muni_UsuCreacion		INT	NOT NULL,
	muni_FechaCreacion		DATETIME NOT NULL CONSTRAINT DF_muni_FechaCreacion DEFAULT(GETDATE()),
	muni_UsuModificacion	INT,
	muni_FechaModificacion	DATETIME,
	muni_Estado				BIT	NOT NULL CONSTRAINT DF_muni_Estado DEFAULT(1)
	CONSTRAINT PK_gral_tbMunicipios_muni_Id 										PRIMARY KEY(muni_Id),
	CONSTRAINT FK_gral_tbMunicipios_gral_tbDepartamentos_depa_Id 					FOREIGN KEY (depa_Id) 						REFERENCES gral.tbDepartamentos(depa_Id),
	CONSTRAINT FK_gral_tbMunicipios_acce_tbUsuarios_muni_UsuCreacion_user_Id  		FOREIGN KEY(muni_UsuCreacion) 				REFERENCES acce.tbUsuarios(user_Id),
	CONSTRAINT FK_gral_tbMunicipios_acce_tbUsuarios_muni_UsuModificacion_user_Id  	FOREIGN KEY(muni_UsuModificacion) 			REFERENCES acce.tbUsuarios(user_Id)
);
GO
--tbEstadosCiviles
CREATE TABLE gral.tbEstadosCiviles(
eciv_Id                        INT IdENTITY(1,1),
eciv_Descripcion            VARCHAR(100),
eciv_UsuCreacion            INT NOT NULL,
eciv_FechaCreacion            DATETIME NOT NULL CONSTRAINT DF_gral_TbEstadosCiviles_eciv_FechaCreacion    DEFAULT(GETDATE()),
eciv_UsuModificacion        INT,
eciv_FechaModificacion        DATETIME,
eciv_Estado                    BIT NOT NULL CONSTRAINT DF_gral_TbEstadosCiviles_eciv_Estado    DEFAULT(1)
CONSTRAINT     PK_gral_tbEstadosCiviles_ectv_Id PRIMARY KEY(eciv_Id),
CONSTRAINT    FK_gral_tbEstadosCiviles_UsuCreacion_usua_Id        FOREIGN KEY(eciv_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
CONSTRAINT    FK_gral_tbEstadosCiviles_UsuModificacion_usua_Id    FOREIGN KEY(eciv_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbMetodosPago
CREATE TABLE gral.tbMetodosPago(
metp_Id                        INT IDENTITY(1,1),
metp_Descripcion            VARCHAR(100),
metp_UsuCreacion            INT NOT NULL,
metp_FechaCreacion            DATETIME NOT NULL CONSTRAINT DF_gral_TbMetodosPago_metp_FechaCreacion    DEFAULT(GETDATE()),
metp_UsuModificacion        INT,
metp_FechaModificacion        DATETIME,
metp_Estado                    BIT NOT NULL CONSTRAINT DF_gral_tbMetodosPago_eciv_Estado    DEFAULT(1)
CONSTRAINT    PK_gral_tbMetodosPago_metp_Id PRIMARY KEY(metp_Id),
CONSTRAINT    FK_gral_tbMetodosPago_UsuCreacion_usua_Id        FOREIGN KEY(metp_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
CONSTRAINT    FK_gral_tbMetodosPago_UsuModificacion_usua_Id    FOREIGN KEY(metp_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbCargos
CREATE TABLE gral.tbCargos(
carg_Id INT IDENTITY(1,1),
carg_Descripcion         NVARCHAR(100) NOT NULL,
carg_UsuCreacion         INT NOT NULL,
carg_FechaCreacion         DATETIME CONSTRAINT DF_lice_tbCargos_carg_FechaCreacion DEFAULT(GETDATE()),
carg_UsuModificacion     INT ,
carg_FechaModificacion     DATETIME,
carg_Estado             BIT CONSTRAINT DF_lice_tbCargos_carg_Estado DEFAULT(1)
CONSTRAINT PK_gral_tbcargos_carg_Id									 PRIMARY KEY(carg_Id),
CONSTRAINT PK_gral_tbCargos_acce_tbUsuarios_carg_UsuCreacion         FOREIGN KEY(carg_UsuCreacion) REFERENCES acce.tbUsuarios([User_Id]),
CONSTRAINT PK_gral_tbCargos_acce_tbUsuarios_carg_UsuModificacion     FOREIGN KEY(carg_UsuModificacion) REFERENCES acce.tbUsuarios([User_Id])
);
GO
--tbCategorias
CREATE TABLE gral.tbCategorias(
cate_Id					 INT IDENTITY(1,1),
cate_Descripcion         NVARCHAR(100) NOT NULL,
cate_UsuCreacion         INT NOT NULL,
cate_FechaCreacion		 DATETIME CONSTRAINT DF_lice_tbCategorias_cate_FechaCreacion DEFAULT(GETDATE()),
cate_UsuModificacion     INT ,
cate_FechaModificacion   DATETIME,
cate_Estado				 BIT CONSTRAINT DF_lice_tbCartegorias_cate_Estado DEFAULT(1)
CONSTRAINT PK_gral_tbCategorias_cate_Id									 PRIMARY KEY(cate_Id),
CONSTRAINT PK_gral_tbCategorias_acce_tbUsuarios_cate_UsuCreacion         FOREIGN KEY(cate_UsuCreacion) REFERENCES acce.tbUsuarios([User_Id]),
CONSTRAINT PK_gral_tbCategorias_acce_tbUsuarios_cate_UsuModificacion     FOREIGN KEY(cate_UsuModificacion) REFERENCES acce.tbUsuarios([User_Id])
);
GO
--tbSucursales
CREATE TABLE rest.tbSucursales(
sucu_Id							INT IDENTITY(1,1),
sucu_Nombre						NVARCHAR(200)     NOT NULL,
muni_Id							INT         NOT NULL,
sucu_Direccion					NVARCHAR(200)    NOT NULL,
sucu_UsuCreacion				INT             NOT NULL,
sucu_FechaCreacion				DATETIME         CONSTRAINT DF_lice_tbSucursales_sucu_FechaCreacion    DEFAULT(GETDATE()),
sucu_UsuModificacion			INT,
sucu_FechaModificacion			DATETIME,
sucu_Estado						BIT             CONSTRAINT DF_lice_tbSucursales_sucu_Estado DEFAULT (1)
CONSTRAINT PK_lice_tbSucursales_sucu_Id                                    PRIMARY KEY(sucu_Id),
CONSTRAINT FK_lice_tbSucursales_gral_tbMunicipios_muni_Id                FOREIGN KEY(muni_Id)                 REFERENCES gral.tbMunicipios(muni_Id),
CONSTRAINT FK_lice_tbSucursales_acce_tbUsuarios_sucu_UsuCreacion         FOREIGN KEY(sucu_UsuCreacion)         REFERENCES acce.tbUsuarios([User_Id]),
CONSTRAINT FK_lice_tbSucursales_acce_tbUsuarios_sucu_UsuModificacion     FOREIGN KEY(sucu_UsuModificacion)     REFERENCES acce.tbUsuarios([User_Id])
);
GO
--tbEmpleado
CREATE TABLE rest.tbEmpleados(
	empe_Id						INT IDENTITY(1,1),
	empe_Nombres				NVARCHAR(200)	NOT NULL,
	empe_Apellidos				NVARCHAR(200)	NOT NULL,
	empe_Identidad				VARCHAR(13)		NOT NULL,
	empe_FechaNacimiento		DATE			NOT NULL,
	empe_Sexo					CHAR(1)			NOT NULL,
	eciv_Id					    INT				NOT NULL,
	muni_Id						INT	    		NOT NULL,
	empe_DireccionExacta		NVARCHAR(250)	NOT NULL,
	empe_Telefono				NVARCHAR(20)	NOT NULL,
	empe_CorreoElectronico		NVARCHAR(200)	NULL,
	sucu_Id						INT				NOT NULL,
	carg_Id						int				NOT NULL,
	empe_UsuCreacion			INT				NOT NULL,
	empe_FechaCreacion			DATETIME		NOT NULL CONSTRAINT DF_empe_FechaCreacion DEFAULT(GETDATE()),
	empe_UsuModificacion		INT,
	empe_FechaModificacion		DATETIME,
	empe_Estado					BIT NOT NULL CONSTRAINT DF_empe_Estado DEFAULT(1),
	
	CONSTRAINT PK_rest_tbEmpleados_empe_Id 										PRIMARY KEY(empe_Id),
	CONSTRAINT CK_rest_tbEmpleados_empe_Sexo									CHECK(empe_sexo IN ('F', 'M')),
	CONSTRAINT FK_rest_tbEmpleados_gral_tbEstadosCiviles_eciv_Id        		FOREIGN KEY(eciv_Id)					    REFERENCES gral.tbEstadosCiviles(eciv_Id),			
	CONSTRAINT FK_rest_tbEmpleados_gral_tbMunicipios_muni_Id					FOREIGN KEY(muni_Id)						REFERENCES gral.tbMunicipios(muni_Id),
	CONSTRAINT FK_rest_tbEmpleados_lice_tbCargos_carg_Id						FOREIGN KEY(carg_Id)						REFERENCES gral.tbCargos(carg_Id),
	CONSTRAINT FK_rest_tbEmpleados_acce_tbUsuarios_UserCreate					FOREIGN KEY(empe_UsuCreacion)				REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbEmpleados_acce_tbUsuarios_UserUpdate					FOREIGN KEY(empe_UsuModificacion)			REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbEmpleados_lice_tbSucursales_sucu_Id					FOREIGN KEY(sucu_Id)						REFERENCES rest.tbSucursales(sucu_Id)		
);
GO


--TA MALA ESA TABLA DE CLIENTES BRO, REVISALA BRO POR FAVOR!!!
--SALUDOS TE ENVIO XD, ESA DE ESTADO CIVIL eciv QUE RARO ESE NOMBRE 
--QUE ONDA SALUDOS!!
--CREO QUE NADIE TE LO HA PREGUNTA BRO, PERO..
--ESTAS BIEN BRO?
--COMO TE ENCUENTRAS HOY BRO?
--ESTAS TRISTE O FELIZ?
--POR QUÈ ESTAS TRISTE?
--POR QUE NO ESTAR FELIZ?
--LA VIDA ES BELLA
--DISFRUTA LA VIDA
--COME BIEN
--BEBE AWITA
--APLICA DE VLADIMIR Y CHEQUE PA LA CASA
--ADIOS MUNDO CRUEL
--CUIDATE
--NOS VEMOS
--ADIOS
--CHEQUE
--GOOD BYE
--快 开 学 了， 前 天 我 和 妈 妈 去 超 市 买 文 具。
--还 买 了 几 本 练 习 本。快 离 开 时，我 看 见 一 个 红 色 的 书 
--妈 妈，给 我 买 一 个，好 吗？” 妈 妈 说：
--我 看 到 书 包 上 有 一 行 小 小 的 英 文 字
--商 店 里 许 多 衣 服，鞋 子，玩 真 和 日 用 品 上
--

--Madrecita mía, cuando yo muera,
--sepúltame junto al fogón
--y cuando vayas a hacer las tortillas
--allí por mí llora.

--Y si alguien te preguntara:
---Señora, ¿por qué lloras?
--dile que está verde la leña,
--hace llorar con el humo.

--Libro verde
--árbol poeta
--¡ cuanta poesía en tus hojas !

--Quienquiera
--que se pose en tus ramas
--se vuelve cantor.

--tbClientes
CREATE TABLE rest.tbClientes(
	clie_Id						INT IDENTITY(1,1),
	clie_Nombres				NVARCHAR(200)	NOT NULL,
	clie_Apellidos				NVARCHAR(200)	NOT NULL,
	clie_Identidad				VARCHAR(13)		NOT NULL,
	clie_RTN					VARCHAR(14)		NOT NULL,
	clie_Sexo					CHAR(1)			NOT NULL,
	clie_Telefono				NVARCHAR(20)	NOT NULL,
	clie_UsuCreacion			INT				NOT NULL,
	clie_FechaCreacion			DATETIME		NOT NULL CONSTRAINT DF_clie_FechaCreacion DEFAULT(GETDATE()),
	clie_UsuModificacion		INT,
	clie_FechaModificacion		DATETIME,
	clie_Estado					BIT NOT NULL CONSTRAINT DF_clie_Estado DEFAULT(1),
	
	CONSTRAINT PK_rest_tbClientes_clie_Id 										PRIMARY KEY(clie_Id),
	CONSTRAINT CK_rest_tbClientes_clie_Sexo										CHECK(clie_Sexo IN ('F', 'M')),				
	CONSTRAINT FK_rest_tbClientes_acce_tbUsuarios_UserCreate					FOREIGN KEY(clie_UsuCreacion)				REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbClientes_acce_tbUsuarios_UserUpdate					FOREIGN KEY(clie_UsuModificacion)			REFERENCES acce.tbUsuarios([user_Id])		
);
GO
--tbProveedores
CREATE TABLE rest.tbProveedores(
    prov_Id                              INT IDENTITY(1,1),
    prov_NombreEmpresa                   NVARCHAR (150) NOT NULL,
    prov_NombreContacto                  NVARCHAR (150) NOT NULL,
    prov_Telefono                        NVARCHAR (20) NOT NULL,
    muni_Id                              INT NOT NULL,
    prov_DireccionExacta                 NVARCHAR (500) NOT NULL,
    prov_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    prov_UsuCreacion		         INT NOT null,
    prov_FechaModificacion	             DATETIME,
    prov_UsuModificacion             INT,
    prov_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbProveedores_prov_Id PRIMARY KEY(prov_Id),
    CONSTRAINT FK_rest_tbProveedores_tbMunicipio_muni_id FOREIGN key(muni_id) REFERENCES gral.tbMunicipios(muni_id),
	CONSTRAINT FK_rest_tbproveedores_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(prov_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbproveedores_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(prov_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbIngredientes
CREATE TABLE rest.tbIngredientes(
    ingr_Id                              INT IDENTITY(1,1),
    ingr_Nombre			                 NVARCHAR (200) NOT NULL,
    ingr_PrecioX100gr		             DECIMAL(18,2) NOT NULL,
	--ingr_StockEnGramos                   DECIMAL(18,2) NOT NULL,
    prov_Id                              INT NOT NULL,
    ingr_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    ingr_UsuCreacion		         INT NOT null,
    ingr_FechaModificacion	             DATETIME,
    ingr_UsuModificacion             INT,
    ingr_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbIngredientes_ingr_Id PRIMARY KEY(ingr_Id),
    CONSTRAINT FK_rest_tbIngredientes_tbProveedores_proc_Id FOREIGN key(prov_Id) REFERENCES rest.tbProveedores(prov_Id),
	CONSTRAINT FK_rest_tbIngredientes_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(ingr_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbIngredientes_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(ingr_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO

--tbIngredientesXSucursal
CREATE TABLE rest.tbIngredientesXSucursal(
    ingrsucu_Id								 INT IDENTITY(1,1),
    ingr_Id									 INT NOT NULL,
    sucu_Id									 INT NOT NULL,
	ingrsucu_StockEnGramos                   DECIMAL(18,2) NOT NULL,
    ingrsucu_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    ingrsucu_UsuCreacion		         INT NOT null,
    ingrsucu_FechaModificacion	             DATETIME,
    ingrsucu_UsuModificacion             INT,
    ingrsucu_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbIngredientesXSucursal_ingr_Id PRIMARY KEY(ingrsucu_Id),
    CONSTRAINT FK_rest_tbIngredientesXSucursal_tbSucursales_sucu_Id							FOREIGN key(sucu_Id) REFERENCES rest.tbSucursales(sucu_Id),
    CONSTRAINT FK_rest_tbIngredientesXSucursal_tbIngredientes_ingr_Id						FOREIGN key(ingr_Id) REFERENCES rest.tbIngredientes(ingr_Id),
	CONSTRAINT FK_rest_tbIngredientesXSucursal_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(ingrsucu_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbIngredientesXSucursal_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(ingrsucu_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO


--tbPlatillos
CREATE TABLE rest.tbPlatillos(
    plat_Id                              INT IDENTITY(1,1),
    plat_Nombre			                 NVARCHAR (200) NOT NULL,
    plat_Precio				             DECIMAL(18,2) NOT NULL,
	cate_Id								 INT NOT NULL,
	plat_Imagen							 NVARCHAR(MAX) NOT NULL,
    plat_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    plat_UsuCreacion		         INT NOT null,
    plat_FechaModificacion	             DATETIME,
    plat_UsuModificacion             INT,
    plat_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbPlatillos_plat_Id PRIMARY KEY(plat_Id),
	CONSTRAINT FK_rest_tbPlatillos_tbCategorias_cate_Id FOREIGN key(cate_Id) REFERENCES gral.tbCategorias(cate_Id),
	CONSTRAINT FK_rest_tbPlatillos_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(plat_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbPlatillos_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(plat_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO


--tbIngredientesPorPlatillo
CREATE TABLE rest.tbIngredientesXPlatillos(
    ingrplat_Id                              INT IDENTITY(1,1),
    plat_Id									 INT NOT NULL,
	ingr_Id									 INT NOT NULL,
    ingrplat_Gramos                          INT NOT NULL,
    ingrplat_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    ingrplat_UsuCreacion		         INT NOT null,
    ingrplat_FechaModificacion	             DATETIME,
    ingrplat_UsuModificacion             INT,
    ingrplat_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbIngredientesXPlatillos_plat_Id PRIMARY KEY(ingrplat_Id),
	CONSTRAINT FK_rest_tbIngredientesXPlatillos_tbPratillos_plat_Id FOREIGN key(plat_Id) REFERENCES rest.tbPlatillos(plat_Id),
	CONSTRAINT FK_rest_tbIngredientesXPlatillos_tbIngredientes_ingr_Id FOREIGN key(ingr_Id) REFERENCES rest.tbIngredientes(ingr_Id),
	CONSTRAINT FK_rest_tbIngredientesXPlatillos_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(ingrplat_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbIngredientesXPlatillos_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(ingrplat_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbReservaciones
CREATE TABLE rest.tbReservaciones(
    rese_Id                              INT IDENTITY(1,1),
    clie_Id								 INT NOT NULL,
	sucu_Id								 INT NOT NULL,
	rese_Personas						 INT NOT NULL,
    rese_FechaHora                       DATETIME NOT NULL,
    rese_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    rese_UsuCreacion		         INT NOT null,
    rese_FechaModificacion	             DATETIME,
    rese_UsuModificacion             INT,
    rese_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbReservaciones_rese_Id PRIMARY KEY(rese_Id),
	CONSTRAINT FK_rest_tbReservaciones_tbClientes_clie_Id FOREIGN key(clie_Id) REFERENCES rest.tbClientes(clie_Id),
	CONSTRAINT FK_rest_tbReservaciones_tbSucursales_sucu_Id FOREIGN key(sucu_Id) REFERENCES rest.tbSucursales(sucu_Id),
	CONSTRAINT FK_rest_tbReservaciones_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(rese_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbReservaciones_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(rese_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbFecturas
CREATE TABLE rest.tbFacturas(
    fact_Id                             INT IDENTITY(1,1),
    clie_Id                             INT not null,
    empe_Id								INT not null,
    metp_Id							    INT not null,
	fact_Cerrada						BIT NOT NULL,
    fact_Fecha						    DATETIME NOT NULL DEFAULT GETDATE(),
    fact_FechaCreacion					DATETIME NOT NULL DEFAULT GETDATE(),
    fact_UsuCreacion				INT not null,
    fact_FechaModificacion				DATETIME,
    fact_UsuModificacion			INT,
    fact_Estado							BIT NOT NULL DEFAULT 1,

    CONSTRAINT PK_rest_tbFacturas_fact_Id PRIMARY KEY(fact_Id),
    CONSTRAINT FK_rest_tbFacturas_tbClientes_clie_id FOREIGN KEY(clie_Id) REFERENCES rest.tbClientes(clie_Id),  
    CONSTRAINT FK_rest_tbFacturas_tbMetodoPago_metp_id FOREIGN KEY(metp_Id) REFERENCES gral.tbMetodosPago(metp_Id),
    CONSTRAINT FK_rest_tbFacturas_rest_tbEmpleados_empl_Id FOREIGN KEY(empe_Id) REFERENCES rest.tbEmpleados(empe_Id),
    CONSTRAINT FK_rest_tbFacturas_acce_tbUsuarios_ped_UsuCreacion_usur_Id FOREIGN KEY(fact_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
    CONSTRAINT FK_rest_tbFacturas_acce_tbUsuarios_ped_UsuModificacion_usur_Id FOREIGN KEY(fact_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])

);
--tbFacturaDetalles
CREATE TABLE rest.tbFacturasDetalles(
fade_Id                             INT IDENTITY(1,1),
fact_Id                             INT not null,
plat_Id                             INT,
fade_Cantidad						INT NOT NULL,
fade_Precio							DECIMAL (18,2) NOT NULL,
fade_FechaCreacion					DATETIME NOT NULL DEFAULT GETDATE(),
fade_UsuCreacion				INT not null,
fade_FechaModificacion				DATETIME,
fade_UsuModificacion			INT,
fade_Estado							BIT NOT NULL DEFAULT 1,
CONSTRAINT PK_rest_tbFacturasDetalles_fade_Id PRIMARY KEY(fade_Id),
CONSTRAINT FK_rest_tbFacturasDetalles_tbFacturas_fact_id FOREIGN KEY(fact_Id) REFERENCES rest.tbFacturas(fact_Id),
CONSTRAINT FK_rest_tbFacturasDetalles_tbProductos_prod_id FOREIGN KEY(plat_Id) REFERENCES rest.tbPlatillos(plat_Id),
CONSTRAINT FK_rest_tbFacturasDetalles_acce_tbUsuarios_fade_UsuCreacion_user_Id FOREIGN KEY(fade_UsuCreacion) REFERENCES acce.tbUsuarios([user_Id]),
CONSTRAINT FK_rest_tbFacturasDetalles_acce_tbUsuarios_fade_UsuModificacion_user_Id FOREIGN KEY(fade_UsuModificacion) REFERENCES acce.tbUsuarios([user_Id])
);
GO
--tbPaltillosHistorial
--CREATE TABLE rest.tbPlatillosHistorial(
--    plah_Id                              INT IDENTITY(1,1),
--    plat_Id                              INT NOT NULL ,
--    plat_Nombre			                 NVARCHAR (200) NOT NULL,
--    plat_Precio				             DECIMAL(18,2) NOT NULL,
--	cate_Id								 INT NOT NULL,
--    plat_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
--    CONSTRAINT PK_rest_tbPlatillosHistorial_plah_Id PRIMARY KEY(plah_Id),
--);
--GO
--tbIngredientesHistorial
--CREATE TABLE rest.tbIngredientesHistorial(
--    ingh_Id                              INT,
--    ingr_Id                              INT,
--    ingr_Nombre			                 NVARCHAR (200) NOT NULL,
--    ingr_PrecioX100gr		             DECIMAL(18,2) NOT NULL,
--	--ingr_Gramos                          INT,
--    prov_Id                              INT NOT NULL,
--    ingr_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
--    CONSTRAINT PK_rest_tbIngredientesHistorial_ingh_Id PRIMARY KEY(ingh_Id),
--);
--GO

--Cosas necesarias
-- 1) al insertar un ingrediente en la tabla de IngredientesPorPlatillo se debe actualizar el precio de los platillos
-- 2) al actualizar el precio de un ingrediente se debe de actualizar el precio de los platillos que lo utilizan y crear un registro en la tabla de historial de ingredientes
-- 3)  

--triggers
--GO
GO
--CREATE OR ALTER TRIGGER rest.trg_HistorialPlatillos
--   ON  rest.tbPlatillos
--   AFTER UPDATE
--AS 
--BEGIN
	

--INSERT INTO [rest].[tbPlatillosHistorial]
--           ([plat_Id]
--           ,[plat_Nombre]
--           ,[plat_Precio]
--           ,[cate_Id]
--           ,[plat_FechaCreacion])
--     SELECT T1.plat_Id,T1.plat_Nombre,T1.plat_Precio,T1.cate_Id,GETDATE() FROM deleted T1
--END
--GO

CREATE TABLE rest.tbPlatillosHistorial(
    plat_Id                              INT,
    plat_Nombre			                 NVARCHAR (200) NOT NULL,
    plat_Precio				             DECIMAL(18,2) NOT NULL,
	cate_Id								 INT NOT NULL,
    plat_FechaCreacion		             DATETIME ,
    plat_UsuCreacion		         INT NOT null,
    plat_FechaModificacion	             DATETIME,
    plat_UsuModificacion             INT,
    plat_Estado                          BIT
);
GO
CREATE TABLE rest.tbIngredientesHistorial(
    ingr_Id                              INT ,
    ingr_Nombre			                 NVARCHAR (200) NOT NULL,
    ingr_PrecioX100gr		             DECIMAL(18,2) NOT NULL,
    prov_Id                              INT NOT NULL,
    ingr_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    ingr_UsuCreacion		         INT NOT null,
    ingr_FechaModificacion	             DATETIME,
    ingr_UsuModificacion             INT,
    ingr_Estado                          BIT NOT NULL DEFAULT 1,
);
GO

--Pendiente de probar.
--CREATE OR ALTER TRIGGER rest.trg_HistorialPlatillos
--   ON  rest.tbPlatillos
--   AFTER UPDATE
--AS 
--BEGIN
	
--     INSERT INTO [rest].tbPlatillosHistorial
--     SELECT*FROM deleted T1
--END
--GO
--me dio error 

-- DROP TABLE [rest].[tbPlatillosHistorial] 
