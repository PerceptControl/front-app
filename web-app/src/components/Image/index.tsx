export type ImageProps = {
  icon: string
  className?: string
}

export default function Image({icon, className}: ImageProps) {
  return (
    <>
      <img src={icon} className={className}/>
    </>
  )
}

