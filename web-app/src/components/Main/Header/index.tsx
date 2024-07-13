import phoneIcon from "@assets/icons/phone.svg";
import marketIcon from "@assets/icons/market.svg";
import { HeaderList, ListItem } from "./List";
import Notify from "@components/Notify";
import Image from "@components/Image";

export type HeaderProps = {}

export default function Header({}: HeaderProps) {
    return (
      <div className="display: grid grid-flow-col w-auto h-fit mx-2 my-8">
        <div className="justify-self-center col-span-1 self-center bold"><p className="text-3xl"><span className="text-blue-600">TECO</span>PACK</p></div>
        <HeaderList {...{size: 3}}>
            <li className="bold">каталог</li>
            <li className="text-nowrap bold">оптовые продажи</li>
            <li className="bold">контакты</li>
        </HeaderList>
        <HeaderList {...{size: 1}}>
            <ListItem additionalClasses="font-medium text-base">
              +7 905 785 44 55
            </ListItem>
            <ListItem>
              <Image icon={phoneIcon} className="size-5"/>
            </ListItem>
            <ListItem>
                <Notify count={1} size="small">
                  <Image icon={marketIcon}className="size-6"/>
                </Notify>
            </ListItem>
        </HeaderList>
      </div>
    );
}
