import React from "react";
// function Greeting() {
//   return <span>Hello</span>;
// }

// function Mentor() {
//   const mentors = ["Benyamin", "Alireza", "Maryam", "Mahjan", "Bahar"];
//   return <span>{mentors.join(" , ")}</span>;
// }

// function Addition() {
//   return <span>{1 + 2 + 3}</span>;
// }

// function Weather() {
//   // abject
//   const weatherDate = {
//     temperature: 5,
//     location: "London",
//   };
//   return (
//     <h5>
//       {" "}
//       the temperature in {weatherDate.location}is {weatherDate.temperature}
//     </h5>
//   );
// }


// function formatName(userr){
//     return userr.firstName+" "+ userr.lastName;
// }
// function Name(){
//     const user={
//         firstName:"shiva",
//         lastName:"Moeini"
//     };
//     return <h1>{formatName(user)}</h1>
// }

// const mentors=["shiva","shila","rena","dina"];
// function MentorList(){
// return(
//     <ol>
//         {mentors.map((name)=>(
//            <li>{name}</li>
//         ))}
//     </ol>
// )
// }
// function App() {
//   return (
//     <div>
//       <Greeting />
//       <Mentor />
//       <br />
//       =================================
//       <br />
//       <Addition />
//       <br />
//       =================================
//       <br />
//       <Weather />
//       <br />
//       =================================
//       <br />
//       <Name/>
//       <br />
//       =================================
//       <br />
//       <MentorList/>
//     </div>
//   );
// }

// export default App;


// import React ,{useState}from "react";

//  export default function Example(){
//   const [count,setCount]=useState(0);

//   return(
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={()=>setCount(count+1)}>clicked me</button>
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react';

// export default function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

// import React, { useState, useEffect } from 'react';

// export default function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


class Example extends React.Component{
  constructor(){
    super();
    this.state={
count:0
    };
  }

 render(){
  return(
    <div>
      <p>your clicked {this.state.count} times</p>
      <button onClick={()=>this.setState({count:this.state.count+1})}>clicked me</button>
    </div>
  )
 }
}
export default Example;



// Hook and function Components
// 1)

// const Example=(props)=>{
//   // you can use Hooks here!
//   return <div/>
// }

// 2)
// function Example(props){
//   // you can use hooks hrer!
//   return <div/>
// }