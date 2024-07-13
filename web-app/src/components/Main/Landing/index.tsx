import bg1 from  "@images/bg.png";
import market from  "@icons/marketWhite.svg";

import Image from "@components/Image";
import Notify from "@components/Notify";
import Button from "@components/Button";

export type HeaderProps = {}

export default function Landing({}: HeaderProps) {
    return (
      <div className="display: flex flex-row w-full h-fit justify-between">
        <Image icon={bg1} className="bg-cover w-[600px] h-[705px]"></Image>
        <div className="display: flex flex-col gap-20">
          <div className="
                display: flex 
                w-[700px] 
                h-[280px] 
                bg 
                justify-end
                z-0">
            <div className={`
              display: flex 
              justify-center
              
              mr-20
              mt-8
              
              size-20`}>
                <Notify count={1} size="medium">
                  <div className="display: flex justify-center items-center size-20 bg-app-blue rounded-full">
                    <Image icon={market} className='size-10 self-center'/>
                  </div>
                </Notify>
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-5xl uppercase">продажа дублерина</p>
            <p className="mt-5 text-2xl font-normal">оптом и в розницу c доставкой</p>
            <Button text="выбрать дублерин" className="text-base mt-12 small" textClass="uppercase text-base font-normal"/>
          </div>
        </div>
      </div>
    );
}
