import React,{useState} from 'react'

export default function Textform(props) {
  
  const handleUpClick = ()=>{
    //console.log("uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
      let newText= text.toLowerCase();
    setText(newText);
  }
  const handleCClick = ()=>{
    let newText= '';
  setText(newText);
}
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const[text, setText] = useState(''); 
  return (
    <>
    <div className="container">
            <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1"onClick={handleCClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Required to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
    )
}

