// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const li=document.getElementById('inputValue')
  const updatesetInput = (event) => {
    setInput(event.target.value)
    // console.log(event.target.value)
  }
  const upadatesetData = (event) => {
    const newData = [input, ...data];
    setData(newData)
    setInput('')
    console.log(newData)
  }
  const updateSetData = (event)=>{
    const newData = [...data];
    const id = event.target.id;
    console.log({id})
    newData.splice(id,1)
    setData(newData);
    console.log(newData);
  }
  return (
    <div className="App">
      <div><input id='inputValue' value={input} onChange={updatesetInput}></input>
        <button onClick={upadatesetData}>Submit</button></div>
      <div>
        <ol className='dataList'>{
          data.map((elem, idx) => {
            return <li>{elem} <span > <a id={idx} onClick={updateSetData} href='#'>X</a></span></li>
          })
        }</ol></div>
    </div>
  );
}

export default App;
