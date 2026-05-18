import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

type UseCounterHookType = {
    count:number,
    increment: () => void,
    decrement: () => void,
};

export const useCounter = (): UseCounterHookType => {
  const {
    increment,
    decrement,
    state: { count },
  } = useContext(CounterContext);
  return { increment, decrement, count };
};
