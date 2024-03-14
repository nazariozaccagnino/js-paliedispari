function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let button = document.getElementById("button")
button.addEventListener('click', function() {

// let odd = document.getElementById("odd").value;//dispari
// console.log(odd)
// let even = document.getElementById("even").value;//pari
// console.log(even)
let choice = parseInt(document.getElementById("choice").value);
console.log(choice, 'pari o dispari');
let userNumber = parseInt(document.getElementById("userNumber").value);
console.log(userNumber, 'numero utente');
let message = '';

pcNumber = getRndInteger(1,5);
console.log(pcNumber, 'numero pc casuale')
result = pcNumber + userNumber;
console.log(result, 'risultato della somma')

if(choice === 1 && result % 2 === 0){
    message = `pari, hai vinto`
    console.log(message)
}if(choice === 2 && result % 2 != 0){
    message = `dispari, hai vinto`
    console.log(message)
}else{
    message = `Hai perso`
}
})





