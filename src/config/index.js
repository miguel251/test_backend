import dotenv from 'dotenv';

dotenv.config();

const app_port = process.env.APP_PORT || 4000;
const app_version = process.env.APP_VERSION;
const app_name = process.env.APP_NAME;

const token_secret_key = process.env.TOKEN_SECRET_KEY;
const token_expirein = process.env.TOKEN_EXPIRE_IN;

export default {
    app_port,
    app_version,
    app_name,
    token_secret_key,
    token_expirein,
}