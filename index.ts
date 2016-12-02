import * as express from 'express';
import * as bodyParser from 'body-parser';

import { route } from './router';

const app = express();
app.use(bodyParser.json());
app.use('/', route);

app.listen(3000, () => console.log('listen on 3000'));
