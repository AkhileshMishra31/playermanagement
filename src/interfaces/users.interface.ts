// Define the interface based on the signup validation schema
export interface ISignupInput {
    username: string;  // Required alphanumeric string
    email: string;     // Required valid email string
    password: string;  // Required alphanumeric password string
    confirm_password: string;  // Required to match the password field
    phone_number?: string;  // Optional phone number string
}

export interface IUser {
    username: string;         // Required alphanumeric string
    email: string;            // Required valid email string
    password: string;         // Required alphanumeric password string
    confirm_password: string; // Required to match the password field
    phone_number?: string;    // Optional phone number string
    createdAt: Date;          // Timestamp for creation
    updatedAt: Date;          // Timestamp for last update
}

export interface ICreateUser {
    username: string;         // Required alphanumeric string
    email: string;            // Required valid email string
    password: string;         // Required alphanumeric password string
    phone_number?: string;    // Optional phone number string 
}
export interface IFindUser {
    email?: string;
    username?: string;
    phone_number?: string;    // Optional phone number string
}


export type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K>
}[keyof T];

