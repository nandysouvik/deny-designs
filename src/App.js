import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from './components/pages/Header';
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { SliderData } from './components/utils/Data';
import { StateData } from './components/utils/Data';

function App() {
  return (
    <Router>
      <div>
        <Switch>
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
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
