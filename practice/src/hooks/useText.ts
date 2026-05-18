import { useContext, type ChangeEvent } from "react";
import { CounterContext } from "../context/CounterContext";

type UseTextContextType = {
    text:string,
    handleInput: (e:ChangeEvent<HTMLInputElement>) => void
}

export const useText = ():UseTextContextType => {
    const {state:{text},handleInput} = useContext(CounterContext);
    return {text,handleInput}
}