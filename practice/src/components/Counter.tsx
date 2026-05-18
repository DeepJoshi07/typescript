
import { useCounter } from "../hooks/useCounter";
import { useText } from "../hooks/useText";



const Counter = () => {
  const {count,increment,decrement} = useCounter();
  const {text,handleInput} = useText();
  return <div>
      <h2>Counter :{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input type="text" onChange={handleInput}/>
      <h3>{text}</h3>
     </div>;
};

export default Counter;
