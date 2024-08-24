import { useMemo, useState } from "react"
import { MenuItems, OrderItem } from "../types"

const useOrder = () => {

  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItems) => {

    const itemExists = order.find(orderItem => orderItem.id === item.id)

    if (itemExists) { // si existe en mi orden
      const updatedOrder = order.map(orderItem => (
        orderItem.id === item.id ?
          { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ))
      setOrder(updatedOrder)

    } else { // no existe en mi orden
      // no puedo agregar a order el item porque el item no tiene la propiedad
      // quantity asi que creo un nuevo item tomando una copia de las propiedades
      // del item anterior pero con la propiedad nueva
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: OrderItem["id"]) => {

    const updatedOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(updatedOrder)
  }

  const placeOrder = () => { 
    setOrder([])
    setTip(0)
  }

  const isHaveOrders = useMemo(() => order.length !== 0, [order])

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
    isHaveOrders
  }
}

export default useOrder