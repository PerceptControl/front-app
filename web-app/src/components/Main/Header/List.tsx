import { PropsWithChildren } from "react";

export type ListProps = {
  size?: number,
}
export function HeaderList({children, size=2}: PropsWithChildren & ListProps) {
    return (
        <div className={`place-content-center col-span-${size}`}>
          <ul className="display: flex flex-row flex-nowrap  justify-evenly">
            {children}
          </ul>
        </div>
    );
}

export type ItemProps = {
  additionalClasses?: string,
}

export function ListItem({children, additionalClasses}: PropsWithChildren & ItemProps) {
  return (
    <>
      <li className={`flex items-center justify-evenly ${additionalClasses}`}>{children}</li>
    </>
  )
}