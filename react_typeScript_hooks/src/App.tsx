import {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
  type MouseEvent,
  type KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

type FibFunc = (n:number) => number

const fib: FibFunc = (n) => {
  if(n < 2)return n;

  return fib(n-1)+fib(n-2);
}
 const myNumber:number = 37;

const App = () => {
  const [count, setCount] = useState<number>(1);
  const [user, setUser] = useState<User[] | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("mounting");
    console.log("user: ", user);
    return () => console.log("unmounting");
  }, [user]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    ): void => {
      e.preventDefault()
      setCount((p) => p + 2);
    },
    [],
  );

  const result = useMemo<number>(() => fib(myNumber),[myNumber]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default App;
