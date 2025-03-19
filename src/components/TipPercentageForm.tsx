import { Dispatch, SetStateAction } from "react"

const tipsOptions = [
  {
    id: "tip-10",
    label: "10%",
    value: .10
  },
  {
    id: "tip-20",
    label: "20%",
    value: .20
  },
  {
    id: "tip-50",
    label: "50%",
    value: .50
  },
]

type TipPercentageFormProps = {
  tip: number
  setTip: Dispatch<SetStateAction<number>>
}

const TipPercentageForm = ({ tip, setTip }: TipPercentageFormProps) => {

  return (
    <div>
      <h3 className="text-xl font-bold mt-5">Propina</h3>
      {tipsOptions.map(tipOption => (
        <div key={tipOption.id} className="space-x-3 mt-2">
          <input
            type="radio"
            id={tipOption.id}
            name="tip"
            value={tipOption.value} 
            onChange={e => setTip(Number(e.target.value))}
            checked={tipOption.value === tip}
          />
          <label htmlFor={tipOption.id}>{tipOption.label}</label>
        </div>
      ))}
    </div>
  )
}

export default TipPercentageForm