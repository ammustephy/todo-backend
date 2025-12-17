const ToDoModel = require('../model/todo.model');


class ToDoService{
    static async createTodo(userId,title,desc){
        const createTodo = new ToDoModel({userId,title,desc});
        return await createTodo.save();
    }

    static async getTododata(userId){
        const todoData = await ToDoModel.find({userId});
        return todoData;
    }

    static async deleteTodo(id){
        const todoData = await ToDoModel.findOneAndDelete({_id:id});
        return todoData;
    }
}

module.exports = ToDoService;