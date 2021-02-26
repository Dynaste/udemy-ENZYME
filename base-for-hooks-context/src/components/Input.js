import React from "react";
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = React.useState("");

    return (
        <div data-test="component-input">
            <form>
                <input 
                placeholder="Enter guess" 
                type="text" 
                data-test="input-box"
                value={currentGuess} 
                onChange={(event) => { setCurrentGuess(event.target.value) }} 
                 />
                <button data-test="submit-button">Submit</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;