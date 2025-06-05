import type { MenuItems } from "../types"

type MenuItemProps = {
  item: MenuItems
  addToOrder: (item: MenuItems) => void
}

export const MenuItem = ({ item, addToOrder }: MenuItemProps) => {

  return (
    <button
      type="button"
      className="flex items-center justify-between w-full border-2 border-teal-400 p-2 rounded hover:bg-teal-300 cursor-pointer"
      onClick={() => addToOrder(item)}
    >
      <p className="text-lg font-semibold">{item.name}</p>
      <p className="text-lg font-semibold">${item.price}</p>
    </button>
  )
}
