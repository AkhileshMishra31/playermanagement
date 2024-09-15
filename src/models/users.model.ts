import { AtLeastOne, ICreateUser, IFindUser } from "../interfaces/users.interface";
import { AppError } from "../utils/AppError";
import prisma from "../utils/db";

const { user: Users } = prisma;



const createUser = async (payload: ICreateUser) => {
    try {
        const users = await Users.create({
            data: payload
        })
        return users
    } catch (error) {
        throw new AppError("Unable to create users", 500);
    }
}



const findUser = async (payload: AtLeastOne<IFindUser>) => {
    try {
        const users = await Users.findFirst({
            data: payload,
            select: {
                password: false
            }
        })
        return users
    } catch (error) {
        throw new AppError("Unable to create users", 500);
    }
}



export const user_models = {
    createUser,
    findUser
}