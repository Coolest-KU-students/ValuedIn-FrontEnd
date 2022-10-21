
const USER_ROLES = {
    DEFAULT: {
        systemRole: true,
        systemName: "DEFAULT",
        userFriendlyName: "Default user",
        inheritedRoles: []
    },
    HR: {
        systemRole: true,
        systemName: "HR",
        userFriendlyName: "HR Manager",
        inheritedRoles: ["DEFAULT"]
    },
    ORG_ADMIN: {
        systemRole: true,
        systemName: "ORG_ADMIN",
        userFriendlyName: "Organization Admin",
        inheritedRoles: []
    },
    SYSADMIN: {
        systemRole: true,
        systemName: "SYSADMIN",
        userFriendlyName: "System Administrator",
        inheritedRoles: []
    }
};


export default USER_ROLES;

