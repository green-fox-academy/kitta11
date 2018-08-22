import{Reservation} from "./reservation"
'use strict';

let reservationOne: Reservation = new Reservation()
let bookingList: string [] = [];

for (let index = 0; index < 10; index++) {
  bookingList.push(reservationOne.addReservation()) 
}

bookingList.forEach(element => {
console.log(element);
});

