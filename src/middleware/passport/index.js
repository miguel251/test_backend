import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import config from '../../config';
import User from '../../db';

const passportHandler = passport.initialize();

passport.use('local',new LocalStrategy(
    function(username, password, done){
        if(User.username !== username){
            return done({ status: 401, message: 'Incorrect username' });
        }

        if(User.password !== password){
            return done({ status: 401, message: 'Incorrect password' });
        }

        return done(null, User, { message: 'Logged In Successfully' });
    }
));

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.token_secret_key,
    ignoreExpiration: true,
}

passport.use('jwt', new JwtStrategy(jwtOpts, function (jwt_payload, done) {
    if(jwt_payload.exp <= Math.floor(Date.now() / 1000)){
        return done({ status: 401, message: 'jwt expired' });
    }

    return done(null, User);
}));


export default passportHandler;
