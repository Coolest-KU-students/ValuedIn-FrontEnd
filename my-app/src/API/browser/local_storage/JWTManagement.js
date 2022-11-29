import axios from "axios";

const STORAGE_ITEM_NAME = "authToken";

const updateAxiosJWT = (token) =>{
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export const getJWT = () =>{
    return localStorage.getItem(STORAGE_ITEM_NAME);
}

export const setJWT = (token) =>{
    localStorage.setItem(STORAGE_ITEM_NAME, token);
    updateAxiosJWT(token);
}

export const cleanJWT = () =>{
    storeJWT('https://youtu.be/dQw4w9WgXcQ'); //unrecognizable JWT
}