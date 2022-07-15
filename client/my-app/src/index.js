import React from 'react';
import ReactDOM from 'react-dom/client';

function formatName(user){
return user.firstName+' '+user.lastName;
}
const user={
  firstName:"shiva",
  lastName:"moeini"
};
const element=<h1>Welcome , {formatName(user)} ReactJS</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<h1>{element}</h1>
);
