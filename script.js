
//starting variables

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("ul");
const listItem = document.getElementById("li") ;
let deleteToDo = document.getElementById("trash");
let check = document.getElementById("check");


function addToDo(e){
  if(input.value === ''){
    alert("You need to input something!");
  }

  const li = document.createElement('li');
  li.className = 'li';
  li.appendChild(document.createTextNode(input.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  input.appendChild(li);
  e.preventDefault();
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
