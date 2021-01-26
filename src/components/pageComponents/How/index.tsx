import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import { Columns, Column, Card } from './styles'
import Audio from '@components/atoms/Audio'

export default function How() {
  return (
    <>
      <Hero
        title="Do bruto ao beautiful"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        main
      />
      <Section title="Etapas">
        <Columns>
          <Column>
            <h3>Tratamento</h3>
            <Card>
              <h3>Projeto 1</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
            <Card>
              <h3>Projeto 2</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
          </Column>

          <Column>
            <h3>Edição</h3>
            <Card>
              <h3>Projeto 1</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
            <Card>
              <h3>Projeto 2</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
          </Column>

          <Column>
            <h3>Sonorização</h3>
            <Card>
              <h3>Projeto 1</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
            <Card>
              <h3>Projeto 2</h3>
              <Audio url="https://res.cloudinary.com/angelodias/video/upload/v1611618395/audio_jcwace.mp3" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis praesentium placeat cum beatae quos, quidem quasi,
              </p>
            </Card>
          </Column>
        </Columns>
      </Section>
    </>
  )
}
