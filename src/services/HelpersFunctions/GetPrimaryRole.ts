import UserRoles from "../../types/UserRoles";

export const getPrimaryRole = (roles: string[]): UserRoles => {
    let userRole: UserRoles = UserRoles.Student; // Follow camelCase for variable names

    roles.forEach(role => {
        if (role === UserRoles[UserRoles.Writer]) {
            userRole = UserRoles.Writer;
        }
    });

    roles.forEach(role => {
        if (role === UserRoles[UserRoles.Admin]) {
            userRole = UserRoles.Admin;
        }
    });

    roles.forEach(role => {
        if (role === UserRoles[UserRoles.SuperAdmin]) {
            userRole = UserRoles.SuperAdmin;
        }
    });

    return userRole;
}

export const getRole = (role: string): UserRoles => {
    let userRole: UserRoles = UserRoles.Student; // Follow camelCase for variable names

    if (role === UserRoles[UserRoles.Writer]) {
        userRole = UserRoles.Writer;
    }

    if (role === UserRoles[UserRoles.Admin]) {
        userRole = UserRoles.Admin;
    }

    if (role === UserRoles[UserRoles.SuperAdmin]) {
        userRole = UserRoles.SuperAdmin;
    }

    return userRole;
}
