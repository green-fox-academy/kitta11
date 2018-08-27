'use strict'

let OneToTen: object[] = [
  { number: 1, numberTostring: 'one' },
  { number: 2, numberTostring: 'two' },
  { number: 3, numberTostring: 'three' },
  { number: 4, numberTostring: 'four' },
  { number: 5, numberTostring: 'five' },
  { number: 6, numberTostring: 'six' },
  { number: 7, numberTostring: 'seven' },
  { number: 8, numberTostring: 'eight' },
  { number: 9, numberTostring: 'nine' },
]

let TenToNineteen: object[] = [
  { number: 10, numberTostring: 'ten' },
  { number: 11, numberTostring: 'eleven' },
  { number: 12, numberTostring: 'twelve' },
  { number: 13, numberTostring: 'thirteen' },
  { number: 14, numberTostring: 'fourteen' },
  { number: 15, numberTostring: 'fifteen' },
  { number: 16, numberTostring: 'sixteen' },
  { number: 17, numberTostring: 'seventeen' },
  { number: 18, numberTostring: 'eighteen' },
  { number: 19, numberTostring: 'nineteen' },
]

let twentyNinety: object[] = [
  { number: 20, numberTostring: 'twenty' },
  { number: 30, numberTostring: 'thirty' },
  { number: 40, numberTostring: 'forty' },
  { number: 50, numberTostring: 'fifty' },
  { number: 60, numberTostring: 'sixty' },
  { number: 70, numberTostring: 'seventy' },
  { number: 80, numberTostring: 'eighty' },
  { number: 90, numberTostring: 'ninety' },
]

let hundred: string = 'hundred';


export function numberConverterToHundred(inputNumber: number): string {
  if (inputNumber < 10) {
    for (let i = 0; i < OneToTen.length; i++) {
      if (inputNumber === OneToTen[i]["number"]) {
        return OneToTen[i]["numberTostring"]
      }
    }
  } else if (inputNumber >= 10 && inputNumber < 20) {
    for (let i = 0; i < TenToNineteen.length; i++) {
      if (inputNumber === TenToNineteen[i]["number"]) {
        return TenToNineteen[i]["numberTostring"]
      }
    }
  } else if (inputNumber >= 20 && inputNumber < 100) {
    if (inputNumber % 10 === 0) {
      for (let i = 0; i < twentyNinety.length; i++) {
        if (inputNumber === twentyNinety[i]["number"]) {
          return twentyNinety[i]["numberTostring"]
        }
      }
    } else {
      let inpNumberToString: string = inputNumber.toString();
      let lastDigit: string = '';
      let secondDigit: string = ''
      for (let i = 0; i < OneToTen.length; i++) {
        if (inpNumberToString[1] == OneToTen[i]["number"]) {
          lastDigit = OneToTen[i]["numberTostring"]
        }
      }
      for (let i = 0; i < twentyNinety.length; i++) {
        if (inpNumberToString[0] + '0' == twentyNinety[i]["number"]) {
          secondDigit = twentyNinety[i]["numberTostring"]
        }
      }
      return `${secondDigit}-${lastDigit}`
    }
  }
}

export function numberConverterOverHundred(inputNumber: number): string {
  let inpNumberToString: string = inputNumber.toString();
  let digitNo: number = inpNumberToString.length
  let lastTwoDigit: number = parseInt(inpNumberToString[digitNo - 2] + inpNumberToString[digitNo - 1]);
  let hundredDigit: string = ''
  for (let i = 0; i < OneToTen.length; i++) {
    if (inpNumberToString[0] == OneToTen[i]["number"]) {
      hundredDigit = OneToTen[i]["numberTostring"]
    }
  }
  if (inputNumber % 100 === 0) {
    return `${hundredDigit} hundred`
  } else {
    return `${hundredDigit} hundred and ${numberConverterToHundred(lastTwoDigit)}`
  }
}

export function overThousand(inputNumber) {
  let inpNumberToString: string = inputNumber.toString();
  let digitNo: number = inpNumberToString.length
  let lastThreeDigit: number = parseInt(inpNumberToString[digitNo - 3] + inpNumberToString[digitNo - 2] + inpNumberToString[digitNo - 1])
  if (digitNo > 5) {
    let firstThreeDigit: number = parseInt(inpNumberToString[digitNo - 6] + inpNumberToString[digitNo - 5] + inpNumberToString[digitNo - 4])
    if (inputNumber % 1000 === 0) {
      return `${numberConverterOverHundred(firstThreeDigit)} thousand`
    } else {
      return `${numberConverterOverHundred(firstThreeDigit)} thousand ${numberConverterOverHundred(lastThreeDigit)}`
    }
  } else {
    let firstTwoDigit: number = parseInt(inpNumberToString[digitNo - 5] + inpNumberToString[digitNo - 4])
    if (inputNumber % 1000 === 0) {
      return `${numberConverterToHundred(firstTwoDigit)} thousand`
    } else {
      return `${numberConverterToHundred(firstTwoDigit)} thousand ${numberConverterOverHundred(lastThreeDigit)}`
    }
  }
}