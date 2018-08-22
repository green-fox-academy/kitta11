import { Reservationy } from "./reservationI";
import {randomDayGen} from "./../../../library/randomday"
import {randomString} from "./../../../library/randomstring"

'use strict';

let weekAbbrev: string [] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export class Reservation implements Reservationy {

  getDowBooking(): string {
    return randomDayGen(weekAbbrev);
  }

  getCodeBooking(): string {
    return randomString(8);
  }

  addReservation () {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`
  }

  getReservationInfo() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  } 
}