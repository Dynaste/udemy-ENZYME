import axios from "axios";

export const getSecretWord  = async (setSecretWord) => {
    const response = await axios.get('InsertUrlHere');
    setSecretWord(response.data);
}

export default {
    getSecretWord
}