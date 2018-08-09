'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 2000 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 3000 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 4000 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);

function getNameAndBalance(inputAccNum: number, inputArray: any[]) {
    let selectedClient: any[][] = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i]["accountNumber"] === inputAccNum) {
            selectedClient.push(inputArray[i]["clientName"], inputArray[i]["balance"]);
            return selectedClient;
        }
    }
}

//testing the function
console.log(getNameAndBalance(43546731, accounts));

//this function helps me to identify a client based on the acc number
function getClientID(inputAccNum: number, inputArray: any[]) {
    let selectedClientID: number = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i]["accountNumber"] === inputAccNum) {
            selectedClientID = i;
            return selectedClientID;
        }
    }
}

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer

function transferAmount(inputArray: any[][], fromAccNo: number, toAccNo: number, cashAmount: number) {
    if (getNameAndBalance(fromAccNo, inputArray) && getNameAndBalance(toAccNo, inputArray)) {
        let fromClientId: number = getClientID(fromAccNo, inputArray);
        let toClientId: number = getClientID(toAccNo, inputArray);
        inputArray[fromClientId]["balance"] -= cashAmount;
        inputArray[toClientId]["balance"] += cashAmount;
        return inputArray;
    } else {
        console.log(`404 - account not found`);
    }
}

//testing the transferamount function
console.log(accounts[2]);
transferAmount(accounts, 43546731, 23456311, 500);
console.log(accounts[2]);
transferAmount(accounts, 43546731, 23456311, 1000);
console.log(accounts[2]);

export = {
getNameAndBalance,
transferAmount,
accounts
};