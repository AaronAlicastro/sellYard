import React, { Component } from 'react';
import Querys from './pages/logic/querys';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from "./pages/Home";
import EmailPropm from "./pages/EmailPromp";
import DetalleProducto from './pages/DetalleProducto';
import ShoppingCart from "./pages/ShoppingCart";

class App extends Component {
  constructor(props) {
    super(props);
    this.querys = new Querys();

    this.ventanas = {
      login: () => <Login
        goToView={(view, dataView) => this.goToView(view, dataView)}
      />,
      signIn: () => <SignIn
        goToView={(view, dataView) => this.goToView(view, dataView)}
      />,
      home: () => <Home
        goToView={(view, dataView) => this.goToView(view, dataView)}
        querys={this.querys}
      />,
      detalleProducto: (data) => <DetalleProducto
        goToView={(view, dataView) => this.goToView(view, dataView)}
        querys={this.querys}
        product={data.product}
      />,
      shoppingCart: () => <ShoppingCart
        goToView={(view, dataView) => this.goToView(view, dataView)}
        products={this.querys.cartProductsAdded}
      />,
      emailPropm: () => <EmailPropm
        goToView={(view, dataView) => this.goToView(view, dataView)}
      />
    }

    this.state = {
      view: "login",
      dataView: {}
    }
  }

  goToView(view, dataView) {
    this.setState({
      view,
      dataView
    });
  }

  render() {
    return this.ventanas[this.state.view](this.state.dataView);
  }
}

export default App;
