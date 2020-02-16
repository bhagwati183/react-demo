import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

const App=()=> {
  console.log(data);
  return (
    <>
  <table>
    <thead>
  <tr>
    <th colSpan="2">My Bio</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th>Name</th>
      <td>{data.Name}</td>
      </tr>
    
    <tr>
      <th>Age</th>
      <td>{data.Age}</td>
    </tr>
    <tr>
      <th>Address</th>
      <td>{data.Address}</td>
    </tr>
    <tr>
      <th>Hobbies</th>
      <td>{data.Hobbies}</td>
    </tr>
    </tbody>
    </table>
    
    <button onClick={()=>ClickMe(data.Name)}>Greet</button>
    </>
   
  );
}
const ClickMe=name=>{
  return (
    alert(`hi i am,${name}`)
  )
}
export default App;

