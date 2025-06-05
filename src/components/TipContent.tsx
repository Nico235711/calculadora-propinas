import type { Dispatch, SetStateAction } from "react"

type TipContentProps = {
  tip: number
  setTip: Dispatch<SetStateAction<number>>
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

export const TipContent = ({ tip, setTip }: TipContentProps) => {

  return (
    <div className="mt-5 space-y-3">
      <h2 className="text-3xl font-bold">Propina</h2>
      <form>
        {
          tipOptions.map(tipOption => (
            <div className="space-y-3 space-x-3" key={tipOption.id}>
              <input
                type="radio"
                name="tip"
                id="tip"
                value={tipOption.value} 
                onChange={e => setTip(Number(e.target.value))}
                checked={tipOption.value === tip}
              />
              <label htmlFor="tip">{tipOption.label}</label>
            </div>
          ))
        }
      </form>
    </div>
  )
}
