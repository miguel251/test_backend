import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import config from '../../config';

const createToken = async (user, expiresIn) => {
    const { username, name, email } = user;
    return await jwt.sign(
        { username, name, email },
        config.token_secret_key,
        { expiresIn }
    );
}


const router = Router();

router.post('/login', 
passport.authenticate("local", { failWithError: true, session:false }),
async (req, res) => {
    
    const token = await createToken(req.user, config.token_expirein);

    res.status(200).send({
        data:{
            user:{
                ...req.user
            },
            token
        }
    });
});

export default router;