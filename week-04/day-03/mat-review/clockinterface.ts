'use strict'

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}
//question: that is how we "implement" interface in relation to a function? 
function createClock (ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { };
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { };
  tick() {
    console.log('tikk takk');

  }
}

let testDigitalClock = new DigitalClock(24, 60);
let testAnalogClock = new AnalogClock(12, 60);

testDigitalClock.tick();
testAnalogClock.tick();
