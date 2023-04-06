import { Card } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/api";
import Todos from "./Todos";
import { useNavigate } from "react-router-dom";


const TodoForm = () => {
    const [text, setText] = useState("");
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const onFormSubmit = async(e) => {
        e.preventDefault();
        const a=dispatch(addNewTodo(text));
        setText('');
        if( a){
            navigate("/todoitem")
        }else{
            navigate("/todo")
            console.log("Hello world")
        }

    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }
    // console.log(text)
    // console.log("Hello")
    return (
       <div className="d-flex justify-content-center">
         <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            /> 
<br />
           <button type="submit" style={{margin:"10px",padding:"5px" ,border:"10px" }}>AddTodo</button> 
        </form>
       
       {/* <Card >{text}</Card> */}
       {/* <Todos /> */}
       </div>
        

    )
}
export default TodoForm;