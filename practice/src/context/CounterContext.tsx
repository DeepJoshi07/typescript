import {
  createContext,
  useReducer,
  type ChangeEvent,
  type ReactNode,
} from "react";

type InitStateType = {
  count: number;
  text: string;
};

type ChildrenType = {
  children?: ReactNode | undefined;
};

const initState: InitStateType = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPES {
  INCREMENT,
  DECREMENT,
  NEWINPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPES;
  payload?: string;
};

const reducer = (
  state: InitStateType,
  action: ReducerAction,
): InitStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPES.NEWINPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("provided type do not exist!");
  }
};

const useReducerContext = (initState: InitStateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT });

  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: REDUCER_ACTION_TYPES.NEWINPUT,
      payload: e.target.value,
    });
  return { increment, decrement, handleInput, state };
};

const initStateContext = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

type UseReducerContextType = ReturnType<typeof useReducerContext>;

export const CounterContext =
  createContext<UseReducerContextType>(initStateContext);

export const ContextProvider = ({ children }: ChildrenType) => {
  return (
    <CounterContext.Provider value={useReducerContext(initState)}>
      <>{children}</>
    </CounterContext.Provider>
  );
};
