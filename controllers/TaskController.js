const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(req,res){
        res.render('tasks/create')
    }

    static async createTaskSave(req,res){
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)
        res.redirect('/tasks')

    }

    static async removeTask(req,res){
        const id = req.body.id
        await Task.destroy({where:{id:id}})
        res.redirect('/tasks')
    }

    static async editTaskPost(req,res){

        const id = req.body.id
        const task = {
            title: req.body.title,
            description: req.body.description,
        }
       // console.log(`esse e o tasks que imprimir ${task}`)
        await Task.update(task,{where:{id:id}})

        res.redirect('/tasks')
    }
    static async editTaskShow(req,res){
        const id = req.params.id
        console.log('esta e o id passado do form: ',id)
        const tasks = await Task.findOne({raw:true,where:{id:id}}) 
        res.render('tasks/edit',{tasks})
    }
    static async updateTask(req,res){
        
    }

    static async toggleTaskStatus(req,res){
        const id = req.body.id
        const task = {
            done: req.body.done ==='0' ? true : false //essa aqui equivale ao if( done === '0'){ done true} esle{done = false}
        }
        await Task.update(task,{where:{id : id}})
        res.redirect('/tasks')
    }

    static async showTasks(req,res){
        const tasks = await Task.findAll({raw:true})
        res.render('tasks/all',{tasks})
    }
}