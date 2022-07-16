import React from "react";
function Greeting() {
  return <span>Hello</span>;
}

function Mentor() {
  const mentors = ["Benyamin", "Alireza", "Maryam", "Mahjan", "Bahar"];
  return <span>{mentors.join(" , ")}</span>;
}

function Addition() {
  return <span>{1 + 2 + 3}</span>;
}

function Weather() {
  // abject
  const weatherDate = {
    temperature: 5,
    location: "London",
  };
  return (
    <h5>
      {" "}
      the temperature in {weatherDate.location}is {weatherDate.temperature}
    </h5>
  );
}


function formatName(userr){
    return userr.firstName+" "+ userr.lastName;
}
function Name(){
    const user={
        firstName:"shiva",
        lastName:"Moeini"
    };
    return <h1>{formatName(user)}</h1>
}

const mentors=["shiva","shila","rena","dina"];
function MentorList(){
return(
    <ol>
        {mentors.map((name)=>(
           <li>{name}</li>
        ))}
    </ol>
)
}
function App() {
  return (
    <div>
      <Greeting />
      <Mentor />
      <br />
      =================================
      <br />
      <Addition />
      <br />
      =================================
      <br />
      <Weather />
      <br />
      =================================
      <br />
      <Name/>
      <br />
      =================================
      <br />
      <MentorList/>
    </div>
  );
}

export default App;
