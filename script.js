
function toDoList(){
  let input = document.getElementById("input").value;
  let task = document.createTextNode(input);
  let newTask = document.createElement("li");
  newTask.appendChild(task);
  document.getElementById("toDoList").appendChild(newTask);
  
  input.value = '';

  if(newTask === 10){
    alert("Oops! You need to complete a task first!");
  }
};

let trashButton = document.getElementById("trash");
trashButton.addEventListener('click', () => {
  console.log("trash clicked")
});

let checkButton = document.getElementById("check");
checkButton.addEventListener('click', () => {
  console.log("check clicked");
  let li = document.getElementsByClassName('.li');
  li.style.textDecoration = li.style.textDecoration === 'none' ?
          'line-through' : 'none';
});




/*

function striked(){
  document.querySelector('li')[
    document.addEventListener ? 'addEventListener' : 'attachEvent'
    ]('click', function() {
      this.style.textDecoration = this.style.textDecoration === 'none' ?
          'line-through' : 'none';
});
};

*/

