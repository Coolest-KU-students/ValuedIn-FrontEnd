import axios from "axios";

const STORAGE_ITEM_NAME = "authToken";

const updateAxiosJWT = (token) =>{
    !!token && (axios.defaults.headers.common["Authorization"] = "Bearer " + token);
}

export const refreshJWT = () =>{
    setJWT(getJWT());
}

export const getJWT = () =>{
    return localStorage.getItem(STORAGE_ITEM_NAME);
}

export const setJWT = (token) =>{
    localStorage.setItem(STORAGE_ITEM_NAME, token);
    updateAxiosJWT(token);
}

export const cleanJWT = () =>{
    setJWT(undefined); //unrecognizable JWT
    delete axios.defaults.headers.common["Authorization"];
}