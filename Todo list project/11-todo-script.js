const Output = JSON.parse(localStorage.getItem('todolist')) || [];
RenderTodo();
function RenderTodo(){
    let HTML = '';
    Output.forEach((todoList, index) =>{
        OutputObjects = Output[index] 
        const {name, dueDate} = todoList;
        const HTMLvalue = 
    `
    <div class="box-1">${name}</div> 
    <div class="box-2">${dueDate}</div> 
    <button class="delete-button";
    RenderTodo();
    saveToStorage();">Delete
    </button>
    `
    HTML += HTMLvalue ;
    })    
    document.querySelector('.pElem').innerHTML = HTML;

    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            Output.splice(index, 1);
            RenderTodo();
        })

    })
}


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        AddTodo();
    }
})
document.querySelector('.add-todo-button').addEventListener('click', () => {
    AddTodo();
})

function AddTodo(){
const Name = document.querySelector('.inputElem');
const Date = document.querySelector('.dateElem');
Output.push({name: Name.value, 
dueDate: Date.value});
Name.value = ('');
RenderTodo();
saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('todolist', JSON.stringify(Output));
}
