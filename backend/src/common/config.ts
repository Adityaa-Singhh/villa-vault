import dotenv from "dotenv";

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || "5000";

export default {
    NODE_ENV: process.env.NODE_ENV as string,

    PORT: parseInt(process.env.PORT, 10),

    SUPABASE_URL: process.env.SUPABASE_URL as string,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY as string,

    EXPRESS_URL: process.env.EXPRESS_URL as string,

    SOCKET_URL: process.env.SOCKET_URL as string,
    SOCKET_PORT: parseInt(process.env.SOCKET_PORT as string, 10),

    REDIS_PORT: parseInt(process.env.REDIS_PORT as string, 10),
    REDIS_USERNAME: process.env.REDIS_USERNAME as string,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD as string,
    REDIS_HOST: process.env.REDIS_HOST as string,

    JWT_SECRET: process.env.JWT_SECRET as string,
};
