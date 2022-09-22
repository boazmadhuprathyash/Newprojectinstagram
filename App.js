import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Icons from 'react-native-vector-icons/MaterialIcons'

import Icons from 'react-native-vector-icons/dist/FontAwesome';

import Login from "./src/Login";
import flexbox from "./src/Flexbox";
import Home from "./src/Drawer/Home";
import Profile from "./src/Drawer/Profile";
import DrawerContent from "./src/Drawer/DrawerContent";
import Settings from "./src/Drawer/Settings";
import AboutUs from "./src/Drawer/AboutUs";
import Cart from "./src/Tab/Cart";
import Category from "./src/Tab/Category";
import Order from "./src/Tab/Order";
import Search from "./src/Tab/Search";
import Shop from "./src/BottomTab/Shop";
import Supercoin from "./src/BottomTab/Supercoin";
import Credit from "./src/BottomTab/Credit";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'Login'
        component = { Login }
        options = {{ headerShown:false }}/>
      <Stack.Screen
        name = 'Flexbox'
        component = { flexbox }/>
      <Stack.Screen
        name = 'Drawer'
        component = { MyDrawer }/>
      <Stack.Screen
        name = "Tab"
        component = { MyTab }
        options = {{ headerShown:false }}/>
      <Stack.Screen
        name = "BottomTab"
        component = { MyBottomTab }
        options = {{ headerShown:false}}/>  
    </Stack.Navigator>
  )
}
function MyDrawer(){
  return(
    <Drawer.Navigator
      drawerContent = {(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen
      name='Home'
      component={Home}/>
        
      <Drawer.Screen
      name='Profile'
      component={Profile}/>

      <Drawer.Screen 
      name="Settings"
      component={Settings}/>
      
      <Drawer.Screen
      name="AboutUs"
      component={AboutUs}/>
      
    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator
    screenOptions = {{
      tabBarLabelStyle : {fontSize : 14, fontWeight : 'bold' },
      tabBarItemStyle : {width : 100},
      tabBarStyle : {backgroundColor : 'blue'}
    }}>
      <Tab.Screen 
        name = 'Cart'
        component={ Cart }
        options = {{
          tabBarActiveTintColor : 'yellow',
          tabBarInactiveTintColor : 'white',
          tabBarIcon : ({focused}) =>
          focused ? <Icons name = 'shopping-cart' size = {24} color = 'yellow'/> : <Icons name = 'shopping-cart' size = {24} color = 'white'/> 
        }}>
      </Tab.Screen>
      <Tab.Screen 
        name = 'Category'
        component={ Category }
        options = {{
          tabBarActiveTintColor : 'yellow',
          tabBarInactiveTintColor : 'white',
          tabBarIcon : ({focused}) => 
          focused ? <Icons name = "category" size = {24} color = 'yellow'/> : <Icons name = "codepen" size = {24} color = 'white'/> 
        }}>
      </Tab.Screen>
      <Tab.Screen 
        name = 'Order'
        component={ Order }
        options = {{
          tabBarActiveTintColor : 'yellow',
          tabBarInactiveTintColor : 'white',
          tabBarIcon : ({focused}) =>
          focused ? <Icons name = "shopping-bag" size = {24} color = 'yellow'/> : <Icons name = "shopping-bag" size = {24} color = 'white'/> 
        }}>
      </Tab.Screen>
      <Tab.Screen 
        name = 'Search'
        component={ Search }
        options = {{
          tabBarActiveTintColor : 'yellow',
          tabBarInactiveTintColor : 'white',
          tabBarIcon : ({focused}) =>
          focused ? <Icons name = "search" size = {24} color = 'yellow'/> : <Icons name = "search" size = {24} color = 'white'/> 
        }}>
      </Tab.Screen>
    </Tab.Navigator>
  )
}

function MyBottomTab(){
  return(
    <BottomTab.Navigator 
       screenOptions = {{
        tabBarLabelStyle : { fontSize : 15, fontWeight : 'bold' },
        tabBarItemStyle : { width : 100 },
        tabBarStyle : { backgroundColor : 'white'}
       }}>
        <BottomTab.Screen
           name = "Shop"
           component = { Shop }
           options = {{
             tabBarActiveTintColor : 'blue',
             tabBarInactiveTintColor : 'black',
             tabBarIcon : ({focused}) =>
             focused ?<Icons name = 'Shop' size  = {24} color = 'blue'/> : <Icons name = 'Shopping-bag' size  = {24} color = 'black'/>
       }}/>
        <BottomTab.Screen
           name = "Supercoin"
           component = { Supercoin }
           options = {{
             tabBarActiveTintColor : 'blue',
             tabBarInactiveTintColor : 'black',
             tabBarIcon : ({focused}) =>
             focused ?<Icons name = 'Shop' size  = {24} color = 'blue'/> : <Icons name = 'coin' size  = {24} color = 'black'/>
       }}/>
        <BottomTab.Screen
           name = "Credit"
           component = { Credit }
           options = {{
             tabBarActiveTintColor : 'blue',
             tabBarInactiveTintColor : 'black',
             tabBarIcon : ({focused}) =>
             focused ?<Icons name = 'Shop' size  = {24} color = 'blue'/> : <Icons name = 'credit' size  = {24} color = 'black'/>
           }}/>

    </BottomTab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
       <MyStack></MyStack>
    </NavigationContainer>
  )
}