import { useEffect } from "react"

import { getAlltodos } from "../redux/api"

import { useDispatch,useSelector } from "react-redux"
import Todo from "./Todo"
import Header from "./Header"
import { Card } from "@material-ui/core"
const Todos = () =>{

    const dispatch = useDispatch() 
    //  console.log(todos)
    useEffect (()=>{
        dispatch(getAlltodos())

    },[dispatch])
    const todos = useSelector(state => state.todo)

     console.log(todos)
    // const totaltodos=todos[0] 
    // console.log(totaltodos)
    // console.log(totaltodos)
// console.log("hi veera")

    
    return(

        <div >
            <h3 style={{fontSize:'34px', color:"Blue" , padding:"20px"}}>List of Todos</h3>  
            <ul>
          {
            todos.map((todo,indx)=>(
                <Card style={{backgroundColor:"pink",margin:"14px"}}>
                    
                    <h4>{todo.data}</h4> 
                    <span>{todo.createdAt}</span>
                    <i className="fa fas-trash"></i>
               
                </Card>
            ))
          }
            </ul>
        </div>
    )
}

export default Todos