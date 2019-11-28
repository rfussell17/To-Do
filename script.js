
let toDoList = ['bing', 'bong', 'chug', 'chugga'];
let input = document.getElementById("input");
let list = document.getElementById("ul");
let li = document.getElementById("li") ;
let deleteToDo = document.querySelector("X");

for(let i = 0; i < toDoList.length; i++);
//toDoList.forEach(toDo);
//toDo.push(newTask);

function toDo(){
  li.appendChild(input);
  ul.appendChild(li);
  }



function crossOffToDo(){
  document.getElementById("li").style.color = "grey";
  document.getElementById("li").style.textDecoration = "line-through";
  
    console.log("li clicked");
}
    checkToDo = document.getElementById('li'.toggleMe).addEventListener('click', () => {
      crossOffToDo();
    });


    /*
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);

  function toDo(){
  li.appendChild(txtNode);
  list.appendChild(li)
  }
  

  if (e.keyCode == 13) {
      const toDo = input.value;
      if(toDo){
        addTodo(toDo);
      }
      input.value = "";
     }
     */
