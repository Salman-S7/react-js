import { useReducer } from 'react';
import './App.css'
import { useRef } from 'react';


function reducer(state, action) {
  if (action.type === "increase by 1") {
    console.log("trying to increase the value by 1");
    console.log(state)
    return state + 1;
  } else if (action.type === "increase by 3") {
    return state + 3;
  }
}

function App() {
  // lets practice useReducer ==> useReducer is the advanced version of the useState 
  // let's see how it works

  const [state, dispatch] = useReducer(reducer, 0);

  const inputRef = useRef()


  const focusHandler = () => {
    console.log("we are trying to focus into the input on click of the button")
    inputRef.current.focus();
  }


  return (
    <>
      <p className="font-extrabold">{state}</p>
      <button
        className="bg-green-300 px-4 py-2 mr-4"
        onClick={() => dispatch({ type: "increase by 1" })}
      >
        Increase the value by one
      </button>
      <button
        className="bg-green-300 px-4 py-2 mr-4"
        onClick={() => dispatch({ type: "increase by 3" })}
      >
        Increase the value by three
      </button>

      <div className="">

        <input ref={inputRef} type="text" name="name" id="name" placeholder='Enter name...' />
        <button onClick={focusHandler}>Click to focus</button>
      </div>
    </>
  );
}

export default App
