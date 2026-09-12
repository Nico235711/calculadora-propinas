import type { Dispatch, SetStateAction } from "react"

type TipContentProps = {
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

export function TipContent({ setTip }: TipContentProps) {
  return (
    <div className="my-5 border-t-2 border-t-gray-300">
      <h2 className="font-bold text-3xl mb-5">Propina</h2>
      <form>
        {tipOptions.map(tip => (
          <div className="space-x-3">
            <input
              type="radio"
              id={tip.id}
              value={tip.value}
              name="tip"
              onChange={e => setTip(Number(e.target.value))}
            />
            <label htmlFor={tip.id} className="text-lg font-semibold">{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}
