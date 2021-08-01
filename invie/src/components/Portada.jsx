import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/platzi.png';
// import { connect } from  ' react-redux ' ;
// import  CSSTransitionGroup  from  ' react-addons-css-transition-group ' ;
// import  Heart  from  ' ./Heart.jsx ' ;

// function  mapStateToProps ( state ) {
//   return {
//     logo: state.logoPortada,
//     menú:  state.menu,
//     isAnimated:  state.isAnimated,
//   }
// }

class Portada extends Component {
  //   renderHeard () {
  //       const hearts =  new Array ( 100 ).fill ({})
  //     return (
  //       hearts.map (( element , index) => {
  //           const style = {
  //           left: Math.floor (( Math.random () * ( window.innerWidth  -  0 ))) +  0  +  " px ";
  //           animationDelay: Math.floor (( Matemáticas . aleatorio () * ( 10000  -  0 ))) +  0  +  " ms ";
  //         }
  //         return (
  //           < Heart  key = { index }  style = { style } />
  //         )
  //       })
  //     )
  //   }
  //   render () {
  //       return (
  //           <section  id = " portada " className = { ` portada background $ { this.props.isAnimated } ` } > 
  //       <header  id = " header " className = " header contenedor " >
  //         <figure  className = " logotipo " >
  //           <img  src = {this.props.logo} width = " 186 " height = " 60 " alt = " Invie logotipo " />
  //         </figure>
  //         <nav  className = " menu "> 
  //           <ul>

  //           {this.props.menú.map((item) => {
  //               return (
  //                 < li >
  //                   < a  href = {item.href}>{item.title}</a >
  //                 </ li >
  //               )
  //             }) }
  //           </ ul >
  //         </ nav >
  //       </header >
  //       < CSSTransitionGroup
  //         transiciónName = " animationInOut "
  //         transiciónEnterTimeout = { 800 }
  //         transiciónLeaveTimeout = { 800 }
  //       >
  //         {
  //           ! this.props.isAnimated  &&
  //           < div  className = " contenedor "  key = " portada " >
  //             < h1  className = " titulo " > Guitarras < span > invie </ span > sibles </ h1 >
  //             < h3  className = " title-a " > Sé la estrella de rock que siempre quisiste ser </ h3 >
  //             <a  className = " botón "  href = " #guitarras " > Conoce más </a >
  //           </ div >
  //         }
  //       </ CSSTransitionGroup >
  //       {
  //         this.props.isAnimated  &&
  //         this.renderHeart ()
  //       }
  //     </section>
  //   )
  // }
  render() {
    return (
      <div className="Portada">
      <div className="Portada_container">
        <div className="Portada_logo">
        <img src={logo} alt=""/>
        </div>
        <div className = "menu">
          <ul>
          <li >
            <Link to ="/portada">Home</Link>
          </li >
          <li >
          <Link to ="/guitarras">Guitarras</Link>
          </li >
          <li >
          <Link to ="/portada">Home</Link>
          </li >
          </ul>
        </div>

        <div  className = "contenedor">
            <h1  className = " titulo "> Guitarras <span > invie </span > sibles </h1 >
            <h3  className = " title-a "> Sé la estrella de rock que siempre quisiste ser </h3 >
            <Link  className = " botón "  to = "/guitarras"> Conoce más </Link >
        </div >
      </div>
    </div>
    )
  }
}

export default Portada;

// export default connect( mapStateToProps ) (Portada);