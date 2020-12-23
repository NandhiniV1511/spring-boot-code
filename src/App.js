import './App.css';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProductOrder from './components/orders/AddProductOrder';
import UpdateOrder from './components/orders/UpdateOrder';
import { Provider } from 'react-redux';
import store from './store';
import ProductOrder from './components/ProductOrder';

function App() {
  return (

      <Provider store={store}>
      <Router>
      <HeaderComponent/>
      <Route exact path="/productOrder" component={ProductOrder}/>
      <Route exact path="/addProductOrder" component={AddProductOrder}/>
      <Route exact path="/updateOrder/:orderId" component={UpdateOrder}/>
      <FooterComponent/>
      </Router>
      </Provider>
  );
}

export default App;