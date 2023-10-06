import { Item } from "./Item";

export abstract class TaxItem extends Item {
  calculateTax() {
    return (this.price * this.getTax()) / 100;
  }

  abstract getTax(): number;
}
