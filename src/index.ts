import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import mainRoutes from './routes';

const PORT = 8080;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
