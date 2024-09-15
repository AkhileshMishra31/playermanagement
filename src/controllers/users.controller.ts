
import { Request, Response } from 'express';
import { validateSignupInput } from '../validations/user.validations';
import { AppError } from '../utils/AppError';
import { catchAsync } from '../utils/common';
import { user_service } from '../services/users.service';


export const signup = async (req: Request, res: Response) => {

    const { value, error } = validateSignupInput(req.body)
    if (error) {
        throw new AppError(error.message, 400)
    }
    const user = await user_service.signup(value);

    return res.status(201).json({
        success: true,
        data: user
    });
    
};


export const user_controller = {
    signup: catchAsync(signup),
};