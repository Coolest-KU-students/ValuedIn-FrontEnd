import axios from 'axios';

export const LoadPaginatedData = (setUsers, configuration, callback) => {
    axios.post('http://localhost:8080/api/users/', configuration).then((response) => {
        setUsers(response.data);
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const createNewUser = (config, callback) => {
    axios.post('http://localhost:8080/api/users/new', config)
        .then((response) => {
           // Notification('Success', response.data, 'success', 1500);
            if (typeof callback == typeof (() => {})) callback();
        });
};

export const UpdateUser = (User, callback) => {
    axios.put('http://localhost:8080/api/users/', User).then(() => {
        if (typeof callback == typeof (() => {})) callback();
    });
};

export const ChangeUserExpiration = (login, callback) => {
    axios
        .delete('http://localhost:8080/api/users/' + login)
        .then(() => {
            if (typeof callback == typeof (() => {})) callback();
        })
        .catch((error) => {
           // Notification('Error', error, 'danger', 3000);
        });
};
