import React, {useEffect} from 'react';
import {useHistory, Redirect,  BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
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
import Usuarios from './components/pages/Usuarios/Usuario';
import UsuariosCreate from './components/pages/Usuarios/UsuariosCreate';
import UsuariosEdit from './components/pages/Usuarios/UsuariosEdit';
import UsuariosDetails from './components/pages/Usuarios/UsuariosDetails';
import CrearCliente from './components/sections/Clientes/Crear';
import EditarCliente from './components/sections/Clientes/Editar';
import CrearEmpleado from './components/sections/Empleados/Crear';
import EditarEmpleado from './components/sections/Empleados/Editar';

import Roles from './components/pages/Roles';
import Categorias from './components/pages/Categorias';

function App() {
  const history = useHistory();

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('token');
  //   if (!isAuthenticated) {
  //     history.push('/default-login');
  //   }
  // }, [history]);
  return (
    <Router basename={'/themes/themeforest/react/costic/'}>
      <Preloader />
      <Switch>
        <Route path="/default-login" component={Defaultlogin} />
        <PrivateRoute  exact path="/" component={Dashboard} />
        <Route path="/pruebas" component={Pruebas} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/usuarios_create" component={UsuariosCreate} />
        <Route path="/usuarios_edit" component={UsuariosEdit} />
        <Route path="/usuarios_details" component={UsuariosDetails} />
        <Route path="/factura" component={Factura} />
        <Route path="/factura_create" component={FacturaCreate} />
        <Route path="/factura_edit" component={FacturaEdit} />
        <Route path="/factura_details" component={FacturaDetails} />
        <Route path="/accordions" component={Accordions} />
        <Route path="/departamentos" component={Departamentos} />
        <Route path="/estadosCiviles" component={EstadosCiviles} />
        <Route path="/metodosPago" component={MetodosPago} />
        <Route path="/empleados" component={Empleados} />
        <PrivateRoute path="/cargos" component={Cargos} />
        <Route path="/clientes" component={Clientes}></Route>
        <Route path="/crearCliente" component={CrearCliente}></Route>
        <Route path="/editarCliente/:clie_Id" component={EditarCliente} />
        <Route path="/crearEmpleado" component={CrearEmpleado}></Route>
        <Route path="/editarEmpleado/:empe_Id" component={EditarEmpleado} />
        <Route path="/roles" component={Roles} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/add-product" component={Addproduct} />
        <Route path="/alerts" component={Alerts} />
        <Route path="/animations" component={Animations} />
        <Route path="/badges" component={Badges} />
        <Route path="/basic-tables" component={Basictables} />
        <Route path="/breadcrumbs" component={Breadcrumbs} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/cards" component={Cards} />
        <Route path="/chartjs" component={Chartjs} />
        <Route path="/chat" component={Chat} />
        <Route path="/cropper" component={Cropper} />
        <Route path="/customer-list" component={Customerlist} />
        <Route path="/customer-review" component={Customerreview} />
        <Route path="/data-tables" component={Datatables} />
        <Route path="/draggables" component={Draggables} />
        <Route path="/email" component={Email} />
        <Route path="/flaticons" component={Flaticons} />
        <Route path="/fontawesome" component={Fontawesome} />
        <Route path="/form-elements" component={Formelements} />
        <Route path="/form-layouts" component={Formlayouts} />
        <Route path="/form-validation" component={Formvalidation} />
        <Route path="/form-wizard" component={Formwizard} />
        <Route path="/google-maps" component={Googlemaps} />
        <Route path="/invoice-detail" component={Invoicedetail} />
        <Route path="/invoice-list" component={Invoicelist} />
        <Route path="/materialize" component={Materialize} />
        <Route path="/menu-catalogue" component={Menucatalogue} />
        <Route path="/menu-grid" component={Menugrid} />
        <Route path="/menu-list" component={Menulist} />
        <Route path="/modals" component={Modals} />
        <Route path="/google-chart" component={Googlechart} />
        <Route path="/orders" component={Orders} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/preloaders" component={Preloaders} />
        <Route path="/product-detail" component={Productdetail} />
        <Route path="/progress-bars" component={Progressbars} />
        <Route path="/range-slider" component={Rangeslider} />
        <Route path="/rating" component={Rating} />
        <Route path="/restaurant-list" component={Restaurantlist} />
        <Route path="/sales" component={Sales} />
        <Route path="/sliders" component={Sliders} />
        <Route path="/social-activity" component={Socialactivity} />
        <Route path="/sweet-alerts" component={Sweetalerts} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/toast" component={Toast} />
        <Route path="/todo-list" component={Todolist} />
        <Route path="/tour" component={Tour} />
        <Route path="/typography" component={Typography} />
        <Route path="/vector-maps" component={Vectormaps} />
        <Route path="/widgets" component={Widgets} />
        <Route path="/client-management" component={Clientmanagement} />
        <Route path="/coming-soon" component={Comingsoon} />
        <Route path="/default-register" component={Defaultregister} />
        <Route path="/error" component={Error} />
        <Route path="/faq" component={Faq} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/lock-screen" component={Lockscreen} />
        <Route path="/modal-login" component={Modallogin} />
        <Route path="/modal-register" component={Modalregister} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/stock-management" component={Stockmanagement} />
        <Route path="/user-profile" component={Userprofile} />
        <Route path="/web-analytics" component={Webanalytics} />
      </Switch>
    </Router>

  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/default-login" />
        )
      }
    />
  );
}


export default App;
