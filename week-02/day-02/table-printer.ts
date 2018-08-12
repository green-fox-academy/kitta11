'use strict';
export { };
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];
function printTheIngr(inputArray: object[]) {
	let colOne: string = 'Ingredient';
	let colTwo: string = 'Needs cooling';
	let colThree: string = 'In stock';
	let separatorOne: string = '-';
	let separatorTwo: string = '|'
	let separatorThree: string = '+';

	let tableLine: string = separatorThree + Array(20).join(separatorOne) + separatorThree + Array(15).join(separatorOne) + separatorThree + Array(10).join(separatorOne) + separatorThree;
	console.log(tableLine);
	let coloumHead: string = separatorTwo + ' ' + colOne + Array(20 - colOne.length - 1).join(' ') + separatorTwo + ' ' + colTwo + Array(15 - colTwo.length - 1).join(' ') + separatorTwo + ' ' + colThree + Array(10 - colThree.length - 1).join(' ') + separatorTwo;
	console.log(coloumHead);
	console.log(tableLine);
	let lineRow: string = '';
	for (let i = 0; i < ingredients.length; i++) {
		lineRow = separatorTwo + ' ' + inputArray[i]['name'] + Array(20 - inputArray[i]['name'].length - 1).join(' ') + separatorTwo + ' ' + inputArray[i]['needsCooling'] + Array(15 - inputArray[i]['needsCooling'].length - 1).join(' ') + separatorTwo + ' ' + inputArray[i]['inStock'] + Array(10 - inputArray[i]['inStock'].length - 1).join(' ') + separatorTwo;
	}
	console.log(lineRow);
	lineRow = '';
	console.log(tableLine);
}

printTheIngr(ingredients);