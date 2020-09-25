import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';
import NoMatch from './Components/NoMatch/NoMatch';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Destination from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Booking from './Components/Booking/Booking';
import ShowGoogleMap from './Components/ShowGoogleMap/ShowGoogleMap';
import PrivateRoute from './Components/Private Route/PrivateRoute';
import Login from './Components/Login/Login';
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className='main'>
      
      <Router>
      <Header></Header>
         <Switch>
           <Route exact path="/">
              <Home></Home>
           </Route>
            <Route  path="/Home">
              <Home />
            </Route>           
            <Route  path="/News">
              <News />
            </Route>           
            <Route  path="/Destination">
              <Destination />
            </Route>           
            <Route  path="/Blog">
              <Blog />
            </Route>           
            <Route  path="/Contact">
              <Contact />
            </Route>           
            <Route  path="/Login">
              <Login />
            </Route>           
            <Route  path="/booking/:showCardName">
              <Booking/>
            </Route>  
            <PrivateRoute  path="/ShowGoogleMap">
              <ShowGoogleMap/>
            </PrivateRoute>           
          <Route  path="*">
              <NoMatch></NoMatch>
            </Route>
         </Switch>
       </Router>      
    </div>
    </UserContext.Provider>
  );
};

export default App;