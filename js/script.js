console.log('OK JS');

// devo creare un loop che conta i numeri da 1 a 100
// i numeri divisibili per 3, devo chiamarli "fizz"
// i numeri divisibili per 5, devo chiamarli "buzz"
// i numeri divisibili sia per 3 e per 5 devo chiamarli "fizzbuzz"
const boxesContainer = document.querySelector(".container"); 

for (let numberBasic = 1; numberBasic < 101; numberBasic++) {


    // numeri divisibili sia per 3 che per 5 : fizzbuzz
    if(numberBasic % 3 === 0 && numberBasic % 5 === 0) {
        
        let numberBasic = "fizzbuzz";

        console.log(numberBasic);

        let boxesNumber = `<div class="numbers fizzbuzz">fizzbuzz</div>`;

        boxesContainer.innerHTML += boxesNumber;


    // numeri divisibili per 5: buzz
    } else if(numberBasic % 5 === 0){
        
        let numberBasic = "buzz";

        console.log(numberBasic)

        let boxesNumber = `<div class="numbers buzz">buzz</div>`;

        boxesContainer.innerHTML += boxesNumber;

    // Numeri divisibili per 3: fizz 
    } else if (numberBasic % 3 === 0){

        let numberBasic = "fizz";
    
        console.log(numberBasic);

        let boxesNumber = `<div class="numbers fizz">fizz</div>`;

        boxesContainer.innerHTML += boxesNumber;
    


    // numeri normali 
    } else {
    
        console.log(numberBasic);

        let boxesNumber = `<div class="numbers number-basic">${numberBasic}</div>`;

        boxesContainer.innerHTML += boxesNumber;
    }
    
}
