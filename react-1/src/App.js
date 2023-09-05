// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { InputForm } from './InputForm';
import { DataList, dataArray } from './DataList';


const ReactComp = () => {
  const [count, setCount] = useState(0);
  const increaseCount = (event) => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count-1);
  }
  return (
    <div className='App'>
      {count.name}
      <button onClick={increaseCount} id='addButton'>Add</button>
      <span id='countSpan'>Count:{count}</span>
      <button onClick={decreaseCount} id='subtractButton'>Subtract</button>
      <InputForm rcCount={count}>
        {count > 5 ? (
          <Comp1 compCount={count * 3000} />) : (
          <Comp1 compCount={count * 1000} />
        )}
        {count > 5 && <div>Hello from div</div>}
      </InputForm>-
      {
        dataArray.map((obj, idx, arr) => {
          const { a, b } = obj;
          return<DataList order={idx} a={a} b={b} />
        })
      }
    </div>
  );
}
const Comp1 = (props) => {
  const { compCount } = props;
  return <div>From Comp1:{ compCount}</div>
}


// export 
export default ReactComp;
