import React, { Component } from 'react';
import './App.css';

// import FullPageVideo from './components/fullPageVideo/FullPageVideo';
// import Dropdown from './components/dropdown/Dropdown';
import SideNav from './components/sidenav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav fullWidth={false} animate={true} openRight={false} overlay={true}/>
      </div>
    );
  }
}

export default App;
