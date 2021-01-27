import express from 'express';
import morgan from 'morgan';
import ConnectDB from "./config/db.js";
import userRouter from './routes/userRoutes.js'
import {config} from 'dotenv';
import {errorHandler, notFound} from "./middlewares/errorMiddleware.js";


config();
ConnectDB();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => res.json("API " +
        "is running"));
    app.use(morgan('dev'));
}

app.use('/api/user', userRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is up in ${process.env.NODE_ENV} mode on Port ${port}`);
});
