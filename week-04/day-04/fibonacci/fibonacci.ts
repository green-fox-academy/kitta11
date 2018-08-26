'use strict'

export function fibonacci(inputNumber: any): number {
  try {
    if (typeof(inputNumber) !== 'number') {
      throw new Error('Please provide a number type of variable')
    }
  } catch (error) {
    throw error.message
  }
  try {
    if (inputNumber < 0) {
      throw new Error('Please provide a positive number')
    }
  } catch (error) {
    throw error.message
  }
  if (inputNumber === 0) {
    return 0;
  } else if (inputNumber === 1) {
    return 1
  } else if (inputNumber > 1) {
    return fibonacci(inputNumber - 2) + fibonacci(inputNumber - 1)
  }
}

