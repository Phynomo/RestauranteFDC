INSERT INTO [gral].[tbEstadosCiviles]([eciv_Descripcion],[eciv_UsuCreacion])
VALUES	('Soltero(a)', '1' ),
		('Casado(a)', '1' ),
		('Divorciado(a)', '1' ),
		('Viudo(a)', '1' ),
		('Union Libre', '1' )
GO


INSERT INTO gral.tbDepartamentos(depa_Codigo,depa_Nombre,depa_UsuCreacion)
VALUES	('01','Atlántida', '1' ),
		('02','Colón', '1' ),
		('03','Comayagua', '1' ),
		('04','Copán', '1' ),
		('05','Cortés', '1' ),
		('06','Choluteca', '1' ),
		('07','El Paraíso', '1' ),
		('08','Francisco Morazán', '1' ),
		('09','Gracias a Dios', '1' ),
		('10','Intibucá', '1' ),
		('11','Islas de la Bahía', '1' ),
		('12','La Paz', '1' ),
		('13','Lempira', '1' ),
		('14','Ocotepeque', '1' ),
		('15','Olancho', '1' ),
		('16','Santa Bárbara', '1' ),
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
		('2','0204','Limón', '1' ),
		('2','0205','Sabá', '1' ),
		('2','0206','Santa Fe', '1' ),
		('2','0207','Santa Rosa de Aguán', '1' ),
		('2','0208','Sonaguera', '1' ),
		('2','0209','Tocoa', '1' ),
		('2','0210','Bonito Oriental', '1' ),


		('3','0301','Comayagua', '1' ),
		('3','0302','Ajuterique', '1' ),
		('3','0303','El Rosario', '1' ),
		('3','0304','Esquías', '1' ),
		('3','0305','Humuya', '1' ),
		('3','0306','La Libertad', '1' ),
		('3','0307','Lamaní', '1' ),
		('3','0308','La Trinidad', '1' ),
		('3','0309','Lejamaní', '1' ),
		('3','0310','Meámbar', '1' ),
		('3','0311','Minas de Oro', '1' ),
		('3','0312','Ojos de Agua', '1' ),
		('3','0313','San Jerónimo', '1' ),
		('3','0314','San José de Comayagua', '1' ),
		('3','0315','San José del Potrero', '1' ),
		('3','0316','San Luis', '1' ),
		('3','0317','San Sebastián', '1' ),
		('3','0318','Siguatepeque', '1' ),
		('3','0319','Villa de San Antonio', '1' ),
		('3','0320','Las Lajas', '1' ),
		('3','0321','Taulabé', '1' ),


		('4','0401','Santa Rosa de Copán', '1' ),
		('4','0402','Cabañas', '1' ),
		('4','0403','Concepción', '1' ),
		('4','0404','Copán Ruinas', '1' ),
		('4','0405','Corquín', '1' ),
		('4','0406','Cucuyagua', '1' ),
		('4','0407','Dolores', '1' ),
		('4','0408','Dulce Nombre', '1' ),
		('4','0409','El Paraíso', '1' ),
		('4','0410','Florida', '1' ),
		('4','0411','La Jigua', '1' ),
		('4','0412','La Unión', '1' ),
		('4','0413','Nueva Arcadia', '1' ),
		('4','0414','San Agustín', '1' ),
		('4','0415','San Antonio', '1' ),
		('4','0416','San Jerónimo', '1' ),
		('4','0417','San José', '1' ),
		('4','0418','San Juan de Opoa', '1' ),
		('4','0419','San Nicolás', '1' ),
		('4','0420','San Pedro', '1' ),
		('4','0421','Santa Rita', '1' ),
		('4','0422','Trinidad de Copán', '1' ),
		('4','0423','Veracruz', '1' ),


		('5','0501','San Pedro Sula', '1' ),
		('5','0502','Choloma', '1' ),
		('5','0503','Omoa', '1' ),
		('5','0504','Pimienta', '1' ),
		('5','0505','Potrerillos', '1' ),
		('5','0506','Puerto Cortés', '1' ),
		('5','0507','San Antonio de Cortés', '1' ),
		('5','0508','San Francisco de Yojoa', '1' ),
		('5','0509','San Manuel', '1' ),
		('5','0510','Santa Cruz de Yojoa', '1' ),
		('5','0511','Villanueva', '1' ),
		('5','0512','La Lima', '1' ),


		('6','0601','Choluteca', '1' ),
		('6','0602','Apacilagua', '1' ),
		('6','0603','Concepción de María', '1' ),
		('6','0604','Duyure', '1' ),
		('6','0605','El Corpus', '1' ),
		('6','0606','El Triunfo', '1' ),
		('6','0607','Marcovia', '1' ),
		('6','0608','Morolica', '1' ),
		('6','0609','Namasigüe', '1' ),
		('6','0610','Orocuina', '1' ),
		('6','0611','Pespire', '1' ),
		('6','0612','San Antonio de Flores', '1' ),
		('6','0613','San Isidro', '1' ),
		('6','0614','San José', '1' ),
		('6','0615','San Marcos de Colón', '1' ),
		('6','0616','Santa Ana de Yusguare', '1' ),


		('7','0701','Yuscarán', '1' ),
		('7','0702','Alauca', '1' ),
		('7','0703','Danlí', '1' ),
		('7','0704','El Paraíso', '1' ),
		('7','0705','Güinope', '1' ),
		('7','0706','Jacaleapa', '1' ),
		('7','0707','Liure', '1' ),
		('7','0708','Morocelí', '1' ),
		('7','0709','Oropolí', '1' ),
		('7','0710','Potrerillos', '1' ),
		('7','0711','San Antonio de Flores', '1' ),
		('7','0712','San Lucas', '1' ),
		('7','0713','San Matías', '1' ),
		('7','0714','Soledad', '1' ),
		('7','0715','Teupasenti', '1' ),
		('7','0716','Texiguat', '1' ),
		('7','0717','Vado Ancho', '1' ),
		('7','0718','Yauyupe', '1' ),
		('7','0719','Trojes', '1' ),


		('8','0801','Distrito Central', '1' ),
		('8','0802','Alubarén', '1' ),
		('8','0803','Cedros', '1' ),
		('8','0804','Curarén', '1' ),
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
		('8','0823','Santa Lucía', '1' ),
		('8','0824','Talanga', '1' ),
		('8','0825','Tatumbla', '1' ),
		('8','0826','Valle de Ángeles', '1' ),
		('8','0827','Villa de San Francisco', '1' ),
		('8','0828','Vallecillo', '1' ),


		('9','0901','Puerto Lempira', '1' ),
		('9','0902','Brus Laguna', '1' ),
		('9','0903','Ahuas', '1' ),
		('9','0904','Juan Francisco Bulnes', '1' ),
		('9','0905','Ramón Villeda Morales', '1' ),
		('9','0906','Wampusirpe', '1' ),


		('10','1001','La Esperanza', '1' ),
		('10','1002','Camasca', '1' ),
		('10','1003','Colomoncagua', '1' ),
		('10','1004','Concepción', '1' ),
		('10','1005','Dolores', '1' ),
		('10','1006','Intibucá', '1' ),
		('10','1007','Jesús de Otoro', '1' ),
		('10','1008','Magdalena', '1' ),
		('10','1009','Masaguara', '1' ),
		('10','1010','San Antonio', '1' ),
		('10','1011','San Isidro', '1' ),
		('10','1012','San Juan', '1' ),
		('10','1013','San Marcos de la Sierra', '1' ),
		('10','1014','San Miguel Guancapla', '1' ),
		('10','1015','Santa Lucía', '1' ),
		('10','1016','Yamaranguila', '1' ),
		('10','1017','San Francisco de Opalaca', '1' ),


		('11','1101','Roatán', '1' ),
		('11','1102','Guanaja', '1' ),
		('11','1103','José Santos Guardiola', '1' ),
		('11','1104','Utila', '1' ),


		('12','1201','La Paz', '1' ),
		('12','1202','Aguanqueterique', '1' ),
		('12','1203','Cabañas', '1' ),
		('12','1204','Cane', '1' ),
		('12','1205','Chinacla', '1' ),
		('12','1206','Guajiquiro', '1' ),
		('12','1207','Lauterique', '1' ),
		('12','1208','Marcala', '1' ),
		('12','1209','Mercedes de Oriente', '1' ),
		('12','1210','Opatoro', '1' ),
		('12','1211','San Antonio del Norte', '1' ),
		('12','1212','San José', '1' ),
		('12','1213','San Juan', '1' ),
		('12','1214','San Pedro de Tutule', '1' ),
		('12','1215','Santa Ana', '1' ),
		('12','1216','Santa Elena', '1' ),
		('12','1217','Santa María', '1' ),
		('12','1218','Santiago de Puringla', '1' ),
		('12','1219','Yarula', '1' ),


		('13','1301','Gracias', '1' ),
		('13','1302','Belén', '1' ),
		('13','1303','Candelaria', '1' ),
		('13','1304','Cololaca', '1' ),
		('13','1305','Erandique', '1' ),
		('13','1306','Gualcince', '1' ),
		('13','1307','Guarita', '1' ),
		('13','1308','La Campa', '1' ),
		('13','1309','La Iguala', '1' ),
		('13','1310','Las Flores', '1' ),
		('13','1311','La Unión', '1' ),
		('13','1312','La Virtud', '1' ),
		('13','1313','Lepaera', '1' ),
		('13','1314','Mapulaca', '1' ),
		('13','1315','Piraera', '1' ),
		('13','1316','San Andrés', '1' ),
		('13','1317','San Francisco', '1' ),
		('13','1318','San Juan Guarita', '1' ),
		('13','1319','San Manuel Colohete', '1' ),
		('13','1320','San Rafael', '1' ),
		('13','1321','San Sebastián', '1' ),
		('13','1322','Santa Cruz', '1' ),
		('13','1323','Talgua', '1' ),
		('13','1324','Tambla', '1' ),
		('13','1325','Tomalá', '1' ),
		('13','1326','Valladolid', '1' ),
		('13','1327','Virginia', '1' ),
		('13','1328','San Marcos de Caiquín', '1' ),


		('14','1401','Ocotepeque', '1' ),
		('14','1402','Belén Gualcho', '1' ),
		('14','1403','Concepción', '1' ),
		('14','1404','Dolores Merendón', '1' ),
		('14','1405','Fraternidad', '1' ),
		('14','1406','La Encarnación', '1' ),
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
		('15','1505','Dulce Nombre de Culmí', '1' ),
		('15','1506','El Rosario', '1' ),
		('15','1507','Esquipulas del Norte', '1' ),
		('15','1508','Gualaco', '1' ),
		('15','1509','Guarizama', '1' ),
		('15','1510','Guata', '1' ),
		('15','1511','Guayape', '1' ),
		('15','1512','Jano', '1' ),
		('15','1513','La Unión', '1' ),
		('15','1514','Mangulile', '1' ),
		('15','1515','Manto', '1' ),
		('15','1516','Salamá', '1' ),
		('15','1517','San Esteban', '1' ),
		('15','1518','San Francisco de Becerra', '1' ),
		('15','1519','San Francisco de la Paz', '1' ),
		('15','1520','Santa María del Real', '1' ),
		('15','1521','Silca', '1' ),
		('15','1522','Yocón', '1' ),
		('15','1523','Patuca', '1' ),


		('16','1601','Santa Bárbara', '1' ),
		('16','1602','Arada', '1' ),
		('16','1603','Atima', '1' ),
		('16','1604','Azacualpa', '1' ),
		('16','1605','Ceguaca', '1' ),
		('16','1606','Concepción del Norte', '1' ),
		('16','1607','Concepción del Sur', '1' ),
		('16','1608','Chinda', '1' ),
		('16','1609','El Níspero', '1' ),
		('16','1610','Gualala', '1' ),
		('16','1611','Ilama', '1' ),
		('16','1612','Las Vegas', '1' ),
		('16','1613','Macuelizo', '1' ),
		('16','1614','Naranjito', '1' ),
		('16','1615','Nuevo Celilac', '1' ),
		('16','1616','Nueva Frontera', '1' ),
		('16','1617','Petoa', '1' ),
		('16','1618','Protección', '1' ),
		('16','1619','Quimistán', '1' ),
		('16','1620','San Francisco de Ojuera', '1' ),
		('16','1621','San José de las Colinas', '1' ),
		('16','1622','San Luis', '1' ),
		('16','1623','San Marcos', '1' ),
		('16','1624','San Nicolás', '1' ),
		('16','1625','San Pedro Zacapa', '1' ),
		('16','1626','San Vicente Centenario', '1' ),
		('16','1627','Santa Rita', '1' ),
		('16','1628','Trinidad', '1' ),


		('17','1701','Nacaome', '1' ),
		('17','1702','Alianza', '1' ),
		('17','1703','Amapala', '1' ),
		('17','1704','Aramecina', '1' ),
		('17','1705','Caridad', '1' ),
		('17','1706','Goascorán', '1' ),
		('17','1707','Langue', '1' ),
		('17','1708','San Francisco de Coray', '1' ),
		('17','1709','San Lorenzo', '1' ),


		('18','1801','Yoro', '1' ),
		('18','1802','Arenal', '1' ),
		('18','1803','El Negrito', '1' ),
		('18','1804','El Progreso', '1' ),
		('18','1805','Jocón', '1' ),
		('18','1806','Morazán', '1' ),
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
VALUES('Chef de estación','1');
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



--************************************* Metódos de pagos *******************-
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Efectivo','1');														
GO																			
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Tarjeta(débito/crédito)','1');										
GO																			
INSERT INTO [gral].[tbMetodosPago]([metp_Descripcion],[metp_UsuCreacion])	
VALUES('Transferencia','1');												
GO																			
																			
--**************************************************************************-

--************************************* Empleados **************************-
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal Centrral','63','San Pedro Sula: 2 Av. 12 Cl. N.o., 104 Bo. Las Acacias','1');
GO
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal bvlr. norte','64','Crr. A Puerto Cortés, Despues De Zip. Choloma, Antes De Gasoline','1');
GO
INSERT INTO [rest].[tbSucursales]([sucu_Nombre],[muni_Id],[sucu_Direccion],[sucu_UsuCreacion])
VALUES('Sucursal Costa Sur','65','8 Ave. S.e. 19 Y 20 Cll. No. 1963 Bo. Las Palmas Postal 8 85','1');
GO

--**************************************************************************-


--************************************* Empleados **************************-
--// SUCURSAL 1
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Marisol','Bueso Melgar','0502200014568','05-20-2000','F','1','63','Barrio Guamilito 7 Avenida 8-9 Calle, Contiguo A Laboratorio Salgado','95801478','marisol22@gmail.com','1','2',1);
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
VALUES('Marcia','Rivera','0602200074569','05-21-1999','F','3','63','col. La lopez, pasaje 4, casa 2','97710447','rivera22@gmail.com','1','4',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Jose','Martinez','0102199987451','02-16-1998','M','4','63','Res. Las fuentes, bloque 3, casa 9','87495621','joseMartinez11@gmail.com','1','5',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Linda','Sanchez','0801200074512','06-30-2002','F','5','63','Res. El racncho, fecitram ','93125687','lindaliss@gmail.com','1','6',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Melissa','Alberto','0901199412345','11-15-2003','F','1','63','Aldea la Bueso, los Bajos','94309647','melissaalbert@gmail.com','1','7',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Daniel','Lainez','0302200078456','08-15-2001','M','2','63','Res. San Carlos bloque 25, casa 3','97157663','danili@gmail.com','1','8',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Brenda','Robles','1001200096327','10-28-2000','F','3','63','Aldea Monterrey, Bajos de Choloma, calle 4 casa 276','94306589','brendarol@gmail.com','1','9',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Estefany','Simon','1102199912347','05-20-2000','F','4','63','Resudencial villas matilda, bloque 17, casa 4','87124399','estefanysim@gmail.com','1','10',1);
GO


--// SUCURSAL 2
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Gabriel','Acosta','1312200012784','11-25-2000','M','3','64','1ra y 2da avenida, 4ta calle S, casa 890','74561289','gabrilcst@gmail.com','2','1',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Denia','America','1414199078452','02-28-1990','F','4','64','Redidencial villa valencia, bloque 4 casa 15','95410020','deniaamerians@gmail.com','2','5',1);
GO
--// SUCURSAL 3
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Juan','Sagastume','0401200078514','03-01-2000','M','1','64','5ta avenida, calle 33 casa 404','97451288','juanis1@gmail.com','2','2',1);
GO
INSERT INTO [rest].[tbEmpleados]([empe_Nombres],[empe_Apellidos],[empe_Identidad],
[empe_FechaNacimiento],[empe_Sexo],[eciv_Id],[muni_Id],[empe_DireccionExacta],[empe_Telefono],[empe_CorreoElectronico],[sucu_Id],[carg_Id],[empe_UsuCreacion])
VALUES('Andrea','Paz','0502199674521','12-15-2000','F','1','64','Res. San carlos, 3 pasaje','95458303','andreasRrt@gmail.com','2','6',1);
GO

--****************************************************************************-


--************************************* Clientes **************************-

 INSERT INTO [rest].[tbClientes]([clie_Nombres],[clie_Apellidos],[clie_Identidad],[clie_RTN],[clie_Sexo],[clie_Telefono],[clie_UsuCreacion])
VALUES('Karla','Alejandro','0502200302725','15478963248752','F','96137668',1);
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



--************************************* Clientes **************************-

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
    CONSTRAINT PK_rest_tbPlatillosHistorial_plat_Id PRIMARY KEY(plat_Id),
	CONSTRAINT FK_rest_tbPlatillosHistorial_tbCategorias_cate_Id FOREIGN key(cate_Id) REFERENCES gral.tbCategorias(cate_Id),
	CONSTRAINT FK_rest_tbPlatillosHistorial_acce_tbUsuarios_role_UsuCreacion_user_Id 	FOREIGN KEY(plat_UsuarioCreacion) REFERENCES acce.tbUsuarios([user_Id]),
	CONSTRAINT FK_rest_tbPlatillosHistorial_acce_tbUsuarios_role_UsuModificacion_user_Id FOREIGN KEY(plat_UsuarioModificacion) REFERENCES acce.tbUsuarios([user_Id])

);
GO

--  DROP TABLE  rest.tbPlatillosHistorial2
CREATE TRIGGER trg_Platillos6
ON rest.tbPlatillos
AFTER UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;

    IF EXISTS (SELECT * FROM deleted)
    BEGIN
      -- Guardar registro eliminado en el historial
INSERT INTO rest.tbPlatillosHistorial2 
SELECT*FROM deleted
    END

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        -- Guardar registro actualizado en el historial
INSERT INTO rest.tbPlatillosHistorial2 
SELECT*FROM inserted 
    END
END
GO


INSERT INTO [rest].[tbPlatillos]([plat_Nombre], [plat_Precio], [cate_Id],[plat_UsuarioCreacion])
VALUES('Sopa me pollo',150,6,1);
GO

UPDATE [rest].[tbPlatillos] SET [plat_Nombre] = 'Sopa de pollo super FEA',[plat_UsuarioModificacion] = 1,[plat_FechaModificacion] = GETDATE() WHERE [plat_Id]= 1;
GO
SELECT*FROM [rest].[tbPlatillos];
GO
SELECT*FROM [rest].[tbPlatillosHistorial2];
GO

---NO FUNCIONA

--**************************************************************************-