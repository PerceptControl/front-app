import Header from "@components/Main/Header"
import Landing from "@components/Main/Landing"
import Catalog from "@components/Main/Catalog"
import { PriceLink } from "@components/Main/OptPriceLink"

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Landing />
      <Catalog />
    </div>
  )
}