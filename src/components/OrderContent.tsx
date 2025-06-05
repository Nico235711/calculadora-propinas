import type { OrderItems } from "../types"
import { formatCurrency } from "../utils/formatCurrency"

type OrderContentProps = {
  orders: OrderItems[]
  removeFromOrder: (id: OrderItems["id"]) => void
}

export const OrderContent = ({ orders, removeFromOrder }: OrderContentProps) => {

  return (
    <div className="space-y-4 mt-5">
      {
        orders.map(order => (
          <div
            key={order.id}
            className="flex justify-between items-start border-b-2 border-b-gray-300 last-of-type:border-b-0 p-2">
            <div className="text-lg">
              <p>{order.name} - {formatCurrency(order.price)}</p>
              <p className="font-bold">X{order.quantity} - {formatCurrency(order.price * order.quantity)}</p>
            </div>
            <button
              type="button"
              className="bg-red-700 text-white size-8 rounded-full cursor-pointer"
              onClick={() => removeFromOrder(order.id)}
            >X</button>
          </div>
        ))
      }
    </div>
  )
}
