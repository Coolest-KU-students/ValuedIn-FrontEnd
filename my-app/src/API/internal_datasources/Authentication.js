import axios from 'axios';
import GLOBAL_CONFIG from '../config';

const link = GLOBAL_CONFIG.internalAPISource;

export const AuthenticateUser = (credentials, callback, errorCallback) =>{
    axios.post(link+"/auth/login", credentials)
        .then( response => {
            callback(response.data);
        })
        .catch( error =>{
            if(error.response){
                errorCallback(error.response.data);
            }
            else errorCallback();
        })
}

export const checkJWTValidity = (callback, errorCallback) =>{
    axios.get(link+"/auth/")
    .then(response =>{
        callback(response.data)
    })
    .catch(err =>{
        errorCallback(err.data);
    })
}