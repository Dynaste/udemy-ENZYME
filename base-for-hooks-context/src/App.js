import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';

/**
 * reducer to update state, called automatically by dispatch
 * @param state {object} - existing state 
 * @param action {object} contains type and pyload properties for the state update
 * 
 * @returns {object} - new state
 */
function reducer(state, action) {
  const { type, action } = action;

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

  react.useEffect(
    () => {
      hookActions.getSecretWord(setSecretWord)
    }, []
  )

  return (
    <div data-test="component-app"></div>
    )
}

export default App;
