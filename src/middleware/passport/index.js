import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
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


export default passportHandler;
