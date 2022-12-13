export interface IDecodedToken {
    exp: number;
    iat: number;
    jti: string;
    iss: string;
    aud: ['realm-management' | 'account'];
    sub: string;
    typ: string;
    azp: string;
    session_state: string;
    acr: string;
    realm_access: {
        roles: ['offline_access' | 'admin' | 'uma_authorization'];
    };
    resource_access: {
        'realm-management': {
            roles: [
                | 'view-identity-providers'
                | 'view-realm'
                | 'manage-identity-providers'
                | 'impersonation'
                | 'realm-admin'
                | 'create-client'
                | 'manage-users'
                | 'query-realms'
                | 'view-authorization'
                | 'query-clients'
                | 'query-users'
                | 'manage-events'
                | 'manage-realm'
                | 'view-events'
                | 'view-users'
                | 'view-clients'
                | 'manage-authorization'
                | 'manage-clients'
                | 'query-groups'
            ];
        };
        account: {
            roles: ['manage-account' | 'manage-account-links' | 'view-profile'];
        };
    };
    scope: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    uuid: string;
    family_name: string;
    email: string;
}
export interface IAccount extends IDecodedToken {
    companyId?: string | null;
    roleID?: string | null;
} 