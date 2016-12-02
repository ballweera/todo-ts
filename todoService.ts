const todoItems = [
    { title: 'Learn TypeScript', complete: false },
];

export function list(): Array<{ title: string, complete: boolean }> {
    return todoItems;
}
