import {createContext, useReducer} from "react"
import { DummyExpense } from "../Components/ExpenseOutput/DummyExpense";


export const ExpenseContext = createContext({
    expense:[],
    setExpense : (expense) => {},
    addExpense:({description,date,amount})=>{},
    deleteExpense : (id)=>{},
    updateExpense : (id,{description,date,amount})=>{}
})

function expenseReducer(state,action){
    switch (action.type){
        case "ADD":
            return [action.payload  , ...state ];

        case "SET":
            const reverse = action.payload.reverse();
            return reverse;

        case "UPDATE":
      

        const updateItemIndex = state.findIndex(
        (expense)=>
         expense.id === action.payload.id)

         const itemUpdate = state[updateItemIndex];

         const newUpdatedItem = {...itemUpdate , ...action.payload.data}

         const updatedExpense = [...state]

         updatedExpense[updateItemIndex] = newUpdatedItem

         return updatedExpense;

        case "DELETE":

        return state.filter((expense) => expense.id !== action.payload )

        default :
        return state;

    }

}

function ExpenseContextProvider({children}){
    const [expenseState, dispatch] = useReducer(expenseReducer,[]);

    function addExpense(expenseData){
        dispatch({type:"ADD" , payload:expenseData})
    }

    function setExpense (expense){
        dispatch({type:"SET" , payload:expense})
    }

    function deleteExpense (id){
        dispatch({type:"DELETE" , payload : id})
    }

    function updateExpense (id,expenseData){
        dispatch({type:"UPDATE" , payload : {id:id, data : expenseData}})
    }

 

const value = {
    expense: expenseState,
    addExpense:addExpense,
    setExpense:setExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense
}


    return(
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider