interface CabecalhoProps {
  title: string
  description?: string // a ? é porque o description é opcional.
}

export function Cabecalho({ title, description = ' ' }: CabecalhoProps) {
  document.title = `Food commerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
