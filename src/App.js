import React from 'react'
import Footer from './components/Footer/Footer'
import Api from './components/Canciones/Canciones'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Api/>
      <Footer />
    </React.Fragment>
  );
}

export default App;


