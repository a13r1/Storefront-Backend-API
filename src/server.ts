import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRoutes from './handlers/products';
import usersRoutes from './handlers/users';
import ordersRoutes from './handlers/orders';

const app: express.Application = express();
const address: string = 'localhost:3000';

app.use(bodyParser.json());

app.use(cors());

app.get('/', function (_req: Request, res: Response) {
    res.send('Hello World!');
});

productsRoutes(app);
usersRoutes(app);
ordersRoutes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});

export default app;
