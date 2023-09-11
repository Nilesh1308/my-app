
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
//import Textform from './components/Textform';
import axios from 'axios';
function App() {
  const [mode, setMode] = useState('dark'); //wheather dark mode is enabled or not
  const [myData, setMyData] = useState([])
  const toggleMode = ()=> {
      if(mode === 'light'){
      setMode('dark')
      }
      else{
      setMode ('light')
      }
  }
  const showData = () =>{
  axios.get('https://gorest.co.in/public/v2/users')
  .then((res)=> setMyData(res.data));
  }
  
    
  return (
   <>

<Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode = {toggleMode}/>
<div className="container my-3">
  <h1>Data</h1>
  <button type="button" className="btn btn-success"onClick={showData}>Fetch Data</button>
  {myData&&myData.map((post) => {
      const { id, name, email, gender, status } = post;
      return (<div className="card" key={id}>
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Status: {status}</h4>
    
        </div>
      )
    })
  }
{/*<Textform heading="Enter The Text to analyze below"/>}
{/*<About/>*/}
</div>
   </>
  );
}

export default App;
