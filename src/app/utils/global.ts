import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()


type TOptions = {
    page?: number,
    limit?: number,
    sortOrder?: string,
    sortBy?: string
}

type TOptionsResult = {
    page: number,
    limit: number,
    skip: number,
    sortBy: string,
    sortOrder: string
}

export const calculatePagination = (options: TOptions): TOptionsResult => {

    const page: number = Number(options.page) || 1;
    const limit: number = Number(options.limit) || 10;
    const skip: number = (Number(page) - 1) * limit;

    const sortBy: string = (options.sortBy === 'destination' && options.sortBy) || (options.sortBy === 'budget' && options.sortBy) || 'createdAt';
    const sortOrder: string = options.sortOrder || 'desc';

    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    }
}

export const pick = <T extends Record<string, unknown>, k extends keyof T>(obj: T, keys: k[]): Partial<T> => {
    const finalObj: Partial<T> = {};

    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key]
        }
    }
    return finalObj;
}