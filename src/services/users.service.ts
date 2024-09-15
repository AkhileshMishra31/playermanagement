
import { ISignupInput } from "../interfaces/users.interface";

import prisma from "../utils/db";
import { AppError } from "../utils/AppError";
import { user_models } from "../models/users.model";

const { user: User } = prisma

export const signup = async (user_data: ISignupInput) => {
    // check for alrady existing users
    const user_exist_email = await user_models.findUser({ email: user_data.email })
    if (user_exist_email) {
        throw new AppError("already taken email", 400)
    }

    const phone_number_taken = await user_models.findUser({ phone_number: user_data.phone_number })
    if (phone_number_taken) {
        throw new AppError("phone number is already taken", 400)
    }

    const user_name = await user_models.findUser({ username: user_data.username })
    if (user_name) {
        throw new AppError("username is already taken", 400)
    }

    const payload = {
        username: user_data.username,
        email: user_data.email,
        password: user_data.password,
        ...(user_data.phone_number && { phone_number: user_data.phone_number })
    }
    const user = await user_models.createUser(payload)
};



export const user_service = {
    signup,
};