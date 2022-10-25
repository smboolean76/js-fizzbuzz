"use strict";
// Scrivi un programma che stampi in console i numeri da 1 a 100
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// for( let i = 1; i <= 100; i++ ) {

//     if( i % 15 === 0 ) {
//         console.log("FizzBuzz");
//     } else if( i % 3 === 0 ) {
//         console.log("Fizz");
//     } else if ( i % 5 === 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }

// seleziono il div contenitore dei miei items
const tableContainer = document.getElementById("table");

for( let i = 1; i <= 100; i++ ) {
    // creo l'elemento div base
    const item = document.createElement("div");
    item.classList.add("item");

    if( i % 15 === 0 ) {
        item.innerHTML = "FizzBuzz";
        item.classList.add("bg-coral");
    } else if( i % 3 === 0 ) {
        item.innerHTML = "Fizz";
        item.classList.add("bg-green");
    } else if ( i % 5 === 0 ) {
        item.innerHTML = "Buzz";
        item.classList.add("bg-pink");
    } else {
        item.innerHTML = i;
    }

    // inserire l'item nel suo contenitore "tableContainer"
    tableContainer.append(item);
}