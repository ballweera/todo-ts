import * as express from 'express';

import * as todoService from './todoService';

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

const route = express.Router();

route.get('/list', async (req, res) => {
    const todoItems = await todoService.list();
    res.json(todoItems)
});

route.post('/create', async (req, res) => {
    let item = req.body;
    await todoService.create(item);
    res.status(201).send()
});

export function registerRoute(app) {
    app.use('/', route);
}

