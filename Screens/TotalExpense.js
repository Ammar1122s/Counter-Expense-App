import React, { useContext } from 'react'
import {Text} from "react-native"
import ExpenseOutput from '../Components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../store/Expense-Context'

function TotalExpense(props) {

  const expenseContxt =  useContext(ExpenseContext)

  return (
    <ExpenseOutput ExpensePeriod="Total Expense" expense = {expenseContxt.expense} 
    empty = {expenseContxt.expense.length}/>
  )
}

export default TotalExpense