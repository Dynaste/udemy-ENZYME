import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';

import Input from "./components/Input";

/**
 * reducer to update state, called automatically by dispatch
 * @param state {object} - existing state 
 * @param action {object} contains type and pyload properties for the state update
 * 
 * @returns {object} - new state
 */
function reducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case "setSecretWord":
      return { ...state, secretWord: payload };
    default:
      throw new Error(`Invalid action type: ${type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
      reducer,
      { secretWord: null}
    );

  const setSecretWord = (secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord})
  };

  React.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord)
    }, []
  );

  if(!state.secretWord) {
    return(
      <div data-test="spinner">
        <span>... Loading ...</span>
      </div>  
    )
  }

  return (
    <div data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
    )
}

export default App;
