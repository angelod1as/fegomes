import { nanoid } from 'nanoid'

interface Social {
  social: string
  url: string
  icon: string
}

interface FooterProps {
  title: string
  lead: string
  social: Social[]
}

export default function Footer({ title, lead, social }: FooterProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{lead}</p>
      {social && (
        <div>
          {social.map((each: Social) => {
            return <p key={nanoid()}>{each.social}</p>
          })}
        </div>
      )}
      <div>
        <div>© 2020 FeGomes. Todos os direitos reservados</div>
        <div>
          <a
            href="https://www.angelodias.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por Angelo Dias
          </a>
        </div>
      </div>
    </div>
  )
}
