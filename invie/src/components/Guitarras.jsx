import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from  ' react-redux ' ;
// import CSSTransitionGroup  from  ' react-addons-css-transition-group ' ;

function  mapStateToProps ( store ) {
  return  {
    guitarras: store.guitarras,
  }
}

class  Guitarras  extends  Component {
  render() {
    return (
      // < section  id = " guitarras "  className = " guitarras contenedor " >
      //   < h2 > Nuestras guitarras </ h2 >
      //   {
      //     this.apoyos.guitarras.map(( guitarra, indice ) => {
      //       return (
      //         <article  className = " guitarra "  key={ index } >
      //           < CSSTransitionGroup
      //             transiciónName = " parpadeo "
      //             transiciónEnterTimeout = { 500 }
      //             transitionLeaveTimeout = { 500 }
      //             >
      //             < img
      //               className = " guitarra-image "
      //               clave = { guitarra.imagen }
      //               src = { guitarra.imagen }
      //               alt = { guitarra.alt }
      //               ancho = " 350 "
      //             />
      //           </ CSSTransitionGroup >
      //           < CSSTransitionGroup
      //             transiciónName = " fade "
      //             transiciónEnterTimeout = { 300 }
      //             transiciónLeave = { false }
      //           >
      //             <div  className = " contenedor-guitarra "  key = { guitarra.name } >
      //               <h3  className = " guitarra-name " > { guitarra.name } </h3>
      //               <ol>
      //                 { guitarra.características.map(( característica, indice ) => {
      //                   return (
      //                     <li  key={ index }> { feature } </ li >
      //                   )
      //                 })}
      //               </ol>
      //             </div>
      //           </ CSSTransitionGroup >
      //         </article>
      //       )
      //     })
      //   }
      // </section>
      <div className="Guitarras">
        <div className="container">
        < h2 > Nuestras guitarras </ h2 >
        <Link to='/portada' >Home</Link>
        </div>
      </div>
    );
  }
}

export default  ( mapStateToProps ) ( Guitarras );