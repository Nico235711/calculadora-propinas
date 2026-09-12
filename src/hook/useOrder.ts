import type { OrderItem, MenuItem } from "@/types"
import { useState } from "react"

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])
  const addToOrder = (item: MenuItem) => {
    const newOrderItem: OrderItem = {
      ...item,
      quantity: 1
    }
    setOrder([...order, newOrderItem])
  }
  return {
    order,
    addToOrder
  }
}
