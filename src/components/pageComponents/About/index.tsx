import Hero from '@components/atoms/Hero'
import Section from '@components/atoms/Section'
import { Content } from './styles'

export default function About() {
  return (
    <>
      <Hero
        title="Quem está por trás da tela"
        lead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, saepe architecto odit ducimusa"
        main
      />
      <Section bg="clear">
        <Content>
          <img
            src="https://pbs.twimg.com/profile_images/1220072412869537792/7md-iaev_400x400.jpg"
            alt=""
          />
          <div>
            <h2>Felipe Gomes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis, dolor obcaecati iure explicabo molestias porro doloribus
              animi fugiat sed consectetur aspernatur, ab corporis rem
              perferendis ipsum, illo voluptate asperiores.
            </p>
          </div>
        </Content>
      </Section>
    </>
  )
}
