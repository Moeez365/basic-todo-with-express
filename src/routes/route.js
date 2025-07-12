import express from 'express';
import { addTask } from '../controllers/addTask.js';
import { getTask } from '../controllers/getTask.js';

const router = express.Router();

router.post('/add-task', addTask);
router.get('/get-task', getTask);

export default router;
