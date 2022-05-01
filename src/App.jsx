import { useReducer } from "react";
import { reducer } from "./app/reducer";
import Card from "./components/Card/Card";

function App() {
  const initialState = {
    rating: null,
    isSubmitted: false,
    isError: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="App grid grid-center">
      <Card
        dispatch={dispatch}
        rating={state.rating}
        isSubmitted={state.isSubmitted}
        isError={state.isError}
      />
    </main>
  );
}

export default App;
