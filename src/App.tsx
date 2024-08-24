import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder, isHaveOrders } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl font-bold text-center">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 lg:grid lg:grid-cols-2">
        <div className="p-5">
          <h2 className="mb-5 text-5xl font-bold">Menú</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {
              menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))
            }
          </div>
        </div>

        <div className="border-2 border-slate-300 rounded-md p-5 m-5 space-y-10">
          {
            order.length ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                  isHaveOrders={isHaveOrders}
                />

                <TipPercentageForm
                  tip={tip}
                  setTip={setTip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="font-bold text-3xl text-indigo-600">La orden esta vacía</p>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
