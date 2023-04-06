import * as actionTypes from '../features/type'
export const todoReducer = (state =[],action) =>{



    // console.log(actionTypes.GETALL_TODO)
    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            return[action.payload,...state]


        case actionTypes.GETALL_TODO:
            // console.log("items called")
            // console.log(action.payload)
    
            return  action.payload      

        default:
            return state;
    }

}