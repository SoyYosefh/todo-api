// models/tasks.js

let tasks = [];
let nextId = 1;

export function crearTask(titulo, descripcion) {
    const task = {
        id: nextId++,
        titulo,
        descripcion,
        completada: false,
        fechaCreacion: new Date(), // Formato fecha de creación en ISO 8601
        fechaCreacionLegible: new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).format(new Date()) // Formato legible para mostrar
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
    // Numero de task totales
    // Numero de task completadas (true)
    // Numero de task pendientes (false)
    // Task más reciente
    // Task más antigua

    const tareasTotales = tasks.length;
    const tareasCompletadas = tasks.filter(task => task.completada == true).length;
    const tareasPendientes = tasks.filter(task => task.completada == false).length;
    const tareasMasReciente = tasks.reduce((newest, task) => new Date(task.fechaCreacion) > new Date(newest.fechaCreacion) ? task : newest);
    const tareasMasAntigua = tasks.reduce((oldest, task) => new Date(task.fechaCreacion) < new Date(oldest.fechaCreacion) ? task : oldest);

    return {
        tareasTotales,
        tareasCompletadas,
        tareasPendientes,
        tareasMasReciente,
        tareasMasAntigua
    };
}
