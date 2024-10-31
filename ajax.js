console.log("WOW");

let first = document.getElementById('first');
first.addEventListener('click',btnClick)

let text = document.getElementById('text');

let second = document.getElementById('second');
second.addEventListener('click',btnClick1)

function btnClick(){
    console.log(first);
    const req = new XMLHttpRequest();
    
    req.open('GET','https://jsonplaceholder.typicode.com/todos/1',true); 
    // true for async req

    req.onprogress = function(){
        console.log('Loading......');
    }
    req.onload = function(){
        console.log(this.responseText)
        let data = JSON.parse(this.responseText)
        text.innerText="Loading.......";
        setTimeout(()=>{
            text.innerText = `
              User ID: ${data.userId}
              ID: ${data.id}
              Title: ${data.title}
              Completed: ${data.completed}
            `;
        },2000)
    }

    // send Request
    req.send();

}

function btnClick1(){
    console.log(second)
    if(text.innerText.length !=0){
        text.innerText="Clearing Data.......";
    }
    else{
        text.innerText="No Thing to clear";
    }
    setTimeout(()=>{
        text.innerText = "";
    },2000);
}