let todos = [
    {
    id: 1,
    user_id: 7,
    name: "Farhod",
    age: 22,
    job: 'backend',
    Isworked: "true",
    new : "doc"

},
{
    id: 2,
    user_id: 4,
    name: "Rustam",
    age: 22,
    job: 'backend'
},
{
    id: 3,
    user_id: 4,
    name: "Farhod",
    age: 22,
    job: 'backend'
},
{
    id: 4,
    user_id: 5,
    name: "Farhod",
    age: 22,
    job: 'backend'
},
{
    id: 5,
    user_id: 6,
    name: "rustam",
    age: 27,
    job: 'frontent'
}
]

export const getAll = (req, res) => {
    // const user_id = req.params.id
    // const filter = todos.filter(byId => byId.user_id === +user_id)
    res.json(todos)
}

export const create = (req, res) => {
    const req_todo = req.body
    const todos_length = todos.length
    req_todo.id =  `${todos_length + 1}`
    todos.push(req_todo)
    res.send('All ok')
}

export const remove = (req, res) => {
    todos = todos.filter(elem => elem.id !== +req.params.id)
    res.json({massage:'deleted'})
}

export const update = (req, res) => {
    const idx = +req.params.id
    let newTodo = req.body
    newTodo.id = idx
    todos[idx - 1] = newTodo
    res.json('okoko')
}














