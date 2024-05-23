import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

export const generateToken = (payload: any, secret: Secret, expiresIn: string) => {
    console.log(expiresIn);
    const token = jwt.sign(
        payload,
        secret,
        {
            expiresIn
        }
    );

    return token;
};

export const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload;
}