import USER_ROLES from "../../config/enums/UserRoles";

const InitialState = USER_ROLES.GUEST;

const UserRole = (state = InitialState, action) => {
    switch (action.type) {
        case 'Assign Role':
            return action.UserRole;
        case 'Reset Role':
            return InitialState;
        default:
            return state;
    }
};

export default UserRole;
