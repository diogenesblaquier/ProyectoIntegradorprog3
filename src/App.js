import React from 'react'
import Footer from './components/Footer/Footer'
import Api from './components/Canciones/Canciones';

function App() {
  return (
    <React.Fragment>
      <Api/>
      <Footer />
    </React.Fragment>
  );
}

export default App;


