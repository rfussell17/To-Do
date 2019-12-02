
function addTask(){
  let input = document.getElementById("input").value;
  let task = document.createTextNode(input);
  let newTask = document.createElement("li");
    newTask.appendChild(task);
    document.getElementById("ul").appendChild(newTask);
    form.reset();

  newTask.addEventListener('click', () => {
    newTask.style.textDecoration = newTask.style.textDecoration === 'none' ?
      'line-through' : 'none';
    }); 

    let clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
  console.log("clear item button")
  if(newTask.style.textDecoration === 'line-through')
  newTask.innerHTML = '';
});
};


