let Btn1=document.querySelector("#but-1");
let taskInput=document.querySelector("#task-input");

//  Btn1.addEventListener("click",()=>{
//    document.getElementById("task-list").innerHTML=taskInput.innerHTML="";
//  })

function myFunction(callback) {
  // Get the value of the input field with id="numb"
  let text = document.getElementById("task-input").value;
  // If x is Not a Number or less than one or greater than 10
  
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

