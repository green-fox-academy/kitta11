
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let testArray: number[] = [34, 1, 11, 34, 11, 52, 61, 1, 34];

//I have found this onlyUnique function on the net, tested it and since it worked I used it

function unique(inputArray: any[]) {
//this is the magical function
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let filteredArray: any[] = inputArray.filter(onlyUnique);
    return filteredArray.sort();
}
console.log(unique(testArray));

let testArray2: string[] = ['Soma', 'Kinga', 'Soma', 'Kitta', 'Kinga', 'Soma', 'soma'];
console.log(unique(testArray2));



