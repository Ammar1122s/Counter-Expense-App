import React, { useContext, useEffect,useState } from 'react'
import {Text,View,StyleSheet,Alert} from "react-native"
import ButtonIcon from '../Components/ButtonIcon'
import {GlobalStyles} from "../Components/Colors"
import CustomButton from '../Components/CustomButton'
import { ExpenseContext } from '../store/Expense-Context'
import Input from '../Components/Input'
import {DateFormate} from "../Components/ExpenseOutput/DateFormate" 
import {deleteData, storeExpense, updateData} from "../Components/http"





function ManageExpense(props) {
  const expenseContxt = useContext(ExpenseContext);

  const expenseId = props.route.params?.expenseId
  
  const selecedExpense = expenseContxt.expense.find(
    (expense) => expense.id === expenseId)

  const [inputValues , setInputValue] = useState({
    amount:selecedExpense ? selecedExpense.amount.toString() : '',
    description:selecedExpense ? selecedExpense.description : '',
    date:selecedExpense ? DateFormate(selecedExpense.date): ''
})

function inputHandler(identifier,enteredValue){

  setCheck(false)
  if(identifier=== 'amount'){
    setAmountCheck(true)
  }
  if(identifier=== 'date'){
    setDateCheck(true)
  }
  if(identifier=== 'description'){
    setDesCheck(true)
  }
  
    setInputValue((currentInputs)=>{
      if (identifier === "date"  ) {
        return{
          ...currentInputs,
           [identifier]:new Date(enteredValue)     
      } 
      }
      else{
        return{
          ...currentInputs,
           [identifier]:enteredValue 
          
      } 
      }
    
    
    
 })

}

  const isEdit = !!expenseId

  useEffect(() =>
    props.navigation.setOptions(
      {
        title: isEdit ? "Update the Expense" : "Add the Expenss"
      }
),[])

async function onPressDelHandler(){
  await deleteData(expenseId)
  expenseContxt.deleteExpense(expenseId)





  props.navigation.goBack();
}
function cancelHandler(){
  props.navigation.goBack();

}
async function updateHandler(){
  if(!validAmount){
    setAmountCheck(false)
  }
  if(!validDate){
    setDateCheck(false)
  }
  if(!validDes){
    setDesCheck(false)
  
  }
  
  if (!validAmount || !validDate || !validDes){
    setCheck(true)
    return;
  }
  const submit1 ={
    amount: +inputValues.amount,
    date: new Date(inputValues.date),
    description: inputValues.description
  }

  expenseContxt.updateExpense(
    expenseId,submit1)

    await updateData(expenseId,submit1)


  props.navigation.goBack();
}

const validAmount = !isNaN(inputValues.amount) && inputValues.amount > 0
const validDate = inputValues.date.toString() !== "Invalid Date" && inputValues.date !== '' ? true : false 
const validDes = inputValues.description.trim().length > 0

const [check, setCheck] = useState(false)

const [amountCheck, setAmountCheck] = useState(true)
const [dateCheck, setDateCheck] = useState(true)
const [DesCheck, setDesCheck] = useState(true)

async function addHandler(){

if(!validAmount){
  setAmountCheck(false)
}
if(!validDate){
  setDateCheck(false)
}
if(!validDes){
  setDesCheck(false)

}

if (!validAmount || !validDate || !validDes){
  setCheck(true)
  return;
}


  const submit ={
    amount: +inputValues.amount,
    date: new Date(inputValues.date),
    description: inputValues.description
  }

const id = await storeExpense(submit)
expenseContxt.addExpense({...submit, id:id})



  props.navigation.goBack();
}

  return (
    <>
    <View style={styles.mian}>

    <View style={{width:"100%"}}>
    <View  style={styles.main1} >
        <Text style={styles.mainTitle}>Your Expense</Text>
        <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>

        <Input label = "Amount" InputConfig={{
           keyboardType:"decimal-pad",
        }} handler = {inputHandler.bind(this,'amount')}
        value={inputValues.amount}
        check= {amountCheck}/>


        <Input label = "Date" InputConfig={{
            placeholder:"YYYY-MM-DD",
            maxLength:10,
        }} handler = { inputHandler.bind(this,'date')}
        value={inputValues.date}
        check={dateCheck}/>
        </View>

        <Input label = "Description" InputConfig={{
            multiline:true,
        }}
        handler = {inputHandler.bind(this,'description')}
        value={inputValues.description}
        check={DesCheck}/>
        
        {
          check && <Text style={styles.errorText}>Invalid Data -- Please Check your Inputs</Text> 
        }

    </View>
   
    </View>






    
    {
      isEdit ? ( 
        <>
        <View style={styles.button}>
        <CustomButton title="Cancel" onPress={cancelHandler}/>
        <CustomButton title="Update" onPress={updateHandler}/>
        </View>
        <View style={styles.deleteContainer}>
        <ButtonIcon icon = "trash" color={GlobalStyles.colors.error500} onPress={onPressDelHandler}/>
        </View>
        </>
      ) : (
      <View style={styles.button}>
        <CustomButton title="Cancel" onPress={cancelHandler}/>
        <CustomButton title="Add" onPress={addHandler}/>
      </View>
      )
    }
    </View>
    </>
   
  )
}








export default ManageExpense

const styles = StyleSheet.create({
  deleteContainer:{
    marginTop:20,
    borderTopWidth:1,
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    borderTopColor:"white"

  },
  mian:{
    flex:1,
    alignItems:"center",
    backgroundColor:GlobalStyles.colors.primary800
  },
  button:{
    marginTop:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    width:"100%"
  },
  main1:{
    padding:20,
},
mainTitle:{
    color:"white",
    fontWeight:"bold",
    fontSize:25,
    textAlign:"center",
    marginTop:20,
    marginBottom:10
},
errorText:{
  textAlign:"center",
  color:"red",
  marginTop:15,
  marginBottom:-10
}
})