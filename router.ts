import * as express from 'express';

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

export const route = express.Router();

route.get('/list', (req, res) => {
    res.json(todoItems);
});

route.post('/create', (req, res) => {
    let item = req.body;
    todoItems.push(item);
    res.status(201).send();
});
