/* Descrizione:
Visualizzare in pagina 5 numeri casuali. */

// select DOM elements
const numberEl = document.getElementById("numbers-list");
const countdownEl = document.getElementById("countdown");
const instructionEl = document.getElementById("instructions");
const answersFormEl = document.getElementById("answers-form")
const formControlEl = document.querySelector(".form-control")
const inputEl = document.querySelectorAll("#input-group input")
const messageEl = document.getElementById("message")

// select form elements


// functions
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  // loop to generate 5 random numbers
  const number = [];
  for(let i = 0; i < 5; i++) {
    number.push(getRandomInteger(1, 50));
  }
  console.log(number);

  // insert the 5 random numbers in HTML
  const numberWithoutComma = number.join(" ");
  numberEl.insertAdjacentHTML("afterbegin", `<li>${numberWithoutComma}</li>`)

/* Da lì parte un timer di 30 secondi. */

// set variable to 30 seconds
let timer = 30;

// create a setInterval to start the countdown
const intervalId = setInterval(function(){
    timer--;
    countdownEl.innerText = timer;
    if(timer == 0) {
        clearInterval(intervalId)

        /* Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce. */
        numberEl.classList.add("d-none");
        countdownEl.innerText = "Tempo scaduto!"
        instructionEl.innerText = "Inserisci qui i numeri che hai visto precedentemente nell'ordine che preferisci:"
        answersFormEl.classList.remove("d-none")
    }
}, 200)


/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let userChoice = [];
let rightNumbers = [];

answersFormEl.addEventListener("submit", function(e){
    e.preventDefault();
    for(let i = 0; i < 5; i++){
        let userInput = inputEl[i].value;
        userChoice.push(Number(userInput));

        if(userChoice.includes(number[i])){
            rightNumbers.push(number[i]);
        }
    }

    messageEl.innerText = `Congratulazioni, hai indovinato ${rightNumbers.length} numeri: ${rightNumbers}`
    
    
})




/* NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano, in inglese o nella lingua che preferite.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"  */