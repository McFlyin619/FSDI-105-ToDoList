const inputTask = document.getElementById('input-task');
const listTask = document.getElementById('list-task');
let taskId = 0;

function Register(){
    // create alert
    // alert('You have added new Task!')
    taskId += 1;
    
    inputTask.value;
    // create li
    const newLi = document.createElement('li');

    // add the value
    newLi.innerHTML = `<button class="btn btn-success" onclick="removeTask(${taskId});">Completed</button> ${inputTask.value}`;

    newLi.setAttribute('class','list-group-item');

    newLi.setAttribute('id',taskId);
    // append 
    listTask.appendChild(newLi);

    Clear(); 
}

function Clear(){
    inputTask.value = '';
}

function removeTask(id){
    // Select element
    let selected = document.getElementById(id);
    // remove()
    selected.remove();
}
