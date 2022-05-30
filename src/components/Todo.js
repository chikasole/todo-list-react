import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ text, status, todo, todos, setTodo }) => {
 const deleteTodo = () => {
    setTodo(todos.filter((el) => el.id !== todo.id));
 };

 return (
    <div className="todo">
        <li className="todo-item">{text} - {status}</li>
            <IconButton style={{ backgroundColor: 'transparent' }}>
                <EditIcon className="edit-btn"/>
            </IconButton>
            <IconButton onClick={deleteTodo} style={{ backgroundColor: 'transparent' }}>
                <DeleteIcon className="delete-btn"/>
            </IconButton>
    </div>
 );
};

export default Todo;
