import config from "../config";
import frontend from "./frontend";

export default function(app){
    
    app.use('/info', function(req, res, next) {
        res.status(200).json({
            app: config.app_name,
            version: config.app_version
        });
    });

    frontend(app);

    app.use(function(req, res, next){
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

      // error handler, if development mode will print stacktrace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
        errors: { message: err.message }
        });
    });
}