import React,{useState} from 'react'

export default function Textform(props) {
  const {showAlert} =props;
  const handleUpClick = ()=>{
    //console.log("uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase","success");
  }
  const handleLoClick = ()=>{
      let newText= text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase","success");
  }
  const handleCClick = ()=>{
    let newText= '';
  setText(newText);
  showAlert("Cleared text","success");
}
const handleCopy = ()=>{
  let text= document.getElementById("myBox");
       text.select ();
       navigator.clipboard.writeText(text.value)
       showAlert("Copied to clipboard","success");
}
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const[text, setText] = useState(''); 
  return (
    <>
    <div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange}  id="myBox"  rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
            <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1"onClick={handleCClick}>Clear Text</button>
            <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Required to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>

    </div>
    </>
    )
}

