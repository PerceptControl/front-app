import "./style.css"
import { useState } from "react"
import { CategoryItem, Item } from "./Item"

export type CategoriesProps = {
  list: Item[]
}

export default function Categories({ list = [] }: CategoriesProps) {
  const [selected, setSelected] = useState<Item[]>([])

  const select = (id: string) => {
    const oldSelected = selected.find(item => item.id === id)
    if (oldSelected) {
      setSelected((prev) => prev.filter((item) => item?.id !== id))
    } else {
      const newSelected = list?.find(item => item.id === id)
      setSelected((prev) => (newSelected ? [...prev, newSelected] : prev))
    }
  }

  return (
    <div className= "w-full display: flex flex-row justify-end items-center bg-app-gray h-[60px]" >
    {
      list.map((item) => (
        <CategoryItem key= { item.id } item = { item } select = { select } selected = {!!selected.find(selectedItem => item.id === selectedItem.id)} />
      ))
} </div>
  )
}