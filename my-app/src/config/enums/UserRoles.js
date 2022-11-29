
const USER_ROLES = {
    DEFAULT: {
        systemRole: true,
        systemName: "DEFAULT",
        userFriendlyName: "Default user",
        inheritedRoles: ["GUEST"]
    },
    HR: {
        systemRole: true,
        systemName: "HR",
        userFriendlyName: "HR Manager",
        inheritedRoles: ["GUEST"]
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
    },
    GUEST: {
        systemRole: false,
        systemName: "GUEST",
        userFriendlyName: "Guest user",
        inheritedRoles: []
    },
    UNAUTHENTICATED: {
        systemRole: false,
        systemName: "UNAUTHENTICATED",
        userFriendlyName: "Unauthenticated",
        inheritedRoles: []
    }
};


export default USER_ROLES;

