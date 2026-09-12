import type { OrderItem } from "@/types"
import { formatCurrency } from "@/utils/formatCurrency"

type OrderItemProps = {
  item: OrderItem
}
export function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="border-t-2 border-t-gray-300 space-y-3 p-3 flex justify-between">
      <div>
        <p>{item.name} - x{item.quantity}</p>
        <p>{formatCurrency(item.price * item.quantity)}</p>
      </div>
      <button
        type="button"
        className="size-8 bg-red-600 flex items-center justify-center text-white rounded-full cursor-pointer">X
      </button>
    </div>
  )
}
