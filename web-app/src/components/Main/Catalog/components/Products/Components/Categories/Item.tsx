import Button from "@components/Button"
export type Item = { name: string, id: string }


type CategoryItemProps = {
  item: Item
  selected: boolean,
  select: (text: string) => void
}

export function CategoryItem({ item, selected, select }: CategoryItemProps) {
  let classes = 'category'
  if (!selected) classes += " unselected"

  return (

    <Button text= { item.name } className = { classes } clicked = { select } id = { item.id } />
  )
}