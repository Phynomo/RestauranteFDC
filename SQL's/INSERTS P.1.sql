INSERT INTO [gral].[tbEstadosCiviles]([eciv_Descripcion],[eciv_UsuCreacion])
VALUES	('Soltero(a)', '1' ),
		('Casado(a)', '1' ),
		('Divorciado(a)', '1' ),
		('Viudo(a)', '1' ),
		('Union Libre', '1' )
GO


INSERT INTO gral.tbDepartamentos(depa_Codigo,depa_Nombre,depa_UsuCreacion)
VALUES	('01','Atl�ntida', '1' ),
		('02','Col�n', '1' ),
		('03','Comayagua', '1' ),
		('04','Cop�n', '1' ),
		('05','Cort�s', '1' ),
		('06','Choluteca', '1' ),
		('07','El Para�so', '1' ),
		('08','Francisco Moraz�n', '1' ),
		('09','Gracias a Dios', '1' ),
		('10','Intibuc�', '1' ),
		('11','Islas de la Bah�a', '1' ),
		('12','La Paz', '1' ),
		('13','Lempira', '1' ),
		('14','Ocotepeque', '1' ),
		('15','Olancho', '1' ),
		('16','Santa B�rbara', '1' ),
		('17','Valle', '1' ),
		('18','Yoro', '1' );
GO


INSERT INTO gral.tbMunicipios([depa_Id],muni_Codigo,muni_Nombre,[muni_UsuCreacion])
VALUES	('1','0101','La Ceiba', '1' ),
		('1','0102','El Porvenir', '1' ),
		('1','0103','Tela', '1' ),
		('1','0104','Jutiapa', '1' ),
		('1','0105','La Masica', '1' ),
		('1','0106','San Francisco', '1' ),
		('1','0107','Arizona', '1' ),
		('1','0108','Esparta', '1' ),
	

		('2','0201','Trujillo', '1' ),
		('2','0202','Balfate', '1' ),
		('2','0203','Iriona', '1' ),
		('2','0204','Lim�n', '1' ),
		('2','0205','Sab�', '1' ),
		('2','0206','Santa Fe', '1' ),
		('2','0207','Santa Rosa de Agu�n', '1' ),
		('2','0208','Sonaguera', '1' ),
		('2','0209','Tocoa', '1' ),
		('2','0210','Bonito Oriental', '1' ),


		('3','0301','Comayagua', '1' ),
		('3','0302','Ajuterique', '1' ),
		('3','0303','El Rosario', '1' ),
		('3','0304','Esqu�as', '1' ),
		('3','0305','Humuya', '1' ),
		('3','0306','La Libertad', '1' ),
		('3','0307','Laman�', '1' ),
		('3','0308','La Trinidad', '1' ),
		('3','0309','Lejaman�', '1' ),
		('3','0310','Me�mbar', '1' ),
		('3','0311','Minas de Oro', '1' ),
		('3','0312','Ojos de Agua', '1' ),
		('3','0313','San Jer�nimo', '1' ),
		('3','0314','San Jos� de Comayagua', '1' ),
		('3','0315','San Jos� del Potrero', '1' ),
		('3','0316','San Luis', '1' ),
		('3','0317','San Sebasti�n', '1' ),
		('3','0318','Siguatepeque', '1' ),
		('3','0319','Villa de San Antonio', '1' ),
		('3','0320','Las Lajas', '1' ),
		('3','0321','Taulab�', '1' ),


		('4','0401','Santa Rosa de Cop�n', '1' ),
		('4','0402','Caba�as', '1' ),
		('4','0403','Concepci�n', '1' ),
		('4','0404','Cop�n Ruinas', '1' ),
		('4','0405','Corqu�n', '1' ),
		('4','0406','Cucuyagua', '1' ),
		('4','0407','Dolores', '1' ),
		('4','0408','Dulce Nombre', '1' ),
		('4','0409','El Para�so', '1' ),
		('4','0410','Florida', '1' ),
		('4','0411','La Jigua', '1' ),
		('4','0412','La Uni�n', '1' ),
		('4','0413','Nueva Arcadia', '1' ),
		('4','0414','San Agust�n', '1' ),
		('4','0415','San Antonio', '1' ),
		('4','0416','San Jer�nimo', '1' ),
		('4','0417','San Jos�', '1' ),
		('4','0418','San Juan de Opoa', '1' ),
		('4','0419','San Nicol�s', '1' ),
		('4','0420','San Pedro', '1' ),
		('4','0421','Santa Rita', '1' ),
		('4','0422','Trinidad de Cop�n', '1' ),
		('4','0423','Veracruz', '1' ),


		('5','0501','San Pedro Sula', '1' ),
		('5','0502','Choloma', '1' ),
		('5','0503','Omoa', '1' ),
		('5','0504','Pimienta', '1' ),
		('5','0505','Potrerillos', '1' ),
		('5','0506','Puerto Cort�s', '1' ),
		('5','0507','San Antonio de Cort�s', '1' ),
		('5','0508','San Francisco de Yojoa', '1' ),
		('5','0509','San Manuel', '1' ),
		('5','0510','Santa Cruz de Yojoa', '1' ),
		('5','0511','Villanueva', '1' ),
		('5','0512','La Lima', '1' ),


		('6','0601','Choluteca', '1' ),
		('6','0602','Apacilagua', '1' ),
		('6','0603','Concepci�n de Mar�a', '1' ),
		('6','0604','Duyure', '1' ),
		('6','0605','El Corpus', '1' ),
		('6','0606','El Triunfo', '1' ),
		('6','0607','Marcovia', '1' ),
		('6','0608','Morolica', '1' ),
		('6','0609','Namasig�e', '1' ),
		('6','0610','Orocuina', '1' ),
		('6','0611','Pespire', '1' ),
		('6','0612','San Antonio de Flores', '1' ),
		('6','0613','San Isidro', '1' ),
		('6','0614','San Jos�', '1' ),
		('6','0615','San Marcos de Col�n', '1' ),
		('6','0616','Santa Ana de Yusguare', '1' ),


		('7','0701','Yuscar�n', '1' ),
		('7','0702','Alauca', '1' ),
		('7','0703','Danl�', '1' ),
		('7','0704','El Para�so', '1' ),
		('7','0705','G�inope', '1' ),
		('7','0706','Jacaleapa', '1' ),
		('7','0707','Liure', '1' ),
		('7','0708','Morocel�', '1' ),
		('7','0709','Oropol�', '1' ),
		('7','0710','Potrerillos', '1' ),
		('7','0711','San Antonio de Flores', '1' ),
		('7','0712','San Lucas', '1' ),
		('7','0713','San Mat�as', '1' ),
		('7','0714','Soledad', '1' ),
		('7','0715','Teupasenti', '1' ),
		('7','0716','Texiguat', '1' ),
		('7','0717','Vado Ancho', '1' ),
		('7','0718','Yauyupe', '1' ),
		('7','0719','Trojes', '1' ),


		('8','0801','Distrito Central', '1' ),
		('8','0802','Alubar�n', '1' ),
		('8','0803','Cedros', '1' ),
		('8','0804','Curar�n', '1' ),
		('8','0805','El Porvenir', '1' ),
		('8','0806','Guaimaca', '1' ),
		('8','0807','La Libertad', '1' ),
		('8','0808','La Venta', '1' ),
		('8','0809','Lepaterique', '1' ),
		('8','0810','Maraita', '1' ),
		('8','0811','Marale', '1' ),
		('8','0812','Nueva Armenia', '1' ),
		('8','0813','Ojojona', '1' ),
		('8','0814','Orica', '1' ),
		('8','0815','Reitoca', '1' ),
		('8','0816','Sabanagrande', '1' ),
		('8','0817','San Antonio de Oriente', '1' ),
		('8','0818','San Buenaventura', '1' ),
		('8','0819','San Ignacio', '1' ),
		('8','0820','San Juan de Flores', '1' ),
		('8','0821','San Miguelito', '1' ),
		('8','0822','Santa Ana', '1' ),
		('8','0823','Santa Luc�a', '1' ),
		('8','0824','Talanga', '1' ),
		('8','0825','Tatumbla', '1' ),
		('8','0826','Valle de �ngeles', '1' ),
		('8','0827','Villa de San Francisco', '1' ),
		('8','0828','Vallecillo', '1' ),


		('9','0901','Puerto Lempira', '1' ),
		('9','0902','Brus Laguna', '1' ),
		('9','0903','Ahuas', '1' ),
		('9','0904','Juan Francisco Bulnes', '1' ),
		('9','0905','Ram�n Villeda Morales', '1' ),
		('9','0906','Wampusirpe', '1' ),


		('10','1001','La Esperanza', '1' ),
		('10','1002','Camasca', '1' ),
		('10','1003','Colomoncagua', '1' ),
		('10','1004','Concepci�n', '1' ),
		('10','1005','Dolores', '1' ),
		('10','1006','Intibuc�', '1' ),
		('10','1007','Jes�s de Otoro', '1' ),
		('10','1008','Magdalena', '1' ),
		('10','1009','Masaguara', '1' ),
		('10','1010','San Antonio', '1' ),
		('10','1011','San Isidro', '1' ),
		('10','1012','San Juan', '1' ),
		('10','1013','San Marcos de la Sierra', '1' ),
		('10','1014','San Miguel Guancapla', '1' ),
		('10','1015','Santa Luc�a', '1' ),
		('10','1016','Yamaranguila', '1' ),
		('10','1017','San Francisco de Opalaca', '1' ),


		('11','1101','Roat�n', '1' ),
		('11','1102','Guanaja', '1' ),
		('11','1103','Jos� Santos Guardiola', '1' ),
		('11','1104','Utila', '1' ),


		('12','1201','La Paz', '1' ),
		('12','1202','Aguanqueterique', '1' ),
		('12','1203','Caba�as', '1' ),
		('12','1204','Cane', '1' ),
		('12','1205','Chinacla', '1' ),
		('12','1206','Guajiquiro', '1' ),
		('12','1207','Lauterique', '1' ),
		('12','1208','Marcala', '1' ),
		('12','1209','Mercedes de Oriente', '1' ),
		('12','1210','Opatoro', '1' ),
		('12','1211','San Antonio del Norte', '1' ),
		('12','1212','San Jos�', '1' ),
		('12','1213','San Juan', '1' ),
		('12','1214','San Pedro de Tutule', '1' ),
		('12','1215','Santa Ana', '1' ),
		('12','1216','Santa Elena', '1' ),
		('12','1217','Santa Mar�a', '1' ),
		('12','1218','Santiago de Puringla', '1' ),
		('12','1219','Yarula', '1' ),


		('13','1301','Gracias', '1' ),
		('13','1302','Bel�n', '1' ),
		('13','1303','Candelaria', '1' ),
		('13','1304','Cololaca', '1' ),
		('13','1305','Erandique', '1' ),
		('13','1306','Gualcince', '1' ),
		('13','1307','Guarita', '1' ),
		('13','1308','La Campa', '1' ),
		('13','1309','La Iguala', '1' ),
		('13','1310','Las Flores', '1' ),
		('13','1311','La Uni�n', '1' ),
		('13','1312','La Virtud', '1' ),
		('13','1313','Lepaera', '1' ),
		('13','1314','Mapulaca', '1' ),
		('13','1315','Piraera', '1' ),
		('13','1316','San Andr�s', '1' ),
		('13','1317','San Francisco', '1' ),
		('13','1318','San Juan Guarita', '1' ),
		('13','1319','San Manuel Colohete', '1' ),
		('13','1320','San Rafael', '1' ),
		('13','1321','San Sebasti�n', '1' ),
		('13','1322','Santa Cruz', '1' ),
		('13','1323','Talgua', '1' ),
		('13','1324','Tambla', '1' ),
		('13','1325','Tomal�', '1' ),
		('13','1326','Valladolid', '1' ),
		('13','1327','Virginia', '1' ),
		('13','1328','San Marcos de Caiqu�n', '1' ),


		('14','1401','Ocotepeque', '1' ),
		('14','1402','Bel�n Gualcho', '1' ),
		('14','1403','Concepci�n', '1' ),
		('14','1404','Dolores Merend�n', '1' ),
		('14','1405','Fraternidad', '1' ),
		('14','1406','La Encarnaci�n', '1' ),
		('14','1407','La Labor', '1' ),
		('14','1408','Lucerna', '1' ),
		('14','1409','Mercedes', '1' ),
		('14','1410','San Fernando', '1' ),
		('14','1411','San Francisco del Valle', '1' ),
		('14','1412','San Jorge', '1' ),
		('14','1413','San Marcos', '1' ),
		('14','1414','Santa Fe', '1' ),
		('14','1415','Sensenti', '1' ),
		('14','1416','Sinuapa', '1' ),


		('15','1501','Juticalpa', '1' ),
		('15','1502','Campamento', '1' ),
		('15','1503','Catacamas', '1' ),
		('15','1504','Concordia', '1' ),
		('15','1505','Dulce Nombre de Culm�', '1' ),
		('15','1506','El Rosario', '1' ),
		('15','1507','Esquipulas del Norte', '1' ),
		('15','1508','Gualaco', '1' ),
		('15','1509','Guarizama', '1' ),
		('15','1510','Guata', '1' ),
		('15','1511','Guayape', '1' ),
		('15','1512','Jano', '1' ),
		('15','1513','La Uni�n', '1' ),
		('15','1514','Mangulile', '1' ),
		('15','1515','Manto', '1' ),
		('15','1516','Salam�', '1' ),
		('15','1517','San Esteban', '1' ),
		('15','1518','San Francisco de Becerra', '1' ),
		('15','1519','San Francisco de la Paz', '1' ),
		('15','1520','Santa Mar�a del Real', '1' ),
		('15','1521','Silca', '1' ),
		('15','1522','Yoc�n', '1' ),
		('15','1523','Patuca', '1' ),


		('16','1601','Santa B�rbara', '1' ),
		('16','1602','Arada', '1' ),
		('16','1603','Atima', '1' ),
		('16','1604','Azacualpa', '1' ),
		('16','1605','Ceguaca', '1' ),
		('16','1606','Concepci�n del Norte', '1' ),
		('16','1607','Concepci�n del Sur', '1' ),
		('16','1608','Chinda', '1' ),
		('16','1609','El N�spero', '1' ),
		('16','1610','Gualala', '1' ),
		('16','1611','Ilama', '1' ),
		('16','1612','Las Vegas', '1' ),
		('16','1613','Macuelizo', '1' ),
		('16','1614','Naranjito', '1' ),
		('16','1615','Nuevo Celilac', '1' ),
		('16','1616','Nueva Frontera', '1' ),
		('16','1617','Petoa', '1' ),
		('16','1618','Protecci�n', '1' ),
		('16','1619','Quimist�n', '1' ),
		('16','1620','San Francisco de Ojuera', '1' ),
		('16','1621','San Jos� de las Colinas', '1' ),
		('16','1622','San Luis', '1' ),
		('16','1623','San Marcos', '1' ),
		('16','1624','San Nicol�s', '1' ),
		('16','1625','San Pedro Zacapa', '1' ),
		('16','1626','San Vicente Centenario', '1' ),
		('16','1627','Santa Rita', '1' ),
		('16','1628','Trinidad', '1' ),


		('17','1701','Nacaome', '1' ),
		('17','1702','Alianza', '1' ),
		('17','1703','Amapala', '1' ),
		('17','1704','Aramecina', '1' ),
		('17','1705','Caridad', '1' ),
		('17','1706','Goascor�n', '1' ),
		('17','1707','Langue', '1' ),
		('17','1708','San Francisco de Coray', '1' ),
		('17','1709','San Lorenzo', '1' ),


		('18','1801','Yoro', '1' ),
		('18','1802','Arenal', '1' ),
		('18','1803','El Negrito', '1' ),
		('18','1804','El Progreso', '1' ),
		('18','1805','Joc�n', '1' ),
		('18','1806','Moraz�n', '1' ),
		('18','1807','Olanchito', '1' ),
		('18','1808','Santa Rita', '1' ),
		('18','1809','Sulaco', '1' ),
		('18','1810','Victoria', '1' ),
		('18','1811','Yorito', '1' );
GO



--************************************* Cargos ******************************-
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Gerente general','1');
GO

INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Administrador','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Chef ejecutivo','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Encargado de compras','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Chef de estaci�n','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Cocineros','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Asistentes de cocina','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Pinches','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Cajero','1');
GO
INSERT INTO [gral].[tbCargos]([carg_Descripcion],[carg_UsuCreacion])
VALUES('Encargado de limpieza en sala','1');
GO

--************************************************************************-


--************************************* Categorias ***************************-
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Ensaladas','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Mariscos','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Aperitivos','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Asados','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Frituras','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Sopas','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Postres','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Aderezos','1');
GO
INSERT INTO [gral].[tbCategorias]([cate_Descripcion],[cate_UsuCreacion])
VALUES('Bebidas','1');
GO
--************************************************************************-



--************************************* Met�dos de pagos *******************-
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Efectivo','1');														
GO																			
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Tarjeta(d�bito/cr�dito)','1');										
GO																			
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Transferencia','1');												
GO																			
																			
--**************************************************************************-

--************************************* Sucursales **************************-
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal Centrral','63','San Pedro Sula: 2 Av. 12 Cl. N.o., 104 Bo. Las Acacias','1');
GO
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal bvlr. norte','64','Crr. A Puerto Cort�s, Despues De Zip. Choloma, Antes De Gasoline','1');
GO
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal Costa Sur','65','8 Ave. S.e. 19 Y 20 Cll. No. 1963 Bo. Las Palmas Postal 8 85','1');
GO

--**************************************************************************-


--************************************* Empleados **************************-
--// SUCURSAL 1
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Marisol','Bueso Melgar','0502200014568','2000-05-20','F','1','63','Barrio Guamilito 7 Avenida 8-9 Calle, Contiguo A Laboratorio Salgado','95801478','marisol22@gmail.com','1','2',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Vanessa','Sosa','0501200078651','2002-11-20','F','2','63','Res. La candelaria, segunda calle','94308765','vanessosa@gmail.com','1','1',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Jason','Gomez','0501199787456','2003-01-19','M','1','63','Aldea Monterrey, Bajos','94563217','marisol22@gmail.com','1','3',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Marcia','Rivera','0602200074569','1999-05-21','F','3','63','col. La lopez, pasaje 4, casa 2','97710447','rivera22@gmail.com','1','4',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Jose','Martinez','0102199987451','1998-02-16','M','4','63','Res. Las fuentes, bloque 3, casa 9','87495621','joseMartinez11@gmail.com','1','5',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Linda','Sanchez','0801200074512','2002-06-30','F','5','63','Res. El racncho, fecitram ','93125687','lindaliss@gmail.com','1','6',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Melissa','Alberto','0901199412345','2003-11-15','F','1','63','Aldea la Bueso, los Bajos','94309647','melissaalbert@gmail.com','1','7',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Daniel','Lainez','0302200078456','2001-08-15','M','2','63','Res. San Carlos bloque 25, casa 3','97157663','danili@gmail.com','1','8',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Brenda','Robles','1001200096327','2000-10-28','F','3','63','Aldea Monterrey, Bajos de Choloma, calle 4 casa 276','94306589','brendarol@gmail.com','1','9',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Estefany','Simon','1102199912347','2000-05-20','F','4','63','Resudencial villas matilda, bloque 17, casa 4','87124399','estefanysim@gmail.com','1','10',1);
GO


--// SUCURSAL 2
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Gabriel','Acosta','1312200012784','2000-11-25','M','3','64','1ra y 2da avenida, 4ta calle S, casa 890','74561289','gabrilcst@gmail.com','2','1',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Denia','America','1414199078452','1990-02-28','F','4','64','Redidencial villa valencia, bloque 4 casa 15','95410020','deniaamerians@gmail.com','2','5',1);
GO
--// SUCURSAL 3
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Juan','Sagastume','0401200078514','03-01-2000','M','1','64','5ta avenida, calle 33 casa 404','97451288','juanis1@gmail.com','2','2',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Andrea','Paz','0502199674521','2000-12-15','F','1','64','Res. San carlos, 3 pasaje','95458303','andreasRrt@gmail.com','2','6',1);
GO

--****************************************************************************-


--************************************* Clientes **************************-

 INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
VALUES('Consumidor','Final','0','0','F','0',1);
GO
INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
VALUES('Jason','Rivera','0502199674852','17896542358741','M','98562314',1);
GO
INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
  VALUES('Miguel','Gomez','0502200147856','14235698741235','M','97856133',1);
GO
INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
  VALUES('Denia','Amaya','0501200296325','10247895632148','F','95406014',1);
GO
INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
 VALUES('Olvin','Arellano','0503199845632','15478963245478','M','97412586',1);
 GO
 INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
VALUES('Raul','Deras','0504199587415','14785423654123','M','99999961',1);
GO

--**************************************************************************-



--************************************* Roles **************************-
INSERT INTO acce.tbRoles (role_Nombre, role_UsuCreacion, role_FechaCreacion, role_UsuModificacion, role_FechaModificacion)
VALUES  ('Invitado', 1, GETDATE(), NULL, NULL),
		('Administrador', 1, GETDATE(), NULL, NULL),
		('Usuario', 1, GETDATE(), NULL, NULL),
		('Supervisor', 1, GETDATE(), NULL, NULL);

--**************************************************************************-
INSERT INTO acce.tbUsuarios (user_NombreUsuario, user_Contrasena, user_Correo, user_Image, user_EsAdmin, role_Id, empe_Id, clie_Id, user_UsuCreacion)
VALUES  ('Prueba','123','correopruebaxd@gmail.com','https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 0, 1, 1, 1, 1);

--************************************* Platillos **************************-

INSERT INTO rest.tbPlatillos (plat_Nombre, plat_Precio, cate_Id, plat_Imagen, plat_UsuCreacion)
VALUES ('Tacos al pastor', 50.00, 1, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Pollo en Salsa de Hongos', 75.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Ensalada César', 60.00, 3, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Filete Asado', 100.00, 4, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Sushi variado', 120.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Pasta carbonara', 80.00, 3, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Sopa de verduras', 40.00, 3, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Panini de pollo', 55.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Arroz con Almendras', 90.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Lomo de Cerdo', 160.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Alitas de Pollo', 90.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Crepas', 40.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Ensalada de Frutas', 112.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Puré de Papas', 30.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Papa Horneada', 70.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Carne de Res con Brócoli', 125.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Ravioli',130.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Gratén de Coliflor', 190.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Pollo al Vino', 98.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1),
	   ('Baleadas', 22.00, 2, 'https://pixabay.com/es/photos/cascada-monta%c3%b1a-alpes-7953344/', 1);


--**************************************************************************-

INSERT INTO rest.tbProveedores(prov_NombreEmpresa, prov_NombreContacto, prov_Telefono, muni_Id, prov_DireccionExacta, prov_UsuCreacion, prov_FechaModificacion, prov_UsuModificacion)
VALUES('Sula', 'Daniel Espinoza', 8775-6952, 5, 'Una cuadra antes del infierno', 1, NULL, 1);
GO
--************************************* Ingredientes **************************-

INSERT INTO rest.tbIngredientes (ingr_Nombre, ingr_PrecioX100gr, prov_Id, ingr_UsuCreacion)
VALUES ('Harina de trigo', 2.50, 1, 1),
	   ('Salmón', 26.50, 1, 1),
	   ('Queso cheddar rallado', 5.60, 1, 1),
	   ('Aceitunas negras sin hueso', 1.50, 1, 1),
	   ('Tomate', 0.75, 1, 1),
	   ('Cebolla morada', 0.86, 1, 1),
	   ('Pollo deshuesado', 2.10, 1, 1),
	   ('Arroz blanco', 0.90, 1, 1),
	   ('Pollo', 1.40, 1, 1),
	   ('Sal', 0.65, 1, 1),
	   ('Arroz precocido', 0.92, 1, 1),
	   ('Aceite de Oliva', 1.10, 1, 1),
	   ('Sardinas', 1.12, 1, 1),
	   ('Queso Crema', 3.15, 1, 1),
	   ('Perejil', 0.16, 1, 1),
	   ('Jengibre', 1.05, 1, 1),
	   ('Aguacate', 1.45, 1, 1),
	   ('Pechuga de pavo', 3.85, 1, 1),
	   ('Zanahorias', 0.35, 1, 1),
	   ('Piminetón', 0.45, 1, 1),
	   ('Carne de Cerdo', 5.05, 1, 1),
	   ('Trufas', 2.12, 1, 1),
	   ('Champiñones', 1.05, 1, 1);


--**************************************************************************-


--************************************* Pantallas **************************-
INSERT INTO acce.tbPantallas(pant_Nombre, pant_Url, pant_Menu, pant_HtmlId, pant_UsuCreacion)
VALUES ('Roles','/roles','acceso','RolesItem',1),
	   ('Usuario','/usuario','acceso','UsuarioItem',1),
	   ('Cargos','/cargos','general','cargosItem',1),
	   ('Categorias','/categorias','general','CategoriasItem',1),
       ('Departamentos','/departamentos','general','DepartamentosItem',1),
	   ('EstadosCiviles','/estadosCiviles','general','EstadosCivilesItem',1),
	   ('MetodosPago','/metodosPago','general','MetodosPagoItem',1),
	   ('Municipios','/municipios','general','MunicipiosItem',1),
	   ('Clientes','/clientes','restaurante','ClientesItem',1),
	   ('Empleados','/empleados','restaurante','EmpleadosItem',1),
	   ('Factura','/factura','restaurante','FacturasItem',1),
	   ('Ingredientes','/ingredientes','restaurante','IngredientesItem',1),
	   ('Sucursales','/sucursales','restaurante','SucursalesItem',1),
	   ('Proveedores','/proveedores','restaurante','ProveedoresItem',1),
	   ('Reportes facturas','/reportes_factura','reportes','reportesItem',1),
	   ('Reportes empleados','/reportes_empleados','reportes','reportesItem',1),
	   ('Reportes platillos','/reportes_platillos','reportes','reportesItem',1)
	   

--**************************************************************************-


--************************************* Roles **************************-

--**************************************************************************-


--************************************* Roles **************************-

--**************************************************************************-


--************************************* Roles **************************-

--**************************************************************************-





--**************************** PRUEBA TRIGGER ******************************-


CREATE TABLE rest.tbPlatillosHistorial2
(   plat_Id                              INT ,
    plat_Nombre			                 NVARCHAR (200) NOT NULL,
    plat_Precio				             DECIMAL(18,2) NOT NULL,
	cate_Id								 INT NOT NULL,
    plat_FechaCreacion		             DATETIME NOT NULL DEFAULT GETDATE(),
    plat_UsuarioCreacion		         INT NOT null,
    plat_FechaModificacion	             DATETIME,
    plat_UsuarioModificacion             INT,
    plat_Estado                          BIT NOT NULL DEFAULT 1,
    CONSTRAINT PK_rest_tbPlatillosHistorial2_plat_Id PRIMARY KEY(plat_Id),
	CONSTRAINT FK_rest_tbPlatillosHistorial2_tbCategorias_cate_Id FOREIGN key(cate_Id) REFERENCES gral.tbCategorias(cate_Id),
	CONSTRAINT FK_rest_tbPlatillosHistorial2_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(plat_UsuarioCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbPlatillosHistorial2_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(plat_UsuarioModificacion) REFERENCES acce.tbUsuarios([user_Id])

);
GO

----  DROP TABLE  rest.tbPlatillosHistorial2
--CREATE TRIGGER trg_Platillos6
--ON rest.tbPlatillos
--AFTER UPDATE, DELETE
--AS
--BEGIN
--    SET NOCOUNT ON;

--    IF EXISTS (SELECT * FROM deleted)
--    BEGIN
--      -- Guardar registro eliminado en el historial
--INSERT INTO rest.tbPlatillosHistorial2 
--SELECT*FROM deleted
--    END

--    IF EXISTS (SELECT * FROM inserted)
--    BEGIN
--        -- Guardar registro actualizado en el historial
--INSERT INTO rest.tbPlatillosHistorial2 
--SELECT*FROM inserted 
--    END
--END
--GO


--INSERT INTO [rest].[tbPlatillos]([plat_Nombre], [plat_Precio], [cate_Id],[plat_UsuCreacion])
--VALUES('Sopa me pollo',150,6,1);
--GO

UPDATE [rest].[tbPlatillos] SET [plat_Nombre] = 'Sopa de pollo super FEA',[plat_UsuModificacion] = 1,[plat_FechaModificacion] = GETDATE() WHERE [plat_Id]= 1;
GO
--SELECT*FROM [rest].[tbPlatillos];
--GO
--SELECT*FROM [rest].[tbPlatillosHistorial2];
--GO

---NO FUNCIONA

--**************************************************************************-
UPDATE acce.tbUsuarios
SET role_Id = 1
WHERE [user_Id] = 1