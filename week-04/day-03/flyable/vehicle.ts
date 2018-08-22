
export class Vehicle {
  protected name: string;
  protected maxCapacity: number;
  protected currentCapacity: number;
  protected maxFlyingHeight: number;

  constructor(name: string) {
    this.name = name;
    this.currentCapacity = 0;
  }

  getCurrentCap(){
    return this.currentCapacity;
  }

  public board(noPassangers: number) {
    if (this.maxCapacity < noPassangers) {
      console.log(`You have exceeded my capacity with ${noPassangers - this.maxCapacity}`);
    } else {
      this.currentCapacity = noPassangers;
    }
  }

  getInfoCard() {
    console.log(
      `name: ${this.name}, 
      current capacity: ${this.currentCapacity}, 
      max capacity ${this.maxCapacity}, 
      max flying height ${this.maxFlyingHeight}`);
  }
}