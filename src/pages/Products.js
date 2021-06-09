import React from 'react';
import {useState} from 'react';
import {  useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "../base.js";
import firebase from 'firebase';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from '../components/Navbar.js';

 function Products() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [value,setValue]=useState('');
const handleSelect=(e)=>{
  console.log(e);
  setValue(e)
}

const [itemName, setTitle] = useState('');
const [itemDEscription, setitemDescription] = useState('');
const [itemPrice, setItemPrice] = useState('');
const [image_url, setitemUrl] = useState('');

const handleOnChange = (e) => {
  setTitle(e.target.value);

};
const handleOnChangePrice = (e) => {
  setItemPrice(e.target.value);
};
  const handleOnChangeDescription = (e) => {
    setitemDescription(e.target.value);
  };
  const handleOnChangeItemUrl = (e) => {
    setitemUrl(e.target.value);
  };
const createTodo = () => {
  const todoRef = app.database().ref('Products/'+value);
  const todo = {
    itemName,itemDEscription,itemPrice,image_url
  };

  todoRef.push(todo);
};
 
const [todoList, setTodoList] = useState();

useEffect(() => {
  const todoRef = app.database().ref('Products/Sider');
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
    <Button variant="primary" onClick={handleShow}> Add New Food Item </Button>

 <div>
   <br></br>
 </div>

    <Modal size="lg" show={show} onHide={handleClose}>

      <Modal.Header closeButton>

        <Modal.Title>Add  New Items. </Modal.Title>

      </Modal.Header>

      <Modal.Body>
<form>
      <label for="exampleInputEmail1">Item Name</label>

      <input class="form-control form-control-lg" type="text" onChange={handleOnChange} placeholder="Item Name" value ={itemName} required ></input>
      <label for="exampleInputEmail1">Team Description</label>
      <input class="form-control form-control-lg" type="text" onChange={handleOnChangeDescription} placeholder="Item Description" required value ={itemDEscription}></input>
      <label for="exampleInputEmail1">Item Url</label>

      <input class="form-control form-control-lg" type="text" onChange={handleOnChangeItemUrl} placeholder="Item Url" required value ={image_url}></input>
      <label for="exampleInputEmail1">Item Price</label>
    

      <input class="form-control form-control-lg" type="text" onChange={handleOnChangePrice} placeholder="Item Price" value ={itemPrice}></input>

      <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
              <Dropdown.Item eventKey="Burger">Burger</Dropdown.Item>
              <Dropdown.Item eventKey="Sider">Sider</Dropdown.Item>
              
              <Dropdown.Item eventKey="Rolls">Rolls</Dropdown.Item>
              <Dropdown.Item eventKey="Platters">Palatters</Dropdown.Item>

              <Dropdown.Item eventKey="Juniours">Juniours</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
      </form>
      </Modal.Body>

      <Modal.Footer>

        <Button variant="secondary" onClick={handleClose}> Close</Button>

        <Button variant="primary" onClick={createTodo}>

          Save It!

        </Button>

      </Modal.Footer>

    </Modal>

    <div>

      

<div class ="container">     


<table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Item Name</th>
                    <th>Item Image</th>
                    <th>Item Dsscription</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {todoList ? todoList.map((todo) =>  {
                
                return (
                    <tr>     
                    <td>{todo.itemName}</td>
                    <td>
                    
                    <img class="itemImage" src={todo.image_url}></img>
                    </td>
                    <td>{todo.itemDEscription}</td>
                    <td>{todo.itemPrice}</td>
                    <td></td>
                    
                    </tr>
                    
                );
               
                }):''}
        
               
            </tbody>
            
         </table>

         </div>
  
  </div>
  
    </div>

);

}

export default Products;