import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';

const Todo = ({ text, status, todo, todos, setTodo }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
 const deleteTodo = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
 };
 function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 return (
    <div className="todo">
        <li className="todo-item">{text} - {status}</li>
            <IconButton onClick={openModal} className="icons" style={{ backgroundColor: 'transparent' }}>
                <EditIcon className="edit-btn"/>
            </IconButton>
            <IconButton onClick={deleteTodo} style={{ backgroundColor: 'transparent' }}>
                <DeleteIcon className="delete-btn"/>
            </IconButton>
    </div>
 );
};

export default Todo;