import { useEffect, useMemo, useState } from "react"
import type { MenuItems, OrderItems } from "../types"

const MAX_ITEMS = 10
const INITIAL_ORDERS = (): OrderItems[] => {
  const localStorageOrders = localStorage.getItem("orders")
  return localStorageOrders ? JSON.parse(localStorageOrders) : []
}

const INITIAL_TIP = (): number => {
  const localStorageTip = localStorage.getItem("tip")
  return localStorageTip ? JSON.parse(localStorageTip) : 0
}

export const useOrder = () => {
  const [orders, setOrders] = useState<OrderItems[]>(INITIAL_ORDERS)
  const [tip, setTip] = useState(INITIAL_TIP)

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders))
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("tip", JSON.stringify(tip))
  }, [tip]);

  const addToOrder = (item: MenuItems) => {
    const itemExists = orders.findIndex(order => order.id === item.id)
    if (itemExists >= 0) {
      if (orders[itemExists].quantity >= MAX_ITEMS) return
      const updatedOrders = [...orders]
      updatedOrders[itemExists].quantity++
      setOrders(updatedOrders)
    } else {
      const newOrder: OrderItems = { ...item, quantity: 1 }
      setOrders([...orders, newOrder])
    }
  }

  const isEmpty = useMemo(() => orders.length === 0, [orders])
  const removeFromOrder = (id: OrderItems["id"]) => {
    const updatedOrders = orders.filter(order => order.id !== id)
    setOrders(updatedOrders)
  }

  const placeOrder = () => {
    setOrders([])
    setTip(0)
  }

  return {
    orders,
    addToOrder,
    isEmpty,
    removeFromOrder,
    tip,
    setTip,
    placeOrder,
  }
}
