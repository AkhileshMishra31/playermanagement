import express, { Express } from "express";
import dotenv from "dotenv";
import routes from './routes';
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

app.use(routes);


app.use(errorHandler);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});