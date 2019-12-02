//Add li's to ul via input box

function addTask(){
  let input = document.getElementById("input").value;
  let task = document.createTextNode(input);
  let newTask = document.createElement("li");
    newTask.appendChild(task);
    document.getElementById("ul").appendChild(newTask);
    form.reset();

//cross out completed to-dos    

  newTask.addEventListener('click', () => {
    newTask.style.textDecoration = newTask.style.textDecoration === 'none' ?
      'line-through' : 'none';
    }); 

//clear all completed to-dos

  let clearBtn = document.getElementById("clear");
  clearBtn.addEventListener('click', () => {
    if(newTask.style.textDecoration === 'line-through')
    newTask.innerHTML = '';
  });
 };


