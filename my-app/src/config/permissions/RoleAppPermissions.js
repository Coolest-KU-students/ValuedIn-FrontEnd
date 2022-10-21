import  USER_ROLES  from "../enums/UserRoles";
import  APP_GROUPS  from "../enums/AppGroups";


const RoleAppPermissionMatrix = new Map([
    [USER_ROLES.GUEST, [APP_GROUPS.FEEDS]],
    [USER_ROLES.DEFAULT, [APP_GROUPS.PERSONAL_PROFILE, APP_GROUPS.CHATBOX]],
    [USER_ROLES.HR, [APP_GROUPS.JOB_POSTING]],
    [USER_ROLES.ORG_ADMIN, [APP_GROUPS.ORGANIZATION_EDITING]],
    [USER_ROLES.SYSADMIN,[APP_GROUPS.SYSTEM_APP]]
]);

//Going to search down the inheritance tree until we inherit no more
const flattenRolesWithInherittence = (roleToParse) => {
    let parsedRoles = []
    let rolesToParse = [roleToParse];
    while(rolesToParse.length != 0){     
        let roleToCheck = rolesToParse[0];
        parsedRoles.push(roleToCheck);
        rolesToParse = [...rolesToParse, ...(USER_ROLES[roleToCheck].inheritedRoles)] //adding the inherited roles to the list

        rolesToParse = rolesToParse.filter(element => !parsedRoles.some(parsed => parsed == element)); //filtering out the already parsed ones    
    }
    
    return parsedRoles;
}

const CheckForUserPermissions = (userRole, appGroup)=>{
    let allRoles = flattenRolesWithInherittence(userRole.systemName );
    let allAllowedAppGroups = allRoles.map(role=>RoleAppPermissionMatrix.get(USER_ROLES[role])).flat();

    return allAllowedAppGroups.some(allowedApp => allowedApp == appGroup);
};

export default CheckForUserPermissions;