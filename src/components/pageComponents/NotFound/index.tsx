import Section from '@components/atoms/Section'

export default function NotFound() {
  return (
    <Section>
      <div
        style={{
          minHeight: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1>Página não encontrada</h1>
        <p>Você tem certeza que seu link está correto?</p>
      </div>
    </Section>
  )
}
