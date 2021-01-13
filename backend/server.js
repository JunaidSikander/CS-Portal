import express from 'express';
import morgan from 'morgan';
import {config} from 'dotenv';


config();

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => res.json("API " +
        "is running"));
    app.use(morgan('dev'));
}


app.listen(port, () => {
    console.log(`Server is up in ${process.env.NODE_ENV} mode on Port ${port}`);
});
