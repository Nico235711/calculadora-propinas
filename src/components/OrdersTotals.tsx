import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../utils"

type OrdersTotalsProps = {
  tip: number
  order: OrderItem[]
  placeOrder: () => void
}

const OrdersTotals = ({ tip, order, placeOrder }: OrdersTotalsProps) => {

  const subTotal = useMemo(() => order.reduce((accu, item) => (
    accu + (item.price * item.quantity)
  ), 0), [order])
  const tipTotal = useMemo(() => subTotal * tip, [order, tip])
  const total = useMemo(() => subTotal + tipTotal, [order, tip])

  return (
    <div className="mt-5">
      <p className="font-bold text-lg">SubTotal: <span className="font-light">{formatCurrency(subTotal)}</span></p>
      <p className="font-bold text-lg">Propina: <span className="font-light">{formatCurrency(tipTotal)}</span></p>
      <p className="font-bold text-lg">Total: <span className="font-light">{formatCurrency(total)}</span></p>
      <button
        type="button"
        className="bg-black text-white text-xl font-bold py-2 w-full mt-5 cursor-pointer hover:opacity-80 disabled:opacity-10 disabled:cursor-not-allowed transition-all"
        disabled={tip === 0}
        onClick={placeOrder}
      >Ordenar</button>
    </div>
  )
}

export default OrdersTotals