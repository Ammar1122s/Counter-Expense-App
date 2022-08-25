import React, {useState} from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Input from "../Components/Input"

function ExpenseForm() {

    const [inputValues , setInputValue] = useState({
        amount:'',
        description:'',
        date:''
    })

    function inputHandler(identifier,enteredValue){
        setInputValue((currentInputs)=>{
        return{
            ...currentInputs,
            [identifier]:enteredValue
        }
      
     })
    }
  return (
    <View  style={styles.main} >
        <Text style={styles.mainTitle}>Your Expense</Text>
        <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
        <Input label = "Amount" InputConfig={{
           keyboardType:"decimal-pad",
           onChaneText: inputHandler.bind(this,'amount'),
           //value: inputValues.amount,
        
        }}/>
        <Input label = "Date" InputConfig={{
            placeholder:"YYYY-MM-DD",
            maxLength:10,
            onChaneText: inputHandler.bind(this,'date'),
           // value:inputValues.date
        }}/>
        </View>
        <Input label = "Description" InputConfig={{
            multiline:true,
            onChaneText: inputHandler.bind(this,'description'),
            //value:inputValues.description
        }}/>
        

    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
    main:{
        padding:20,
    },
    mainTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:25,
        textAlign:"center",
        marginTop:20,
        marginBottom:10
    }
})

