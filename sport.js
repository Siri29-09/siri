let Btn1=document.querySelector("#but-1");
let taskInput=document.querySelector("#task-input");



function myFunction(callback) {
  let text = document.getElementById("task-input").value;
  
callback(text )

  
}

Btn1.addEventListener("click",()=>{
  myFunction((text)=>{
   const ul = document.getElementById("task-list")
   const li = document.createElement("li")
   const content = document.createTextNode(text)
   li.append(content)
   ul.appendChild(li)
   document.getElementById("task-input").value=""
  })
})

