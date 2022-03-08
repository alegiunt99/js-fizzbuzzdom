console.log('OK JS');

// devo creare un loop che conta i numeri da 1 a 100
// i numeri divisibili per 3, devo chiamarli "fizz"
// i numeri divisibili per 5, devo chiamarli "buzz"
// i numeri divisibili sia per 3 e per 5 devo chiamarli "fizzbuzz"
const boxesContainer = document.querySelector(".container"); 

for (let numberBasic = 1; numberBasic < 101; numberBasic++) {

    if(numberBasic % 3 === 0){

        let numberBasic = "fizz";

        console.log(numberBasic);

    } else if(numberBasic % 5 === 0){
        
        let numberBasic = "buzz";

        console.log(numberBasic)

    } else if (numberBasic % 3 === 0 && numberBasic % 5 === 0) {
        
        let numberBasic = "fizz" + "buzz";
        
        console.log(numberBasic);

    } else {
    
        console.log(numberBasic);
    }
    
}
