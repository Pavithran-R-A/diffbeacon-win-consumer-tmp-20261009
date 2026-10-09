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

export function describeItem(item: Item): string {
  try {
    if (item.quantity > 0) {
      if (item.id.length > 8) {
        return `${item.id.slice(0, 8)} x${item.quantity}`;
      }
      return `${item.id} x${item.quantity}`;
    }
    return `${item.id} out of stock`;
  } catch {
    return '';
  }
}
