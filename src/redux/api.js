import axios from 'axios'

 import { ADDNEW_TODO,GETALL_TODO } from './features/type';

const API = axios.create({baseURL:"http://localhost:5000"});  

export  const signIn =  (formData) => API.post("/login",formData)
export const signUp  = (formData) =>API.post('/signup',formData) 

export const googleSignIn = (result) =>API.post('/googlesignIn');

// export const addNewTodo = (data) => API.post('/todo',data)


// export const createTour = (tourData) =>API.post('/createTour',tourData) 

// export const addNewTodo = (data) => async (dispatch)=>{
//     try{
//         const res = API.post('/todo',{data}) 

//         dispatch({type:ADDNEW_TODO, payload:res.data})
//     }

//     catch (error){

//         console.log("error while calling the api",error.message)

//     }
// }





const API_URL = 'http://localhost:5000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/todo', { data });

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAlltodos = () =>async(dispatch) =>{

    try {
        const res = await axios.get('http://localhost:5000/gettodos');
        // console.log(res)
        console.log("hello")
        console.log(res)
        dispatch({ type: GETALL_TODO , payload: res.data });
        

    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }


}
