const ContainerTask = document.querySelector('.container-task');
const input = document.querySelector('.input-todo');
const plus = document.querySelector('.span-icon-input');
const allTask = document.querySelector('.all-task');
const trash =document.querySelector('.span-trash');
const titleTask = document.querySelector('.title-task');
const Select = document.querySelector('select');
Select.addEventListener('click',divition);
plus.addEventListener('click',addtask);
allTask.addEventListener('click',checkremove);

function addtask(result){
    
    
    const Taskdiv = document.createElement('div');
    
     
    Taskdiv.style.display='flex';
    
    Taskdiv.classList.add("all-task");
     if(input.value.length>0){
    Taskdiv.innerHTML=`<div class="task">
    <p class="title-task">${input.value}</p>
    <div class="icon-task">
        <span class="span-check span-task"><i class="i-check fas fa-check-square icon-todo"></i></span>
        <span class="span-edit span-task"><i class="i-edit fas fa-pen-square icon-todo"></i></span>
        <span class="span-trash span-task"><i class="i-trash fas fa-trash-alt icon-todo"></i></span>
        
    </div>
</div>`

}


allTask.appendChild(Taskdiv);

}
function checkremove(a){
    const buttonofTask = a.target.parentElement.parentElement.parentElement;
    if(a.target.classList[0]==='i-trash'){
        buttonofTask.remove();
        
    }
    if(a.target.classList[0]==='i-check'){
        console.log(buttonofTask.classList.toggle('checkingtodo'));
        buttonofTask.classList.add.toggle('checkingtodo');
    }
}
function divition(e){
    console.log(e.target.value);
   const X=[...ContainerTask.childNodes];
   X.forEach((value)=>{
       switch (e.target.value) {
           case 'all':
               value.style.display='flex';
               break;
            case 'complete':
                if(X.classList.contains('complete')){
                    value.style.display='flex';
                }else{
                    value.style.display='none';
                }
                
                break;
                case 'uncomplete':
                if(!X.classList.contains('complete')){
                    value.style.display='flex';
                }else{
                    value.style.display='none';
                }
                break;
           
       }
    
   })
   console.log(X);
}





//function object Array Number String Boolean null undifind error 