const display = document.getElementById('display');

function clearDisplay(){
    display.innerText ='';
}

function deleteLast(){
    display.innerText = display.innerText.slice(0,-1);
}

function appendToDisplay(value){
    display.innerText += value;
}

function calculateResult(){
    try{
        display.innerText = eval(display.innerText);
    }catch(e){
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', function(event){
    const key = event.key;
    if(key >= 0 && key <= 9){
        appendToDisplay(key);
    }else if(key ==='Enter' || key === '='){
        calculateResult();
    }else if(key === 'Backspace'){
        deleteLast();
    }else if(key === ' Escape'){
        clearDisplay();
    }else if(['+','-','*','/','%','.'].includes(key)){
        appendToDisplay(key);
    }
});