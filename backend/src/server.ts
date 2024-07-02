import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/router.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

const port = 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
