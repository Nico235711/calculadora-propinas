import { MenuItem } from "./components/MenuItem"
import { OrderContent } from "./components/OrderContent"
import { OrderTotal } from "./components/OrderTotal"
import { TipContent } from "./components/TipContent"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

export const App = () => {

  const { orders, addToOrder, isEmpty, removeFromOrder, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-500 p-6">
        <h1 className="text-3xl text-gray-800 font-black text-center">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto p-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 space-y-4">
          <h2 className="text-3xl font-bold">Menú</h2>
          {
            menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item} 
                addToOrder={addToOrder} 
              />
            ))
          }
        </div>
        <div className="p-5 border-2 border-dashed border-gray-300 rounded h-screen overflow-y-scroll">
          {
            isEmpty ? (
              <p className="text-center text-lg">No hay ordenes</p>
            ) : (
              <>
                <h2 className="text-3xl font-bold">Orden</h2>
                <OrderContent
                  orders={orders} 
                  removeFromOrder={removeFromOrder} 
                />
                <TipContent
                  tip={tip}
                  setTip={setTip} 
                  />
                <OrderTotal
                  orders={orders}
                  tip={tip} 
                  placeOrder={placeOrder} 
                />
              </>
            )
          }
        </div>
      </main>
    </>
  )
}
