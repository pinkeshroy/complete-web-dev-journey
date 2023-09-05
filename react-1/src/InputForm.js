import { useState } from "react";
export const InputForm = (Props) => {
    let { rcCount,children } = Props;
    const [inputValue, setInputValue] = useState("")
    // { console.log({ 1: inputValue }) }
    return (<form>
        <div> Count In Form:{`${rcCount}`}</div>
        {children}
        <input type='text' onChange={(e) => {
            setInputValue(e.target.value)
            console.log(inputValue)
        }}
            value={inputValue}
        />
        <div><a href='#'>{inputValue}</a></div>
        <input type='submit' />
    </form>)
}
