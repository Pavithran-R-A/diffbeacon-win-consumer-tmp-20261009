export interface Item {
  id: string;
  quantity: number;
}

export function totalQuantity(items: Item[]): number {
  let total = 0;
  for (const item of items) {
    total += item.quantity;
  }
  return total;
}
