import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrdersTotals from "./components/OrdersTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

const App = () => {

  const {
    order,
    addItem,
    tip,
    setTip,
    removeItem,
    placeOrder
  } = useOrder()

  return (
    <>
      <header className="bg-sky-300 py-5">
        <h1 className="text-center font-bold text-3xl">Calculadora de Propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-20">
        <div className="p-5">
          <h2 className="font-black text-2xl">Menú</h2>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
        <div className="p-5 mx-5 border-2 border-dashed border-sky-300">
          {order.length === 0 ? (
            <p className="text-lg text-center">La orden esta vacía</p>
          ) : (
            <>
              <h2 className="font-black text-2xl border-b-2 border-b-sky-200">Consumo</h2>
              {order.map(item => (
                <OrderContent
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                />
              ))}
              <TipPercentageForm
                tip={tip} 
                setTip={setTip} 
              />
              <OrdersTotals
                tip={tip} 
                order={order} 
                placeOrder={placeOrder} 
              />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App