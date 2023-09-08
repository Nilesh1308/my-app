
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode, setMode] = useState('dark'); //wheather dark mode is enabled or not

  const toggleMode = ()=> {
      if(mode === 'light'){
      setMode('dark')
      }
      else{
      setMode ('light')
      }
  }
 
  return (
   <>

<Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode = {toggleMode}/>
<div className="container my-3">
{<Textform heading="Enter The Text to analyze below"/>}
{/*<About/>*/}
</div>
   </>
  );
}

export default App;
