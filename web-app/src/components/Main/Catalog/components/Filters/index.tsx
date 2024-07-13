import SearchBar from "./SearchBar";
import { Check, CheckProps } from "./types/Checkbox";
import { Range, RangeProps } from "./types/Range";

type CheckOrRange = RangeProps & {type: 'RANGE'} | CheckProps & {type: 'CHECK'}

export default function Filters() {
  const filters: CheckOrRange[] = [{
    title: "ДЛИННА",
    type: 'RANGE',
    config: {
      min: 1,
      max: 30,
      type: "м^2",
    }
  }, 
  {
    title: "ШИРИНА",
    type: 'RANGE',
    config: {
      min: 1,
      max: 30,
      type: "м^2",
    }
  }, 
  {
    title: "ПЛОТНОСТЬ",
    type: 'RANGE',
    config: {
      min: 30,
      max: 85,
      type: "г/м^2",
    }
  },
  {
    title: "ЦВЕТ",
    type: 'CHECK',
    variants: ["черный", "белый"]
  },
  {
    title: "ЦЕНА",
    type: 'RANGE',
    config: {
      min: 0,
      max: 100,
      type: "₽",
    }
  },
  ]
  return (
    <div className="display: flex flex-col h-auto">
      <SearchBar />
      <div className="flex flex-col gap-6 mt-8">
        {filters.map((filter, index) => (
          filter.type === "RANGE" ? (<Range key={filter.title} {...filter}/>) : (<Check key={filter.title} {...filter} />)
        ))}
      </div>
    </div>
  )
}