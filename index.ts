import * as express from 'express';
import * as bodyParser from 'body-parser';

import { registerRoute } from './router';

const app = express();
app.use(bodyParser.json());
registerRoute(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen on ${port}`));
