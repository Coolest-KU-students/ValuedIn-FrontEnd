import axios from "axios";

const GLOBAL_CONFIG = { 
    internalAPISource: 'https://localhost:7229/api'
};

axios.defaults.headers.common["Accept"] = 'application/json';

export default GLOBAL_CONFIG;