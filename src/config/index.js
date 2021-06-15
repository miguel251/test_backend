import dotenv from 'dotenv';

dotenv.config();

const app_port = process.env.APP_PORT || 4000;
const app_version = process.env.APP_VERSION;
const app_name = process.env.APP_NAME;

const token_secret_key = process.env.TOKEN_SECRET_KEY;
const token_expirein = process.env.TOKEN_EXPIRE_IN;

const api_url_deposit = process.env.API_URL_DEPOSIT;
const api_url_withdraw = process.env.API_URL_WITHDRAW;
const api_url_swap = process.env.API_URL_SWAP;

const user_id = process.env.USER_ID;
const token_api = process.env.TOKEN_API;

export default {
    app_port,
    app_version,
    app_name,
    token_secret_key,
    token_expirein,
    api_url_deposit,
    api_url_withdraw,
    api_url_swap,
    user_id,
    token_api,
}