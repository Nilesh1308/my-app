
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert1 from './components/Alert1';

//import axios from 'axios';
function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
 // const [myData, setMyData] = useState([])
 const [alert, setAlert] = useState(null)

 const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
 }

 const toggleMode = ()=> {
      if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
    }
      else{
      setMode ('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
    }
  }  
  return (
   <>

<Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode = {toggleMode}/>
<Alert1 alert={alert}/>
<div className="container my-3">
<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
{/*<About/>*/}
</div>
   </>
  );
}

export default App;
