import passport from 'passport';
import auth from './auth';
import deposit from './deposit';
import withdraw from './withdraw'
import swap from './swap'; 

export default function (app) {
    
    app.use('/auth', auth);

    app.use('/', passport.authenticate('jwt', { failWithError: true, session: false }));

    app.use('/deposit', deposit);
    app.use('/withdraw', withdraw)
    app.use('/swap', swap);
}