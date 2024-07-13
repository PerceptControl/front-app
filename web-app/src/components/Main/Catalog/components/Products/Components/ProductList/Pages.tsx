type Props = {
  active: number
  pages: number[]
  handle: (page: number) => void
}
export default function Pages({active,pages, handle}: Props) {
  const formPageList = () => {
    const renderPage = (page: number) => active === page ? 
          <ActivePage key={page} page={page} handle={handle} /> 
          : 
          <IdlePage key={page} page={page} handle={handle} />

    if(pages.length <= 6) return pages.map((page) => renderPage(page))
    
    
      if(active <= 3) return [
      renderPage(1), 
      renderPage(2), 
      renderPage(3), 
      renderPage(4), 
      <span>...</span>, 
      renderPage(pages.length)
    ]
    
    if(active <=  pages.length - 3) return [
      renderPage(1), 
      <span>...</span>,
      renderPage(active-1), 
      renderPage(active), 
      renderPage(active+1) ,
      <span>...</span>,
      renderPage(pages.length)
    ]

    else return [
      renderPage(1),
      <span>...</span>,
      renderPage(pages.length - 3),
      renderPage(pages.length - 2),
      renderPage(pages.length - 1),
      renderPage(pages.length),
    ]

  } 

  return (
    <div className="flex flex-row justify-center align-middle self-end gap-4">
      {
        ...formPageList()
      }
    </div>
  );
}

type PageProps = {
  page: number,
  handle: (page: number) => void
}
function IdlePage({page, handle}: PageProps) {
  return <span className='w-12 h-6 bordered text-center opacity-80 text-gray-700' onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()

    handle(page)
  }}>{page}</span>
}

function ActivePage({page, handle}: PageProps) {
  return <span className='w-12 h-6 bordered bg-app-blue text-white text-center' onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()

    handle(page)
  }}>{page}</span>
}