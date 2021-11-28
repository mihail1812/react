import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const CounterControls = (props) => {
//   return <div>
//     <button onClick={props.onDecrement}>-</button>
//     <button onClick={props.onIncrement}>+</button>
//   </div>
// }


// const CounterViev = (props) => {
//   return <div>
//     <div>
//       счет: {props.count}
//     </div>
    
//   </div>
// }

// const Counter = (props) => {
//   return <div>
//     <CounterViev count={props.count}/>
//     <CounterControls onDecrement={props.onDecrement} onIncrement={props.onIncrement}/>
//   </div>
// }

// const AppCounter = () => {
//   const [count, setState] = useState(0)
//   return <Counter
//     count={count}
//     onDecrement={()=>{
//       console.log("-");
//       setState(count - 1);
//     }}
//     onIncrement={()=>{
//       console.log("+");
//       setState(count + 1);
//     }}
// />
// }

// const App = () => {
//   const [isOpen, setState] = useState(false)
//   const toggle = () => {
//     setState(!isOpen);
//   }

//   return <div>

//     <button 
//     style = {{backgroundColor: isOpen ? 'green' : 'red'}}
//     onClick={toggle}>
//       {
//         isOpen ? 'Close' : 'Open'
//       }
//     </button>

//     {
//       isOpen && <h1>
//         hello
//       </h1>
//     }

//   </div>
// }


const Message = (props) => {
  return <div className = 'message'>{props.message}</div>
}

const App = () => {
  const message = "Message text";
  return <div className = 'app'>
    <Message message = {message}/>
  </div>
  
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
