import * as express from 'express';

import * as todoService from './todoService';

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

const route = express.Router();

route.get('/list', (req, res) => {
    todoService.list().then((todoItems) => res.json(todoItems));
});

route.post('/create', (req, res) => {
    let item = req.body;
    todoService.create(item);
    res.status(201).send();
});

export function registerRoute(app) {
    app.use('/', route);
}

