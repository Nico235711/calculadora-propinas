import type { OrderItem, MenuItem } from "@/types";
import { useState } from "react";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)
  const addToOrder = (item: MenuItem) => {
    if (order.some(orderItem => orderItem.id === item.id)) {
      setOrder(order.map(orderItem => (
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      )))
    } else {
      const newOrderItem: OrderItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newOrderItem]);
    }
  };
  const removeFromOrder = (id: OrderItem["id"]) => {
    setOrder(order.filter(item => item.id !== id))
  }
  const clearOrder = () => {
    setOrder([])
    setTip(0)
  }
  const subTotal = order.reduce((accu, item) => accu + (item.price * item.quantity), 0)
  return {
    order,
    tip,
    setTip,
    addToOrder,
    removeFromOrder,
    clearOrder,
    subTotal,
  };
};
