import { Todo } from "../models/model.js";

export const getTask = async(req, res) =>{
    const getTask = await Todo.find();
    res.json(getTask)
}