
export class AuthUser {

    private jwt: string

    constructor(jwt: string) {
        this.jwt = jwt;
    }

    static create(jwt: string): AuthUser {
        return new AuthUser(jwt);
    }
}