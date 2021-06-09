import React from 'react';
import {useState} from 'react';
import {  useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import app from "../base.js";

 function BookingPage() {


const [todoList, setTodoList] = useState();

useEffect(() => {
  const todoRef = app.database().ref('booking');
  todoRef.on('value', (snapshot) => {
    const todos = snapshot.val();
    const todoList = [];
    for (let id in todos) {
      todoList.push({ id, ...todos[id] });
    }
    setTodoList(todoList);
  });
}, []);


 return(
<div class ="container">     


<table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
  <th scope="col">Name</th>
  <th scope="col">Email</th>
  <th scope="col">Date</th>
  <th scope="col">Number of People</th>
  <th scope="col">Time</th>

  
  </tr>
  </thead>
  
      <tbody>
      
  {todoList ? todoList.map((todo) => {
    return(


   
<tr>
  <td>{todo.name}</td>
  <td>{todo.email}</td>
  
  <td>{todo.bookingDate}</td>
  <td>{todo.numberofGuest}</td>
  <td>{todo.bookingTime}</td>
  </tr>

  );
    }): ''}
  
  
  </tbody>
  </table>
  

  </div>
  
);

 }

export default BookingPage;