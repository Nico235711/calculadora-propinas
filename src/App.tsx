import { MenuItem } from "@/components/MenuItem";
import { OrderItem } from "@/components/OrderContent";
import { TipContent } from "@/components/TipContent";
import { menuItems } from "@/data/db";
import { useOrder } from "@/hooks/useOrder";
import { formatCurrency } from "@/utils/formatCurrency";

export function App() {
  const { order, tip, setTip, addToOrder, removeFromOrder, clearOrder, subTotal } = useOrder()
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
              <div className="max-h-96 overflow-y-auto scrollbar-thin">
                {order.map(item => (
                  <OrderItem key={item.id} item={item} removeFromOrder={removeFromOrder} />
                ))}
              </div>
              <TipContent setTip={setTip} />
              <div className="border-t-2 border-t-gray-300 space-y-3">
                <h2 className="font-bold text-3xl mb-5">Total a Pagar</h2>
                <p className="border-b border-b-gray-300">Subtotal a pagar: {""}
                  <span className="font-semibold">{formatCurrency(subTotal)}</span>
                </p>
                {tip !== 0 && (
                  <p className="border-b border-b-gray-300">Propina: {""}
                    <span className="font-semibold">{formatCurrency(subTotal * tip)}</span>
                  </p>
                )}
                {tip !== 0 && (
                  <p>Total a pagar: {""}
                    <span className="font-semibold">{formatCurrency(subTotal + tip)}</span>
                  </p>
                )}
              </div>
              <button
                type="button"
                className="w-full bg-gray-900 text-white text-lg py-3 mt-5"
                onClick={clearOrder}
              >Ordenar</button>
            </>
          )}
        </div>
      </main>
    </>
  )
}
