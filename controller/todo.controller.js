const ToDoService = require('../services/todo.services');

exports.createTodo = async (req,res,next) =>{
    try{
        const {userId,title,desc} = req.body;

        let todo = await ToDoService.createTodo(userId,title,desc);

        res.json({status:true,success:todo});
    }
    catch(error){
        next(error);
    }
}

exports.getUserTodo = async (req,res,next) =>{
    try{
        const {userId} = req.body;

        let todo = await ToDoService.getTododata(userId);

        res.json({status:true,success:todo});
    }
    catch(error){
        next(error);
    }
}


exports.deleteTodo = async (req,res,next) =>{
    try{
        const {id} = req.body;

        let todo = await ToDoService.deleteTodo(id);

        res.json({status:true,success:todo});
    }
    catch(error){
        next(error);
    }
}