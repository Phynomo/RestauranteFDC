import React, { useEffect, useState } from 'react';
import { useHistory, Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages/Dashboard';
import Accordions from './components/pages/Accordions';
import Addproduct from './components/pages/Addproduct';
import Alerts from './components/pages/Alerts';
import Animations from './components/pages/Animations';
import Badges from './components/pages/Badges';
import Basictables from './components/pages/Basictables';
import Breadcrumbs from './components/pages/Breadcrumbs';
import Buttons from './components/pages/Buttons';
import Cards from './components/pages/Cards';
import Chartjs from './components/pages/Chartjs';
import Chat from './components/pages/Chat';
import Cropper from './components/pages/Cropper';
import Customerlist from './components/pages/Customerlist';
import Customerreview from './components/pages/Customerreview';
import Datatables from './components/pages/Datatables';
import Draggables from './components/pages/Draggables';
import Email from './components/pages/Email';
import Flaticons from './components/pages/Flaticons';
import Fontawesome from './components/pages/Fontawesome';
import Formelements from './components/pages/Formelements';
import Formlayouts from './components/pages/Formlayouts';
import Formvalidation from './components/pages/Formvalidation';
import Formwizard from './components/pages/Formwizard';
import Googlemaps from './components/pages/Googlemaps';
import Invoicedetail from './components/pages/Invoicedetail';
import Invoicelist from './components/pages/Invoicelist';
import Materialize from './components/pages/Materialize';
import Menucatalogue from './components/pages/Menucatalogue';
import Menugrid from './components/pages/Menugrid';
import Menulist from './components/pages/Menulist';
import Modals from './components/pages/Modals';
import Googlechart from './components/pages/Googlechart';
import Orders from './components/pages/Orders';
import Pagination from './components/pages/Pagination';
import Preloaders from './components/pages/Preloaders';
import Productdetail from './components/pages/Productdetail';
import Progressbars from './components/pages/Progressbars';
import Rangeslider from './components/pages/Rangeslider';
import Rating from './components/pages/Rating';
import Restaurantlist from './components/pages/Restaurantlist';
import Sales from './components/pages/Sales';
import Sliders from './components/pages/Sliders';
import Socialactivity from './components/pages/Socialactivity';
import Sweetalerts from './components/pages/Sweetalerts';
import Tabs from './components/pages/Tabs';
import Toast from './components/pages/Toast';
import Todolist from './components/pages/Todolist';
import Tour from './components/pages/Tour';
import Typography from './components/pages/Typography';
import Vectormaps from './components/pages/Vectormaps';
import Widgets from './components/pages/Widgets';
import Clientmanagement from './components/pages/Clientmanagement';
import Comingsoon from './components/pages/Comingsoon';
import Defaultlogin from './components/pages/Defaultlogin';
import Defaultregister from './components/pages/Defaultregister';
import Error from './components/pages/Error';
import Faq from './components/pages/Faq';
import Invoice from './components/pages/Invoice';
import Lockscreen from './components/pages/Lockscreen';
import Modallogin from './components/pages/Modallogin';
import Modalregister from './components/pages/Modalregister';
import Portfolio from './components/pages/Portfolio';
import Stockmanagement from './components/pages/Stockmanagement';
import Userprofile from './components/pages/Userprofile';
import Webanalytics from './components/pages/Webanalytics';
import Departamentos from './components/pages/Departamentos';
import Empleados from './components/pages/Empleados';
import Cargos from './components/pages/Cargos';
import EstadosCiviles from './components/pages/EstadosCiviles';
import MetodosPago from './components/pages/MetodosPago';
import Pruebas from './components/pages/pruebas';
import Factura from './components/pages/Factura/Factura';
import FacturaCreate from './components/pages/Factura/FacturaCreate';
import FacturaEdit from './components/pages/Factura/FacturaEdit';
import FacturaDetails from './components/pages/Factura/FacturaDetails';
import Clientes from './components/pages/Clientes';
import Proveedores from './components/pages/Proveedores/Proveedores';
import ProveedoresCreate from './components/pages/Proveedores/ProveedoresCreate';
import ProveedoresEdit from './components/pages/Proveedores/ProveedoresEdit';
import ProveedoresDetails from './components/pages/Proveedores/ProveedoresDetails';
import Usuarios from './components/pages/Usuarios/Usuario';
import UsuariosCreate from './components/pages/Usuarios/UsuariosCreate';
import UsuariosEdit from './components/pages/Usuarios/UsuariosEdit';
import UsuariosDetails from './components/pages/Usuarios/UsuariosDetails';
import CrearCliente from './components/sections/Clientes/Crear';
import EditarCliente from './components/sections/Clientes/Editar';
import CrearEmpleado from './components/sections/Empleados/Crear';
import EditarEmpleado from './components/sections/Empleados/Editar';
import ReporteFacturas from './components/pages/Reportes/ReporteFacturas';
import ReporteEmpleados from './components/pages/Reportes/ReporteEmpleados';
import ReportePlatillos from './components/pages/Reportes/ReportePlatillos';
import Sucursales from './components/pages/Sucursales';
import Roles from './components/pages/Roles/Roles';
import CrearRoles from './components/pages/Roles/RolesCreate';
import EditarRoles from './components/pages/Roles/RolesEdit';
import DetallesRoles from './components/pages/Roles/RolesDetails';
import Categorias from './components/pages/Categorias';
import Municipios from './components/pages/Municipios';
import Ingredientes from './components/pages/Ingredientes';
import axios from 'axios';

function App() {
  const history = useHistory();
  const [userRole, setUserRole] = useState('');
  const [rutas, setRutas] = useState([]);
  const [pantId, setpantId] = useState([]);
  const usuarioData = JSON.parse(localStorage.getItem('token'));

  const components = {
    'Roles': Roles,
    'Usuario': Usuarios,
    'Cargos': Cargos,
    'Categorias': Categorias,
    'Departamentos': Departamentos,
    'EstadosCiviles': EstadosCiviles,
    'MetodosPago': MetodosPago,
    'Municipios': Municipios,
    'Clientes': Clientes,
    'Empleados': Empleados,
    'Factura': Factura,
    'Ingredientes': Ingredientes,
    'Sucursales': Sucursales,
  };

  async function fetchPermissionsForRole(role, admin) {
    try {
      if(localStorage.getItem('Pantallas') == null){

      const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${role}&esAdmin=${admin}`, {});
      const pantIds = response.data.data.map(objeto => objeto.pant_Id);

      setpantId(pantIds);
      localStorage.setItem('Pantallas', pantIds)

      return pantIds;
      }
    } catch (error) {

        localStorage.setItem('Pantallas', [])
      return [];
    }
  }

  async function fetchPantallas(role, admin) {
    try {
      const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${role}&esAdmin=${admin}`)
      const routes = response.data.data.map((ruta) => {
        return { ...ruta, component: components[ruta.pant_Nombre] };
      });
      setRutas(routes);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return []; // Devuelve un arreglo por defecto si hay algún error
    }
  }

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      history.push('/default-login');
    } else {
      const role = usuarioData.role_Id;
      const admin = usuarioData.user_EsAdmin ? 1 : 0;
      fetchPantallas(role, admin);
      fetchPermissionsForRole(role, admin);
    }
  }, [history]);


  function canAccessPage(pageId) {
    return pantId.includes(pageId);
    
  }
  return (
    <Router basename={'/themes/themeforest/react/costic/'}>
      <Preloader />
      <Switch>
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/usuarios_create" component={UsuariosCreate} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/usuarios_edit" component={UsuariosEdit} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/usuarios_details" component={UsuariosDetails} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/factura_create" component={FacturaCreate} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/factura_edit" component={FacturaEdit} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/factura_details" component={FacturaDetails} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/crearCliente" component={CrearCliente} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/crearRoles" component={CrearRoles} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/editarCliente/:clie_Id" component={EditarCliente} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/crearEmpleado" component={CrearEmpleado} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/editarEmpleado/:empe_Id" component={EditarEmpleado} /> */}
        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/pruebas" component={Pruebas} /> */}
        {/* {rutas.map((ruta) =>
          canAccessPage(ruta.pant_Id) ? (
            <PrivateRoute key={ruta.pant_Id} path={ruta.pant_Url} pantId={ruta.pant_Id} permitidas={pantId} component={ruta.component} />
          ) : (
            <Redirect key={ruta.pant_Id} to="/" />
            )
          )} */}
        {/* paginas por defecto */}
        <GeneralRoute path="/lock-screen" component={Lockscreen} />
        <Route path="/default-login" component={Defaultlogin} />
        <GeneralRoute key="home" exact path="/" component={Dashboard} />
        <GeneralRoute path="/user-profile" component={Userprofile} />
        <GeneralRoute path="/error" component={Error} />
        

        {/* Roles id:1 */}
        <PrivateRoute pantId={1}  path="/roles" component={Roles} />
        <PrivateRoute pantId={1}  path="/crearRoles" component={CrearRoles} />
        <PrivateRoute pantId={1}  path="/editarRoles" component={EditarRoles} />
        <PrivateRoute pantId={1}  path="/detallesRoles" component={DetallesRoles} />

        {/* Usuarios id:2 */}
        <PrivateRoute pantId={2}  path="/usuario" component={Usuarios} />
        <PrivateRoute pantId={2}  path="/usuarios_create" component={UsuariosCreate} />
        <PrivateRoute pantId={2}  path="/usuarios_edit" component={UsuariosEdit} />
        <PrivateRoute pantId={2}  path="/usuarios_details" component={UsuariosDetails} />

        {/* Cargos id:3 */}
        <PrivateRoute pantId={3}  path="/cargos" component={Cargos} />

        {/* Categorias id:4 */}
        <PrivateRoute pantId={4}  path="/categorias" component={Categorias} />

        {/* Departamentos id:5 */}
        <PrivateRoute pantId={5}  path="/departamentos" component={Departamentos} />

        {/* Estados Civiles id:6 */}
        <PrivateRoute pantId={6}  path="/estadosCiviles" component={EstadosCiviles} />

        {/* Metodos Pago id:7 */}
        <PrivateRoute pantId={7}  path="/metodosPago" component={MetodosPago} />

        {/* Municipios id:8 */}
        <PrivateRoute pantId={8}  path="/municipios" component={Municipios} />

        {/* Cliente id:9 */}
        <PrivateRoute pantId={9}  path="/clientes" component={Clientes}/>
        <PrivateRoute pantId={9}  path="/crearCliente" component={CrearCliente}/>
        <PrivateRoute pantId={9}  path="/editarCliente/:clie_Id" component={EditarCliente} />

        {/* Empleados id:10 */}
        <PrivateRoute pantId={10}  path="/empleados" component={Empleados} />
        <PrivateRoute pantId={10}  path="/crearEmpleado" component={CrearEmpleado}/>
        <PrivateRoute pantId={10}  path="/editarEmpleado/:empe_Id" component={EditarEmpleado} />

        {/* Factura id:11 */}
        <PrivateRoute pantId={11}  path="/factura" component={Factura} />
        <PrivateRoute pantId={11}  path="/factura_create" component={FacturaCreate} />
        <PrivateRoute pantId={11}  path="/factura_edit" component={FacturaEdit} />
        <PrivateRoute pantId={11}  path="/factura_details" component={FacturaDetails} />

        {/* Ingredientes id:12 */}
        <PrivateRoute pantId={12}  path="/ingredientes" component={Ingredientes} />

        {/* Sucursales id:13 */}
        <PrivateRoute pantId={13}  path="/sucursales" component={Sucursales} />

        {/* Proveedores id:14 */}
        <PrivateRoute pantId={14}  path="/proveedores" component={Proveedores} />
        <PrivateRoute pantId={14}  path="/proveedores_create" component={ProveedoresCreate} />
        <PrivateRoute pantId={14}  path="/proveedores_edit" component={ProveedoresEdit} />
        <PrivateRoute pantId={14}  path="/proveedores_details" component={ProveedoresDetails} />
        
        
        {/* Reportes id:15 - 17 */}
        <PrivateRoute pantId={15}  path="/reportes_factura" component={ReporteFacturas} />
        <PrivateRoute pantId={16}  path="/reportes_empleados" component={ReporteEmpleados} />
        <PrivateRoute pantId={17}  path="/reportes_platillos" component={ReportePlatillos} />

        {/* <PrivateRoute pantId={1} permitidas={pantId} path="/pruebas" component={Pruebas} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/accordions" component={Accordions} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/add-product" component={Addproduct} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/alerts" component={Alerts} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/animations" component={Animations} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/badges" component={Badges} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/basic-tables" component={Basictables} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/breadcrumbs" component={Breadcrumbs} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/buttons" component={Buttons} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/cards" component={Cards} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/chartjs" component={Chartjs} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/chat" component={Chat} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/cropper" component={Cropper} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/customer-list" component={Customerlist} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/customer-review" component={Customerreview} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/data-tables" component={Datatables} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/draggables" component={Draggables} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/email" component={Email} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/flaticons" component={Flaticons} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/fontawesome" component={Fontawesome} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/form-elements" component={Formelements} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/form-layouts" component={Formlayouts} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/form-validation" component={Formvalidation} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/form-wizard" component={Formwizard} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/google-maps" component={Googlemaps} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/invoice-detail" component={Invoicedetail} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/invoice-list" component={Invoicelist} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/materialize" component={Materialize} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/menu-catalogue" component={Menucatalogue} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/menu-grid" component={Menugrid} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/menu-list" component={Menulist} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/modals" component={Modals} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/google-chart" component={Googlechart} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/orders" component={Orders} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/pagination" component={Pagination} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/preloaders" component={Preloaders} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/product-detail" component={Productdetail} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/progress-bars" component={Progressbars} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/range-slider" component={Rangeslider} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/rating" component={Rating} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/restaurant-list" component={Restaurantlist} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/sales" component={Sales} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/sliders" component={Sliders} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/social-activity" component={Socialactivity} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/sweet-alerts" component={Sweetalerts} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/tabs" component={Tabs} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/toast" component={Toast} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/todo-list" component={Todolist} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/tour" component={Tour} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/typography" component={Typography} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/vector-maps" component={Vectormaps} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/widgets" component={Widgets} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/client-management" component={Clientmanagement} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/coming-soon" component={Comingsoon} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/default-register" component={Defaultregister} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/faq" component={Faq} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/invoice" component={Invoice} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/modal-login" component={Modallogin} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/modal-register" component={Modalregister} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/portfolio" component={Portfolio} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/stock-management" component={Stockmanagement} />
        <PrivateRoute pantId={1} permitidas={pantId} path="/web-analytics" component={Webanalytics} /> */}
      </Switch>
    </Router>

  );
}

function PrivateRoute({pantId: pant_Id,component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('token');
  const pant_per = localStorage.getItem('Pantallas');

  const pude = pant_per != null? pant_per.includes(pant_Id) : false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && pude? (
          <Component {...props} />
        ) : (
          !isAuthenticated ? <Redirect to="/default-login" /> : <Redirect to="/" />
        )
      }
    />
  );
}

function GeneralRoute({component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          !isAuthenticated ? <Redirect to="/default-login" /> : <Redirect to="/" />
        )
      }
    />
  );
}

export default App;
