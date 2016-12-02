import * as express from 'express';
import * as bodyParser from 'body-parser';

import { registerRoute } from './router';

const app = express();
app.use(bodyParser.json());
registerRoute(app);

app.listen(3000, () => console.log('listen on 3000'));
