import { MongoClient, Db } from 'mongodb';
import { TodoItem } from './todo';

const connection = MongoClient.connect('mongodb://localhost:27017/todos');

const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

export function list(): Promise<Array<TodoItem>> {
    return connection.then((db: Db) => {
        return db.collection('todo').find({}).toArray();
    });
}

export function create(item: TodoItem) {
    todoItems.push(item);
}
