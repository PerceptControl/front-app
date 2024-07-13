import Image from "@components/Image";
import searchIcon from "@icons/Vector.svg"

import './search.css'

export default function SearchBar() {
  return (
    <div className="search bordered">
      <Image icon={searchIcon}/>
      <input className="flex-2" placeholder="поиск по названию" type="text" />
    </div>
  )
}