import React from 'react';
import {useState} from 'react';
import {  useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "../base.js";
import firebase from 'firebase';
 function PopularPage() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const [title, setTitle] = useState('');
const [image_url, setitemUrl] = useState('');

const [itemDescription, setitemDescription] = useState('');
const [itemPrice, setitemPrice] = useState('');
const handleOnChange = (e) => {
  setTitle(e.target.value);

};

  const handleOnChangeDescription = (e) => {
    setitemDescription(e.target.value);
  };
  const handleOnChangeitemPrice = (e) => {
    setitemPrice(e.target.value);
  };
  const handleOnChangeItemUrl= (e) => {
    setitemUrl(e.target.value);
  };
const createTodo = () => {
  const todoRef = app.database().ref('PopularItems');
  const todo = {
    title,image_url,itemDescription,itemPrice
  };

  todoRef.push(todo);
};
 
const [todoList, setTodoList] = useState();

useEffect(() => {
  const todoRef = app.database().ref('PopularItems');
  todoRef.on('value', (snapshot) => {
    const todos = snapshot.val();
    const todoList = [];
    for (let id in todos) {
      todoList.push({ id, ...todos[id] });
    }
    setTodoList(todoList);
  });
}, []);



return (

  <div className="container">

<br></br>
    <Button variant="primary" onClick={handleShow}> Add Today's Special Menu </Button>
   <div></div>
   <br></br>

 

    <Modal size="lg" show={show} onHide={handleClose}>

      <Modal.Header closeButton>

        <Modal.Title>Add Popular New Items. </Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <label for="exampleInputEmail1">Item Name</label>

      <input class="form-control form-control-lg" type="text" onChange={handleOnChange} placeholder="Item Name" value ={title} required ></input>
      <label for="exampleInputEmail1">Description</label>
      <input class="form-control form-control-lg" type="text" onChange={handleOnChangeDescription} placeholder="Item Description" required value ={itemDescription}></input>
      <label for="exampleInputEmail1">Image Url</label>
      <input class="form-control form-control-lg" type="text" onChange={handleOnChangeItemUrl} placeholder="Item Url" required value ={image_url}></input>
      <label for="exampleInputEmail1">Item Price</label>
      <input class="form-control form-control-lg" type="text" onChange={handleOnChangeitemPrice} placeholder="Item Price" required value ={itemPrice}></input>
     
     

      </Modal.Body>

      <Modal.Footer>

        <Button variant="secondary" onClick={handleClose}> Close</Button>

        <Button variant="primary" onClick={createTodo}>

          Save It!

        </Button>

      </Modal.Footer>

    </Modal>



    <div>


<table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Item Name</th>
                    <th>Item Image</th>
                    <th>Item Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {todoList ? todoList.map((todo) =>  {
                
                return (
                    <tr>     
                    <td>{todo.title}</td>
                    <img class="itemImage" src={todo.image_url}></img>
                    <td>{todo.itemDescription}</td>
                    <td>{todo.itemPrice}</td>
                    
                    </tr>
                    
                );
               
                }):''}
        
               
            </tbody>
            
         </table>
  
</div>





  </div>











);

}

export default PopularPage;