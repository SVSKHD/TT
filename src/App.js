import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


// firebase
import firebaseConfig from "./config/firebase";
import firebase from 'firebase/compat/app';
import "firebase/storage"
import "firebase/database"


// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import SUV from "./pages/Suv";
import hatchback from "./pages/hatchback";
import UltraSuv from "./pages/ultraSuv";
import Sedan from "./pages/Sedan";



firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/signin" component={Signin}/>
      <Route exact path="/hatchback" component={hatchback}/>
      <Route exact path="/suv" component={SUV}/>
      <Route exact path="/sedan" component={Sedan}/>
      <Route exact path="/ultrasuv" component={UltraSuv}/>
      <Route exact path="*" component={NotFound}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
