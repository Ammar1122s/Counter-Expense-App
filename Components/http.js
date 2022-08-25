import axios from "axios";

const URL = 'https://practice-app-e8584-default-rtdb.firebaseio.com'

export async function storeExpense(expenseData){

    const response = await axios.post(URL +'/expense.json',expenseData)

    const id = response.data.name
    return id;

}

export async function fetchExpense(){

    const response = await axios.get(URL +'/expense.json')

    const expense = []

    for (const key in response.data){
        const expenseObj ={
            amount: response.data[key].amount,
            date : new Date(response.data[key].date),
            description: response.data[key].description
        }
        expense.push(expenseObj)
    }
    return expense;

}

export function updateData (id,expenseData){
    return axios.put(URL + `/expense/${id}.json`,expenseData)
}

export function deleteData (id){
    return axios.delete(URL + `/expense/${id}.json`)
}