import { MongoClient, Db } from 'mongodb';
import { TodoItem } from './todo';

const connection = MongoClient.connect('mongodb://localhost:27017/todos');

export function list(): Promise<Array<TodoItem>> {
    return connection.then((db: Db) => {
        return db.collection('todo').find({}).toArray();
    });
}

export function create(item: TodoItem) {
    return connection.then((db: Db) => {
        return db.collection('todo').insert(item);
    });
}
