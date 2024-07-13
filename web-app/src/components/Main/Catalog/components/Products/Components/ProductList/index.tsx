import { useState } from "react"
import Card from "./Card"
import Pages from "./Pages"

export type ListProps = {}
export default function ProductList() {
  const [active, setActive] = useState<number>(1)

  const row = [{}, {}, {}]
  const list = [...row, ...row, ...row, ...row]
  return (
    <>
    <div className="grid grid-cols-3 grid-rows-4 gap-5 w-full mb-4">
      {list.map((item, index) => <Card key={index} id={index}/>)}
    </div>
    <Pages pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} active={active} handle={(page) => {setActive(page)}}/>
    </>
  )
}