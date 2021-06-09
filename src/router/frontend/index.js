import auth from './auth';

export default function (app) {
    
    app.use('/auth', auth);
}