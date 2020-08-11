import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
    <div className="App">
      <Header drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
    </div>
  );
}
}


export default App;
