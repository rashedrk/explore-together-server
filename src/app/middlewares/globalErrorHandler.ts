import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import handleZodError from "../Errors/handleZodErro";
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key error";
            error = err.meta;
        }
    }
    else if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
      }

    res.status(statusCode).json({
        success,
        message,
        error
    })
};

export default globalErrorHandler;