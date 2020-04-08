import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Promotion from "./layout/Promotion";
import Dress from "./layout/Dress";
import Abaya from "./layout/Abaya";
import Coat from "./layout/Coat";
import Newsletter from "./layout/Newsletter";
import Gallery from "./layout/Gallery";
import PostProduct from "./layout/PostProduct";
// import Register from "./accounts/Register";
// import Login from "./accounts/Login";
// import Dashboard from "./products/Dashboard";
// import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
// import { loadUser } from "../actions/auth";
import { getProducts } from "../actions/products";

const App = () => {
  useEffect(() => {
    store.dispatch(getProducts());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Promotion />
            <Dress />
            <Coat />
            <Abaya />
            <Newsletter />
          </Route>
          <Route path="/createProduct" component={PostProduct} />
          <Route path="/gallery" render={() => <Gallery />} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
{
  /* <Provider store={store}>
<Router>
  <>
    <Header />
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </>
</Router>
</Provider> */
}
