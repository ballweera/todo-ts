import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.get('/list', (req, res) => {
    const todoItems = [
        { title: 'Learn TypeScript', complete: false },
    ];
    res.json(todoItems);
});

app.listen(3000, () => console.log('listen on 3000'));
