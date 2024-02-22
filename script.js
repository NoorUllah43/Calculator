let display = document.getElementById("Display")


function At_Add(n){
    display.value += n;
}


function cls(){
    display.value = "";
}

function del(){
    display.value = display.value.substr(0,display.value.length-1)
}

function calculate(){
    display.value = eval(display.value)
}