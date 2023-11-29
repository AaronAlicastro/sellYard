import React, { Component } from 'react';
import Home from './pages/Home';
import DetalleProducto from './pages/components/DetalleProducto';
import Login from './pages/Login';
import EditarCuenta from './pages/EditarCuenta';
import Email from './pages/components/Email';
import MenuPc from './pages/components/MenuPc';
import MenuPhone from './pages/components/MenuPhone';
import NewPassword from './pages/components/NewPassword';
import MisOrdenes from './pages/MisOrdenes';

class App extends Component {
  constructor(props) {
    super(props);
    this.ventanas = {
      index: () => <MisOrdenes />
    }
    
    this.state = {
      view: "index"
    }
  }

  goToView(view) {
    this.state = {
      view
    }
  }

  render() {
    return this.ventanas[this.state.view]();
  }
}

export default App;
