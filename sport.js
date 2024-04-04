let Btn1=document.querySelector("#but-1");
let taskInput=document.querySelector("#task-input");
let taskList=document.querySelector("#task-list");

Btn1.addEventListener("click",()=>{
  if(taskInput.value !==""){
    const taskText=taskInput.value;
    const listItem=document.createElement('li')
    listItem.innerHTML=` ${taskText}  <button type="button" class="Delete-btn btn-outline-danger ms-5"><i class="fa-solid fa-xmark"></i></button>`;
    taskList.appendChild(listItem);
    taskInput.value="";
  }
})
taskList.addEventListener('click',(event)=>{
     if(event.target.classList.contains("Delete-btn")){
      const listItem=event.target.parentElement;
      taskList.removeChild(listItem);
     }
})



