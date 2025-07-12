import { Todo } from "../models/model.js";

export const addTask = async(req, res) =>{
    const task = req.body;
    const todo = new Todo(task);
    await todo.save()
    res.json(
        todo
    )
}