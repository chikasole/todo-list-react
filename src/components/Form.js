import React from "react";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Form = ({ inputText, status, setStatus, setInputText, todos, setTodo }) => {
    const inputTextHolder = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const statusHolder = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    };
    const submitTodoHolder = (e) => {
        e.preventDefault();
        setTodo([
            ...todos, {text: inputText, status: status, completed: false, id: Math.random() * 1000 },
        ]);
    };
    return (
        <form>
            <input onChange={inputTextHolder} type="text" className="todo-input" />
            <select id="status" name="status" onChange={statusHolder}>
                <option value="Not started">Not started</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
            </select>
            <IconButton variant="contained" onClick={submitTodoHolder} className="todo-button" type="submit">
                <AddCircleOutlineIcon className="add-btn"/>
            </IconButton>
        </form>

    );
};

export default Form;