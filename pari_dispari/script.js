function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sumOddOrEven(casualnumber) {
    let even    
    if (casualnumber % 2===0){
        even = true
    } else{
        even = false
    }
    return even
} 

let button = document.getElementById("button")

button.addEventListener('click', function() {
let choice = parseInt(document.getElementById("choice").value);
let userNumber = parseInt(document.getElementById("userNumber").value);
let message = '';
pcNumber = getRndInteger(1,5);
result = sumOddOrEven(pcNumber + userNumber);


//sezione DOM
let oddeven = document.getElementById("choice").value;
document.getElementById('odd-or-even').innerHTML = oddeven;
document.getElementById('yournumber').innerHTML = userNumber;
document.getElementById('pcnumber').innerHTML = pcNumber;
document.getElementById('total').innerHTML = pcNumber + userNumber
//

if(choice === 1 && result === true){
    message = `Pari, hai vinto`
    console.log(message)
} else if (choice === 2 && result === false){
    message = `Dispari, hai vinto`
    console.log(message)
} else{
    message = `Hai perso`
    console.log(message)
}
document.getElementById('message').innerHTML = message
})






