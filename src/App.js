
import './App.css';
import Home from './Component/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Home/Appointment/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import Admin from './Component/Admin/Admin';
import Appointment from './Component/Home/Appointment/Appointment';
import Service from './Component/Services/Service';
import Cardiology from './Component/Departments/Cardiology';


export const UserContext = createContext({})


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appointment/:_id'>
            <Appointment></Appointment>
          </Route>
          
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/adminDashboard'>
            <Admin></Admin>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          {/* //department// */}

          <Route path='/cardiology'>
            <Cardiology></Cardiology>
          </Route>




          <Route path='/service'>
            <Service></Service>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
