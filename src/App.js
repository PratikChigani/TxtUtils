import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  // Switch,
  // Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const myBlueDarkBodyMode = {
    color: "White",
    backgroundColor: "#042743",
  };

  const myLightBodyMode = {
    color: "Black",
    backgroundColor: "White",
  };
  const [bodyMode, setBodyMode] = useState({
    color: "Black",
    backgroundColor: "White",
  });

  const myBlueDarkBtnMode = {
    color: "White",
    backgroundColor: "#042743",
    border: "1px solid White",
  };

  const myLightBtnMode = {
    color: "White",
    backgroundColor: "#0d6efd",
  };
  const [btnMode, setBtnMode] = useState({
    color: "White",
    backgroundColor: "#0d6efd",
  });

  const toggleToBlueDarkMode = () => {
    setMode("blue");
    setBtnMode(myBlueDarkBtnMode);
    setBodyMode(myBlueDarkBodyMode);
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been set.", "success");
    mySetTimeout();
  };

  const toggleToLightMode = () => {
    setMode("light");
    setBtnMode(myLightBtnMode);
    setBodyMode(myLightBodyMode);
    document.body.style.backgroundColor = "White";
    showAlert("Light mode has been set.", "success");
    mySetTimeout();
  };

  const toggleToBlueMode = () => {
    if (mode !== "blue") {
      toggleToBlueDarkMode();
    } else {
      toggleToLightMode();
    }
  };

  const toggleMode = {
    toggleToBlueMode: toggleToBlueMode,
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const mySetTimeout = () => {
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About"
        contact="Contact"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text here"
                mode={mode}
                bodyMode={bodyMode}
                btnMode={btnMode}
                showAlert={showAlert}
                mySetTimeout={mySetTimeout}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/contact"
            element={<Contact mode={mode} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
