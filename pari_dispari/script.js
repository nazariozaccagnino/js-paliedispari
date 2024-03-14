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

// let odd = document.getElementById("odd").value;//dispari
// console.log(odd)
// let even = document.getElementById("even").value;//pari
// console.log(even)

let choice = parseInt(document.getElementById("choice").value);

// console.log(choice, 'pari o dispari');
let userNumber = parseInt(document.getElementById("userNumber").value);
document.getElementById('yournumber').innerHTML = userNumber;
// console.log(userNumber, 'numero utente');
let message = '';

pcNumber = getRndInteger(1,5);
document.getElementById('pcnumber').innerHTML = pcNumber;
// console.log(pcNumber, 'numero pc casuale')
result = sumOddOrEven(pcNumber + userNumber);
// console.log(result, 'è pari?')

//sezione messaggi
let oddeven = document.getElementById("choice").value;
document.getElementById('odd-or-even').innerHTML = oddeven;
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

// if(choice === 1 && result % 2 === 0){
//     message = `pari, hai vinto`
//     console.log(message)
// }if(choice === 2 && result % 2 != 0){
//     message = `dispari, hai vinto`
//     console.log(message)
// }else{
//     message = `Hai perso`
// }
// })





