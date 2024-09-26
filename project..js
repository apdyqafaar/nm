let form =document.querySelector('.form')
let text =document.querySelector('.input')
let url =document.querySelector('.url')
let tasks=textArea =document.querySelector('#textArea')

 document.addEventListener('DOMContentLoaded',  AddSaverData)
 function AddSaverData(){
    let tasks=preparingData()
    tasks.forEach(task =>{
        //   console.log(task)
          addTasktoDomm(task)
    })
 }

let addTask=(e)=>{
  e.preventDefault()
//   let {text,url,textArea}=tasks
    let task={
    id:Date.now(),
      text:text.value,
      url:url.value,
      textArea:textArea.value
    }
  
   if(task){
    addTasktoDomm(task)
    savingData(task)
    text.value='';
    url.value='';
    textArea.value='';
   }
  
  
}


let addTasktoDomm=(task)=>{
  let right=document.querySelector('.right')
  let col=document.createElement('div')
col.classList.add('col')
col.innerHTML=`  <img src="${task.url}" class="url"alt="">
                <div class="content">
                    <h1 class='text'>${task.text}</h1>
                    <p class='area'>${task.textArea}</p>
                   <div class="acts">
                    <button class="edit">edir</button>
                    <button class="delete">delete</button>
                   </div>
                </div> `

                right.appendChild(col)
               actions(col, task.id, task)
}
let actions=(col,id, task)=>{
let delette=col.querySelector('.delete');
let edit=col.querySelector('.edit');

delette.addEventListener('click', ()=>{
    let tasks=preparingData()
    tasks=tasks.filter(task=> task.id !==id)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    col.remove()
})
edit.addEventListener('click',()=>{
    // let tasks=preparingData()
    let text=col.querySelector('.text')
    let textArea=col.querySelector('.area')
    let url=col.querySelector('.url')

    // console.log(text.textContent)
    // console.log(textArea.textContent)
    // console.log(url.src)
 let textvalue= prompt('pleae enter title', text.textContent)
let textAreavalue= prompt('chenge ypur post', textArea.textContent)
let urlValue=  prompt('src image', url.src)
 text.textContent=textvalue
 url.src=urlValue
 textArea.textContent=textAreavalue
  apdatingEditlocal(id, textAreavalue, textvalue, urlValue)
})
}
let apdatingEditlocal=(id, area, text, url)=>{
    let tasks=preparingData()
    let task=tasks.find(task => task.id ==id)
console.log(task)
 task.text=text;
 task.url=url;
 task.textArea=area;
//     let textt=task.querySelector('.text')
//    let textArea=task.querySelector('.area')
//    let urll=task.querySelector('.url')

//    textt.textContent=text
//    urll.src=url
//    textArea.textContent=area

   localStorage.setItem('tasks', JSON.stringify(tasks))
}

let savingData=(task)=>{
 let old=preparingData()
 old.push(task)

    localStorage.setItem('tasks',JSON.stringify(old))
}

let preparingData=()=>{
    let old=JSON.parse(localStorage.getItem('tasks')) ||[];
    return old
}






form.addEventListener('submit', addTask)




const blus=document.querySelector('.blus')
blus.addEventListener('click', ()=>{
    // let form =document.querySelector('.form')
    form.classList.toggle('visible')
})


// form.addEventListener('submit', addTask)