import Counter from "./components/Counter";
import { ContextProvider } from "./context/CounterContext";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
};

export default App;
