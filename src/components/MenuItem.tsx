import type { MenuItem } from "@/types"
import { formatCurrency } from "@/utils/formatCurrency"

type MenuItemProps = {
  item: MenuItem
  addToOrder: (item: MenuItem) => void
}

export function MenuItem({ item, addToOrder }: MenuItemProps) {
  return (
    <button
      type="button"
      className="border border-teal-500 p-5 rounded-lg w-full flex flex-col md:flex-row md:justify-between text-left text-lg font-semibold hover:bg-teal-200 transition-all"
      onClick={() => addToOrder(item)}
    >
      <span>{item.name}</span> 
      <span>{formatCurrency(item.price)}</span>
    </button>
  )
}
