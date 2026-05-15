import {type ReactNode,  } from "react"
import { useCounter } from "../hooks/useCounter"
import { useConterText } from "../hooks/useText"


type ChildrenType = {
    children:(num:number) => ReactNode
}

const Counter = ({children}:ChildrenType) => {
    
    const {count,increment,decrement} = useCounter();
    const {text,handleTextInput} = useConterText();

  return (
    <>
        <h1>{children(count)}</h1>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        <input type="text" onChange={handleTextInput} name="" id="" />
        <h2>{text}</h2>
    </>
  )
}

export default Counter