import { Prisma } from "@prisma/client";
import { calculatePagination, prisma } from "../../utils/global"
import { TTrip } from "./trip.interface";

const createTripIntoDB = async (id: string, payload: TTrip) => {
    const trip = {
        ...payload,
        userId: id
    }
    const result = await prisma.trip.create({
        data: trip
    });

    return result;
}


const getAllTripsFromDB = async (params: any, options: any) => {
    const { page, limit, skip } = calculatePagination(options);
    const { searchTerm, ...filterData } = params;

    const andConditions: Prisma.TripWhereInput[] = [];

    // console.log(params);

    if (params.searchTerm) {

        const orConditions = [];

        orConditions.push({
            destination: {
                contains: searchTerm,
                mode: Prisma.QueryMode.insensitive
            }
        });

        const budget = Number(searchTerm);
        if (!isNaN(budget)) {
            orConditions.push({
                budget: {
                    equals: budget
                }
            });
        }

        andConditions.push({
            OR: orConditions
        })
    };

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => {

                if (key === 'minBudget') {
                    return {
                        budget: {
                            gte: Number((filterData as any)[key])
                        }
                    }
                }
                else if (key === 'maxBudget') {
                    return {
                        budget: {
                            lte: Number((filterData as any)[key])
                        }
                    }
                }
                else {
                    return {
                        [key]: {
                            equals: (filterData as any)[key]
                        }
                    }
                }
            })
        })
    };

    andConditions.push({
        status: {
            not : "deactivated"
        }
    })

    const whereConditions: Prisma.TripWhereInput = { AND: andConditions }

    const result = await prisma.trip.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder ? {
            [options.sortBy]: options.sortOrder
        } : {
            createdAt: 'desc'
        }
    });

    const total = await prisma.trip.count({
        where: whereConditions
    });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
}
const getATripFromDB = async (id: string) => {
    const result = await prisma.trip.findFirstOrThrow({
        where: {
            AND: [
                {id: id},
                {status: {
                    not: "deactivated"
                }}
            ]
        }
    });

    return result;
}

const updateTripIntoDB = async (id: string, payload: Partial<TTrip>) => {
    const result = await prisma.trip.update({
        where: {
            id: id
        },
        data: payload
    });

    return result;
}

export const tripServices = {
    createTripIntoDB,
    getAllTripsFromDB,
    getATripFromDB,
    updateTripIntoDB
}