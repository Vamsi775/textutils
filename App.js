import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert =(message,type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled","success")
      document.title = 'Textutils - Dark Mode';
      //setInterval(() => {
      //  document.title = 'Textutils is amazing';
      //}, 2000);
      //setInterval(() => {
      //  document.title = 'Install Textutils Now!..';
      //}, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success")
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
    {/*<Router>*/}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
          {/*<Route path="/about" element={<About />}/>*/}
          {/* <Route path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
          {/* }/> */}
            
      {/* </Routes> */}
    </div>
    {/*</Router>*/}
    </>
  );
}

export default App;