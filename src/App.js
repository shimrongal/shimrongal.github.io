
import { HashRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import {  getCityList, getShoppingList } from "./utils/HelperFunctions";

import { AuthProvider } from "./utils/Auth";

import Home from "./pages/home/Home";
import LoginPage from './pages/login/LoginPage';
import ShoppingPage from './pages/shopping_list/ShoppingPage'
import SignUpPage from './pages/signup/SignUpPage';
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from 'react';
import ShoppingItemModel from './models/ShoppingItemModel';
import ParkingPage from './pages/parking/ParkingPage';


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Main application class 
 *   * This class will mange all application Routes and states
 *    
 */


function App() {
  
  const [userList , updateUsersList] = useState([[]]);
  const [shoppingList , updateShoppingList] = useState([new ShoppingItemModel('itemName','brand Name' , 1)]);

  const [cityNameArr ,setCityNameArr] = useState();

  useEffect(()=>{
    getCityList(setCityNameArr); 

  },[]);

  //This code will get city list from json file for 
  if (typeof cityNameArr === 'undefined'){
    
  }

  return (
    <AuthProvider id="p-app-container">
      <HashRouter>
        <Switch>      
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login"  component={LoginPage}></Route>
          <Route exact path="/signup" >      <SignUpPage userList={userList} updateUsersList={updateUsersList} /> </Route> 
          <Route exact path="/shopping-list"><ShoppingPage shoppingList={shoppingList} updateShoppingList={updateShoppingList}    /> </Route>
          <Route exact path="/parking"      ><ParkingPage cities={cityNameArr}/> </Route>
        </Switch>
      </HashRouter>
      
    </AuthProvider>

  );
}

export default App;
