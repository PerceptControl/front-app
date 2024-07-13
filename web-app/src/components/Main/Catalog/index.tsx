import Filters from "./components/Filters";
import Products from "./components/Products";

export default function Catalog() {
  return (
    <div className="flex flex-col h-10 mt-24 mx-24">
      <p className="text-5xl font-semibold text-app-blue uppercase">каталог</p>
      <div className="grid grid-cols-4 gap-12 w-full h-full mt-10 justify-between">
        <Filters />
        <Products />
      </div>
    </div>
  ) 
}