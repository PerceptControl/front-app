export type ButtonProps = {
  text: string,
  id: string,
  className?: string,
  textClass?: string
  clicked?: (text: string) => void
}

import './style.css'

export default function Button({text, id, className, textClass, clicked}: ButtonProps) {
  return (
    <div className={className?.includes('btn') ? className : `${className} btn`} onClick={(e) => {
      e.stopPropagation()
      if(!clicked) return
      const element = e.target
      
      if(element instanceof HTMLSpanElement) clicked(element.getAttribute('elemid') || "")
      else if(element instanceof HTMLDivElement) {
        const span = element.childNodes[0]
        if(span instanceof HTMLSpanElement) clicked(span.getAttribute('elemid') || "")
      }
    }}>
      <span elemid={id} className={textClass}>{text}</span>     
    </div>
  )
}