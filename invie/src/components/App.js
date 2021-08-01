import React, { Component } from 'react';
import '../css/invie.css';
import Portada from './Portada.jsx';
import Guitarras from './Guitarras.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render () {
    return (
      <section className="Invie">
        <Portada />
        {/* Portada */}
        <Guitarras />
        {/* Guitarras */}
        <Footer/>
        {/* Footer */}
      </section>
    );    
  }
}

export default App;
