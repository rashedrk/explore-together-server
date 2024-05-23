import { Prisma } from "@prisma/client";
import { calculatePagination, prisma } from "../../utils/global"

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
        andConditions.push({
            OR: [
                {
                    destination: {
                        contains: params.searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    budget: {
                        equals: Number(params.searchTerm),
                    }
                }
            ]
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

export const tripServices = {
    createTripIntoDB,
    getAllTripsFromDB
}