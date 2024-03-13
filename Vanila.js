let whobtn = document.querySelector('button');
whobtn.addEventListener("click", InputMsg);

function InputMsg(){
    let name = prompt('Enter Name');
    whobtn.textContent = 'Hello I am ' + name;
    
}

