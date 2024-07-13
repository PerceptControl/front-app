import { PropsWithChildren } from "react";
import "./style.css"

export type NotifyProps = {
  count: number
  size: "small" | "medium" | "large"
} & PropsWithChildren

export default function Notify({children, count, size}: NotifyProps) {
  return (
    <div className="notified-item">
      {count ? <div className={`badge ${size}`}><span>{count}</span></div> : undefined}
      {children}
    </div>
  )
}