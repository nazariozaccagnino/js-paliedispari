let userWord = prompt('Inserisci una parola');
let text = userWord.charAt(userWord.length - 1)
// console.log(text, 'ultima lettera della parola utente')
let oppositeWord = '';

for(let i = userWord.length - 1; i >= 0; i--){
    // oppositeWord.push(userWord[i]);
    // console.log(userWord[i])
    oppositeWord += userWord[i]   
}
if(userWord === oppositeWord){
    console.log('la parola è palindroma');
}else{
    console.log('la parola NON è palindroma')
}
// console.log(oppositeWord);