import React ,{useState}from "react";
import "./App.css";
import Login from "./pages.js/Login";
import Register from "./pages.js/Register"
import Anasayfa from "./components.js/Anasayfa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnCokOyAlan from "./pages.js/EnCokOyAlan";
import Yakinda from "./pages.js/Yakinda";
import Populer from "./pages.js/Populer";
import Begenilenler from "./pages.js/Begenilenler";
function App(props) {
let[email,setEmail]=useState([]);
let[pass,setPass]=useState([]);
  return (
  
    <div className="App" >

      <Router>
        <Switch>
          <Route exact path="/" render={() =>  <Register  /> }/>
          <Route exact path="/login" render={() =>  <Login email={email} setEmail={setEmail} pass={pass} setPass={setPass} /> }/>
          <Route exact path="/anasayfa" render={() =>  <Anasayfa /> }/>
          <Route exact path="/populer" render={() =>  <Populer /> }/>
          <Route exact path="/yakinda" component={Yakinda} />
          <Route exact path="/begenilenler" render={() =>  <Begenilenler /> }/>
          <Route exact path="/enCokOyAlan" render={() =>  <EnCokOyAlan  /> }/>
        
        </Switch>
        
      </Router>
{/* <Login /> */}
    
    </div>
     
   

  );
}

export default App;
