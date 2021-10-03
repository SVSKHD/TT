import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// firebase
import Firebase from "./config/firebase";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/storage";
import "firebase/database";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";



// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import SUV from "./pages/Suv";
import hatchback from "./pages/hatchback";
import UltraSuv from "./pages/ultraSuv";
import Sedan from "./pages/Sedan";
import Contact from "./pages/Contact";


// context
import { UserContext } from "./Context/UserContext";


// firebase
firebase.initializeApp(Firebase);

function App() {
  const [user , setUser] = useState(null)
  return (
    <>
      <Router>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/hatchback" component={hatchback} />
            <Route exact path="/suv" component={SUV} />
            <Route exact path="/sedan" component={Sedan} />
            <Route exact path="/ultrasuv" component={UltraSuv} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="*" component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
