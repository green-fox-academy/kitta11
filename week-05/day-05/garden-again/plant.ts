'use strict'

export abstract class Plant {
  protected color: string
  protected currentWaterAm: number;
  protected absorbingCap: number;

  constructor(color: string) {
    this.color = color
    this.currentWaterAm = 0;
    this.absorbingCap = null;
  }
  abstract needWater(): void;

  public beWatered(waterAm: number): void {
    this.currentWaterAm+=waterAm*this.absorbingCap
  }

  getColor(){
    return this.color
  }

  abstract getType(): void 

}