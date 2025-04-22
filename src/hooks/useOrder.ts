import { useEffect, useState } from "react"
import { MenuItem, OrderItem } from "../types"

const MAX_ITEMS = 5
const initialOrder = () => {
  const orderLS = localStorage.getItem("orders")
  return orderLS ? JSON.parse(orderLS) : []
}

const initialTip = () => {
  const tipLS = localStorage.getItem("orders-tip")
  return tipLS ? Number(tipLS) : 0
}

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>(initialOrder)
  const [tip, setTip] = useState(initialTip)

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(order))
  }, [order]);

  useEffect(() => {
    localStorage.setItem("orders-tip", JSON.stringify(tip))
  }, [tip]);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(stateItem => stateItem.id === item.id)
    if (itemExists) {
      if (itemExists.quantity >= MAX_ITEMS) return
      const updatedItem = order.map(stateItem => (
        stateItem.id === item.id
          ? { ...stateItem, quantity: stateItem.quantity + 1 }
          : stateItem
      ))
      setOrder(updatedItem)
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: OrderItem["id"]) => {
    const updatedOrder = order.filter(item => item.id !== id)
    setOrder(updatedOrder) 
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    addItem,
    tip,
    setTip,
    removeItem,
    placeOrder
  }
}
