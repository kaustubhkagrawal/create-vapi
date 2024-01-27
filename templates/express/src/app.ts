import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgon from 'morgan';

const app: Express = express();
const morganFormat = process.env.MORGON ?? 'short';

app.use(cors());
app.use(express.json());
app.use(morgon(morganFormat));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    value: 'hello world!'
  });
});

export default app;
