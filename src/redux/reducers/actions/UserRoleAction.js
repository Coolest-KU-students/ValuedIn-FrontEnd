export const AssignRole = (userRole) => {
    return {
        type: 'Assign Role',
        UserRole: userRole,
    };
};

export const ResetRole = () => {
    return {
        type: 'Reset Role',
    };
};
