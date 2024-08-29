// routes/tasks.js
import express from 'express';
import {
    crearTask,
    getAllTasks,
    getTaskById,
    editTask,
    deleteTask,
    getStatistics,
} from '../models/tasksModel.js'; // Asegúrate de usar la extensión .js

const router = express.Router();

router.post('/', (req, res) => {
    const { titulo, descripcion } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }
    const task = crearTask(titulo, descripcion);
    res.status(201).json(task);
});

router.get('/', (req, res) => {
    res.json(getAllTasks());
});

router.get('/:id', (req, res) => {
    const task = getTaskById(Number(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Tarea no encontrada' });
    }
});

router.put('/:id', (req, res) => {
    const updates = req.body;
    const task = editTask(Number(req.params.id), updates);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Tarea no encontrada' });
    }
});

router.delete('/:id', (req, res) => {
    const task = deleteTask(Number(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Tarea no encontrada' });
    }
});

router.get('/stats', (req, res) => {
    res.json(getStatistics());
});

export default router;
