import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Joystick from "./Components/joystick";
import Alert from "./Components/Alert";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#25282F";
      showAlert("dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been disable", "success");
    }
    let i = 5;
    setInterval(() => {
      i % 2 === 1
        ? (document.title = "TextUtil")
        : (document.title = "TextEditor");
      i = (i + 1) % 5;
    }, 1000);
  };

  const red = () => {
    console.log("redify");
    setmode("red");
    document.body.style.backgroundColor = "#ff0909";
    showAlert("red mode has been enable", "success");
  };

  const blue = () => {
    console.log("bluifie");
    setmode("blue");
    document.body.style.backgroundColor = "#7700ff";
    showAlert("blue mode is enable ", "success");
  };
  return (
    <>
      {/* <Router> */}
        <link rel="icon" href="%PUBLIC_URL%/logo.png" />
        <Navbar
          title="textutil2"
          abouttext="AbOut"
          mode={mode}
          togglemode={togglemode}
          red={red}
          blue={blue}
        />
        <Alert alert={alert}></Alert>
<<<<<<< HEAD

        {/* <div className="container my-3">
          <TextForm
            heading="City KA APNA textUTILS"
=======
        <div className="container">
          <TextForm heading="City KA APNA textUTILS"
>>>>>>> 4af569bd68f7a444b35a4c9ced6042a40ec95ac3
            showAlert={showAlert}
            mode={mode}></TextForm>
        </div>
        <div className="container">
          <Joystick></Joystick>
<<<<<<< HEAD
        </div> */}

        {/* <div className="container my-3">
          <Switch>
            <Route path="/">
              <TextForm
                heading="City KA APNA textUTILS"
                showAlert={showAlert}
                mode={mode}
              />
              <Joystick></Joystick>
            </Route>
            <Route path="/About">
              <p> hello uncle</p>
            </Route>
          </Switch>
        </div> */}
      {/* </Router> */}
=======
        </div>
>>>>>>> 4af569bd68f7a444b35a4c9ced6042a40ec95ac3
    </>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <button type="button" class="btn-close" aria-label="Close"></button>
//     </div>
//   );
// }

// export default App;
