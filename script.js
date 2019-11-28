
let toDoList = [];
const input = document.querySelector("input");
const list = document.querySelector("ul");
const listItem = document.querySelectorAll("li") ;
let deleteToDo = document.querySelectorAll("trash");
let check = document.getElementById("check");

//input.addEventListener('keydown', runEvent);

//const newListItem = document.createElement('li');
//li.id = 'listItem';
//li.setAttribute();

//document.querySelector('ul').appendChild(li);


//toDo.push(newTask);

function addToDo(e){
  if(input.value === ''){
    alert("You need to input something!");
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  input.appendChild(li);

  input.value ='';
  }

//Check item as done --- COMPLETED

  document.querySelector('li')[
    document.addEventListener ? 'addEventListener' : 'attachEvent'
]('click', function() {
    this.style.color = this.style.color === 'black' ?
        'grey' : 'black';
        if(this.style.color === 'black'){
          this.style.textDecoration = 'none'
        } else {
          this.style.textDecoration = 'line-through'
        }
});















    /*
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);


     */
