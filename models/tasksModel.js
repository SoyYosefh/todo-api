// models/tasks.js

let tasks = [];
let nextId = 1;

export function crearTask(titulo, descripcion) {
    const task = {
        id: nextId++,
        titulo,
        descripcion,
        completada: false,
        fechaCreacion: new Date()
    };
    tasks.push(task);
    return task;
}

export function getAllTasks() {
    return tasks;
}

export function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

export function editTask(id, updates) {
    const task = getTaskById(id);
    if (task) {
        Object.assign(task, updates);
        return task;
    }
    return null;
}

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    }
    return null;
}

export function getStatistics() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completada).length;
    const pendingTasks = totalTasks - completedTasks;

    const mostRecentTask = tasks.reduce((latest, task) =>
        latest.fechaCreacion > task.fechaCreacion ? latest : task, tasks[0]
    );

    const oldestTask = tasks.reduce((earliest, task) =>
        earliest.fechaCreacion < task.fechaCreacion ? earliest : task, tasks[0]
    );

    return {
        totalTasks,
        mostRecentTask,
        oldestTask,
        completedTasks,
        pendingTasks
    };
}
