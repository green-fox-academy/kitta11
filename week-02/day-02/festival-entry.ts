'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];
//Q: is is how we can use splice for multidimensional arrayw
/*for (let index = 0; index < queue.length; index++) {
  if (queue[index]["guns"]>0) {
      queue.splice(index, 1)
  }  else {}
}
console.log(queue);
*/

//testing filter method
/*let filteredQueue = queue.filter(function(element){
    return element['guns']===0;
})
console.log(filteredQueue);
*/

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(inputArray: object[]) {
    let whoCanEnter: string[] = [];
    let watchlist: string[] = [];
    let securityAlcholLoot: number = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index]["guns"] === 0 && (inputArray[index]["alcohol"] === 0)) {
            whoCanEnter.push(inputArray[index]["name"]);
        } else if (inputArray[index]["guns"] !== 0) {
            watchlist.push(inputArray[index]["name"]);
        } else if (inputArray[index]["alcohol"] !== 0) {
            securityAlcholLoot += inputArray[index]["alcohol"];
            inputArray[index]["alcohol"] = 0;
            whoCanEnter.push(inputArray[index]["name"]);
        } else { }
    };
    return console.log(`These people can enter: ${whoCanEnter}
These people are on the watchlist: ${watchlist}
We can drink that amunt of confiscated alcohol: ${securityAlcholLoot}`);
}

securityCheck(queue);
