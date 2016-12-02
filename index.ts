import * as express from 'express';
import * as bodyParser from 'body-parser';

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

const app = express();
app.use(bodyParser.json());

app.get('/list', (req, res) => {
    res.json(todoItems);
});

app.post('/create', (req, res) => {
    let item = req.body;
    todoItems.push(item);
    res.status(201).send();
});

app.listen(3000, () => console.log('listen on 3000'));
