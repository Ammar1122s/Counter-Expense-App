import React, { useEffect,useContext,useState } from 'react'
import {Text,StyleSheet} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import ButtonIcon from '../Components/ButtonIcon'
import ExpenseOutput from '../Components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../store/Expense-Context'
import { Past7days } from '../Components/ExpenseOutput/DateFormate'
import { fetchExpense } from '../Components/http'



function RecentExpense(props) {

  

  useEffect(()=>{
    async function gettingResponse(){
      const expense = await fetchExpense();

      expenseContxt.setExpense(expense);      
      }
      gettingResponse();
  },[props.navigation])

 useEffect(()=>{  props.navigation.setOptions({
  headerRight: (props)=>{
      return(
        <ButtonIcon icon="add-outline" color={props.tintColor} onPress={buttonPressHandler}/>              
      )
    }  
})},[])

  function buttonPressHandler(){
    props.navigation.navigate("ManageExpense")
  }

  const expenseContxt =  useContext(ExpenseContext)

  const today = new Date();

 const past7Date = Past7days(today,7)
  const recentExpense = expenseContxt.expense.filter((expense) =>
  {
    return expense.date > past7Date
  })


   
  return (
    <>
     
    <ExpenseOutput ExpensePeriod="Last 7 Days" expense = {recentExpense} empty= {recentExpense.length}/>
    
    
 </>
  )
}

export default RecentExpense

const styles = StyleSheet.create({
    button:{
        opacity:0.3,
    }
})