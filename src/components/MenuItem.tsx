import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  
  return (
    <button
      type="button"
      className="border-2 border-sky-200 flex justify-between
      p-5 rounded-lg w-full my-5 last-of-type:mb-0 cursor-pointer hover:bg-sky-200 transition-all"
      onClick={() => addItem(item)}
    >
      <p className="text-lg font-bold">{item.name}</p>
      <p className="text-lg font-bold">${item.price}</p>
    </button>
  )
}

export default MenuItem