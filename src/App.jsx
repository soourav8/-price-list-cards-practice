import React from 'react';
import Nav from './components/Nav';
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>

      
    </div>
  );
};

export default App;