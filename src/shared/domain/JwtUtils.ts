import jwt from 'jsonwebtoken';

export default class JwtUtils {

    static createToken(json: string): string {
        return jwt.sign(json, process.env.JWT_SECRET)
    }
}