import React from 'react';
import ReactDOM from 'react-dom/client';

function Welcome(props){
  return <h1>Hello,{props.name}</h1>
}

function App(){
  return(
    <div>
      <Welcome name="sara"/>
      <Welcome name="shiva"/>
      <Welcome name="shila"/>
    </div>
  );
}
// 1) We call root.render() with the <Welcome name="Sara" /> element.
// 2) React calls the Welcome component with {name: 'Sara'} as the props.
// 3) Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// 4) React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.



const root = ReactDOM.createRoot(document.getElementById('root'));
const element=<Welcome name="shiva"/>
root.render(
 <App/>
);
