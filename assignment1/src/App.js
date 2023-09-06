// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const li = document.getElementById('inputValue')
  const dataList = document.querySelector('.dataList')
  const cardBox=document.getElementById('cardBox')
  const updatesetInput = (event) => {
    setInput(event.target.value)
  }
  const upadatesetData = (event) => {
    const newData = [input, ...data];
    setData(newData)
    setInput('')
  }
  const updateSetData = (event) => {
    cardBox.style.display = 'none';
    console.log(cardBox);
    const newData = [...data];
    const id = event.target.id;
    newData.splice(id,1)
    setData(newData);
  }
  const showCardsonUI = (e) => {
    if (e.target.checked) {
      cardBox.style.display = 'flex';
      dataList.style.display = 'none';
      console.log(e.target.checked);
    }
    else {
      cardBox.style.display = 'none';
      dataList.style.display = 'block';
      console.log(cardBox,dataList)
    }
  }
  return (
    <div className="App">
      <form onSubmit={(e)=>{e.preventDefault()}}><input id='inputValue' value={input} onChange={updatesetInput}></input>
        <button onClick={upadatesetData}>Submit</button>
        <label>Cards </label>
        <input id='checkBox' type='checkbox' onClick={showCardsonUI} />
      </form>
      <div id='cardBox'>{
        data.map((elem, idx) => {
          return <div className='card'><p id={idx} onClick={updateSetData}>X</p>
            <h3>{elem}</h3></div>
        })
      }
      </div>

      <ol className='dataList'>{
        data.map((elem, idx) => {
          return <li>{elem}<a id={idx} onClick={updateSetData} href='#'>X</a></li>
        })
      }</ol>
    </div>
  );
}

export default App;
