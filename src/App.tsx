import { MenuItem } from "@/components/MenuItem";
import { OrderItem } from "@/components/OrderContent";
import { menuItems } from "@/data/db";
import { useOrder } from "@/hook/useOrder";

export function App() {
  const { order, addToOrder } = useOrder()
  return (
    <>
      <header className="text-3xl bg-teal-600 py-10">
        <h1 className="text-white text-center">Calculadora de Propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto my-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border-2 border-teal-600 p-5 space-y-5">
          <h2 className="font-bold text-3xl mb-5">Menu</h2>
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
          ))}
        </div>
        <div className="border-2 border-dotted border-teal-600 p-5">
          <h2 className="font-bold text-3xl mb-5">Consumo</h2>
          {order.length === 0 ? (
            <p className="text-lg">No hay ordenes....</p>
          ) : (
            <>
            {order.map(item => (
              <OrderItem key={item.id} item={item} />
            ))}
            </>
          )}
        </div>
      </main>
    </>
  )
}
