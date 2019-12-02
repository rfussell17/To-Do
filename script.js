
function addTask(){
  let input = document.getElementById("input").value;
  let task = document.createTextNode(input);
  let newTask = document.createElement("li");
    newTask.appendChild(task);
    document.getElementById("ul").appendChild(newTask);
    form.reset();
    console.log("add button pressed");  

  newTask.addEventListener('click', () => {
    console.log("li clicked")
    newTask.style.textDecoration = newTask.style.textDecoration === 'none' ?
      'line-through' : 'none';
    }); 
  };


    /******

    if(ul.length >= 10){
      alert("Oops! You need to complete a task first!");
    }
};
  

/**********/




let clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
  console.log("clear item button")
  ul.innerHTML = '';
}); 


