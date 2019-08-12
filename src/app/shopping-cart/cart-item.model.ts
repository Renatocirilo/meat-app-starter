import { MenuItem } from "app/menu-item/menu-item.model";

export class CarItem {
  constructor(public menuItem: MenuItem, public quantity: number = 1) {}

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}
