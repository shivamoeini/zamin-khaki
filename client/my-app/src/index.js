import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
// function Welcome(props){
//   return <h1>Hello,{props.name}</h1>
// }

// function App(){
//   return(
//     <div>
//       <Welcome name="sara"/>
//       <Welcome name="shiva"/>
//       <Welcome name="shila"/>
//     </div>
//   );
// }
// 1) We call root.render() with the <Welcome name="Sara" /> element.
// 2) React calls the Welcome component with {name: 'Sara'} as the props.
// 3) Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// 4) React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//          src={props.user.avatarUrl}
//          alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <React.StrictMode>
//   <App />
// </React.StrictMode>,)



// function Clock(props){
//   return(
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>it's {props.date.toLocaleTimeString()}.</h2>
//     </div>
//  )
 
// }
// class Clock extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello,World!</h1>
//         <h2>it is {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }
// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//       this.state={date:new Date()};
//     }
//     render(){
//       return(
//         <div>
//         <h1>Hello,World</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       )
//     }

//   }
// class Clock extends React.Component{
//   constructor(){
//     super();
//     this.state={date:new Date()};
//   }
//   componentDidMount(){
//     this.timerID=setInterval(
//       ()=>this.tick(),1000
//     );
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerID)
//   }
//   tick(){
//    this.setState({
//      date:new Date()
//    });
//   }
  
//  render(){
//   return(
//     <div>
//       <h1>Hello,World!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//     </div>
//   )
//  }
// }
  const root = ReactDOM.createRoot(document.getElementById('root'));

  // root.render(<Clock />)
  root.render(<App/>)

