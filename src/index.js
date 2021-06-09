import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from './middleware/passport';
import config from './config';
import router from './router';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(passport);

router(app);

app.listen(config.app_port, () => {
    console.log(`🚀 Server is ready at: http://localhost${config.app_port}`);
})