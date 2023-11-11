const Task = require("../models/taskModels")

const getAllTasks = async(req,res)=>{
    try{
        const allTasks = await Task.find({})
        res.status(200).json({allTasks});
        //res.status(200).send();
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(
            req.body
        )
        res.status(201).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const getTask = async (req,res)=>{
    try{
        const taskID = req.params.id
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const updateTask = async (req,res)=>{
    try{
        const taskID = req.params.id
        const task = await Task.findOneAndUpdate(
            {_id:taskID},
            req.body,
            {new:true,runValidators:true,}
        );
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteTask = async (req,res)=>{
    try{
        const taskID = req.params.id
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}