import JwtUtils from "../../shared/domain/JwtUtils"
import { UserRepository } from "../../users/infrastructure/persistence/UserRepository"
import { AuthUser } from "../domain/AuthUser"

type Params = {
    userName: string
    email: string
    password: string
}

export class SingUpService {
    private repository: UserRepository

    constructor(repository: UserRepository) {
        this.repository = repository
    }

    async run({ userName, email, password }: Params): Promise<AuthUser> {
        new UserGetter(this.repository).run()
        new UserPasswordMatcher(this.repository).run()
        const user = new UserCreater(this.repository).run(userName, email, password)

        return new AuthUser(JwtUtils.createToken(user.exportableToJson()))
    }
}