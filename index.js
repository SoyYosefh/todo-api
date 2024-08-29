// index.js
import express from 'express';
import tasksRouter from './routes/tasksRoutes.js'; 

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
