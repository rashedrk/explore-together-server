import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import catchAsync from '../utils/CatchAsync';
import { prisma } from '../utils/global';


const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new Error( 'You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_secret as string,
    ) as JwtPayload;

    const { id } = decoded;
   

    // checking if the user is exist
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    if (!user) {
      throw new Error('This user is not found !');
    }
    next();
  });
};

export default auth;
