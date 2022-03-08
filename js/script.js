console.log('OK JS');

// devo creare un loop che conta i numeri da 1 a 100
// i numeri divisibili per 3, devo chiamarli "fizz"
// i numeri divisibili per 5, devo chiamarli "buzz"
// i numeri divisibili sia per 3 e per 5 devo chiamarli "fizzbuzz"
const boxesContainer = document.querySelector(".container");

for (let numberBasic = 1; numberBasic < 101; numberBasic++){

    let boxesNumber = `<div id="number-${numberBasic}" class="numbers">${numberBasic}</div>`;

    boxesContainer.innerHTML += boxesNumber;

    console.log(numberBasic);

    if (numberBasic % 3 === 0){
        
    }
}