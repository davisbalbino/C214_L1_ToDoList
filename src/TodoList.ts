//title
//description
//targetdate
//type
//prioridade
//subtasks

export type Task = {
    tittle: string,
    description: string,
    targetDate: string,
    type: string,
    priority: string,
    subTasks: Task []
}

export class TodoList{
    private tasks: Task[] = []

    add(task:Task){
        this.tasks.push(task)
    }
}