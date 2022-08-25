import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import RecentExpense from './Screens/RecentExpense';
import TotalExpense from './Screens/TotalExpense';
import ManageExpense from './Screens/ManageExpense';
import {Ionicons} from "@expo/vector-icons"

import {TransitionPreset,CardStyleInterpolators} from "@react-navigation/stack"



import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { GlobalStyles } from './Components/Colors';
import ExpenseContextProvider from './store/Expense-Context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs(){
  return(
  <Tab.Navigator sceneContainerStyle={{backgroundColor:GlobalStyles.colors.primary700}} 
  screenOptions={{ tabBarActiveTintColor:"yellow", headerStyle:{
    backgroundColor:GlobalStyles.colors.primary500,
  },
  headerTintColor:"white",
  tabBarStyle:{
    backgroundColor:GlobalStyles.colors.primary500,
  }
  }}>
    <Tab.Screen name='RecentExpense' component={RecentExpense} options={{
      tabBarIcon:({color,size})=>{
        return(
          <Ionicons name='timer' size={size} color={color}/>
        )
      },
    }}/>
    <Tab.Screen name='TotalExpense' component={TotalExpense} options={{
      tabBarIcon:({color,size})=>{
        return(
          <Ionicons name='calendar-sharp' size={size} color={color}/>
        )
      }}}/>
  </Tab.Navigator>
  )

}

export default function App() {
  return (
    <ExpenseContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
    headerStyle:{
    backgroundColor:GlobalStyles.colors.primary500,
  },
  headerTintColor:"white",
  presentation:"modal",

}
  }>
        <Stack.Screen name='Tab' component={BottomTabs} options={{headerShown:false}}/>
        <Stack.Screen  name='ManageExpense' component={ManageExpense}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
    
  );
}

