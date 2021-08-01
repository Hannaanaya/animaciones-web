import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/invie.css';
import './css/animations.css' ;
// import { Provider }  from  '' ;
// import { createStore }  from  'redux' ;

// import reducers from './reducers';

// const store = createStore(
//   reducers,
//   {}
// );

// ReactDOM.render (
//   <Provider store  = { store } >
//     < App />
//   </Provider >,
//   document.getElementById ( 'root' )
// );

ReactDOM.render(
	<App />,
	document.getElementById('root')
)