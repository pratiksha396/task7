import React  from 'react';
// import {Counter} from './features/counter/Counter';


import './App.css';
 import Header from './component/Header.js';
  import Home from './component/Home.js';
  import Detail from './component/Detail.js';
 import Login from './component/Login.js';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  function App() {
    return (
      <div ClassName="App">
        <Router>
        <Header />
           <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
         </Route> 

           <Route path="/">
            <Home />
          </Route>  
         
          </Switch>  


        </Router> 

        </div>
    )
  }


export default App;
