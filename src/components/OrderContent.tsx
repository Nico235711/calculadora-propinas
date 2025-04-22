import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../utils"

type OrderContentProps = {
  item: OrderItem
  removeItem: (id: OrderItem["id"]) => void
}

const OrderContent = ({ item, removeItem }: OrderContentProps) => {

  const subTotal = useMemo(() => item.price * item.quantity, [item])

  return (
    <div className="border-b-2 border-b-sky-200">
      <div className="flex justify-between p-3">
        <div>
          <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
          <p className="text-lg mt-3">
            X{item.quantity} - {formatCurrency(subTotal)}
          </p>
        </div>
        <button
          type="button"
          className="bg-red-500 size-8 rounded-full text-white font-black cursor-pointer"
          onClick={() => removeItem(item.id)}
        >X</button>
      </div>
    </div>
  )
}

export default OrderContent