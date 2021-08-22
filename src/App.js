import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutProduct from "./components/CheckoutProduct";
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from "./components/Home";
import Login from "./components/Login";
import ProductsFeed from "./components/ProductsFeed";
import Register from "./components/Register";
import { SliderData } from './utils/Data';
import { StateData } from './utils/Data';
import { ProductsData } from './utils/Data';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <CheckoutProduct />
          <Footer />
        </Route>
        <Route path="/register">
          <Header />
          <Register states={StateData} />
          <Footer />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact path="/">
          <Header />
          <Home slides={SliderData} />
          <ProductsFeed products={ProductsData} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
