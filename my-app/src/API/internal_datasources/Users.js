import axios from 'axios';
import GLOBAL_CONFIG from '../config';

const link = GLOBAL_CONFIG.internalAPISource;

export const LoadPaginatedData = (setUsers, configuration, callback) => {
    axios.post(link+'/users/', configuration).then((response) => {
        setUsers(response.data);
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const createNewUser = (config, callback) => {
    axios.post(link+'/users/new', config)
        .then((response) => {
           // Notification('Success', response.data, 'success', 1500);
            if (typeof callback == typeof (() => {})) callback();
        });
};

export const UpdateUser = (User, callback) => {
    axios.put(link+'/users/', User).then(() => {
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const ChangeUserExpiration = (login, callback) => {
    axios
        .delete(link+'/users/' + login)
        .then(() => {
            if (typeof callback == typeof (() => {})) callback();
        })
        .catch((error) => {
           // Notification('Error', error, 'danger', 3000);
        });
};
