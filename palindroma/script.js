function palindrome(userWord) {    
    // userWord = prompt('Inserisci una parola');
    let oppositeWord = '';
    let message = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        oppositeWord += userWord[i]
    }
    if (userWord === oppositeWord) {
        message = 'la parola è palindroma'        
    } else {
        message = 'la parola NON è palindroma'        
    }
    return message
}

let result = palindrome('osso');
console.log(result, "console log della funzione invocata")