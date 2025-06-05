import { useMemo } from "react"
import type { OrderItems } from "../types"
import { formatCurrency } from "../utils/formatCurrency"

type OrderTotalProps = {
  orders: OrderItems[]
  tip: number
  placeOrder: () => void
}

export const OrderTotal = ({ orders, tip, placeOrder }: OrderTotalProps) => {

  const subTotal = useMemo(() => orders.reduce((accu, order) => accu + (order.price * order.quantity), 0), [orders])
  const subTotalWithTip = useMemo(() => subTotal * tip, [subTotal, tip])
  const total = useMemo(() => subTotal + subTotalWithTip, [subTotal, tip])

  return (
    <div className="mt-5 space-y-2">
      <h2 className="text-3xl font-bold">Totales y Propinas</h2>
      <p>SubTotal a pagar: {formatCurrency(subTotal)}</p>
      <p>Propina: {formatCurrency(subTotalWithTip)}</p>
      <p>Total a Pagar: {formatCurrency(total)}</p>
      <button
        type="button"
        className="w-full bg-black mt-5 text-white text-lg py-3 cursor-pointer"
        onClick={placeOrder}
      >Ordenar</button>
    </div>
  )
}
