import { Wrapper } from './styles'
import TopBar from '@components/atoms/TopBar'
import Footer from '@components/atoms/Footer'
import Contact from '@components/atoms/Contact'
import Hero from '@components/atoms/Hero'
import { ReactNode } from 'react'
import Separator from '@components/atoms/Separator'

interface ContainerProps {
  children?: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <Wrapper>
      <TopBar />
      <Separator h={50}></Separator>

      {children}

      <Hero
        title="Vamos trabalhar juntos?"
        backgroundImage="https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        main
      >
        <Contact />
      </Hero>

      <Footer
        title="FeGomes Podcast"
        lead="lorem ipsum dolor sit amet"
        social={[
          {
            social: 'facebook',
            url: 'url',
            icon: 'facebook',
          },
          {
            social: 'instagram',
            url: 'url',
            icon: 'instagram',
          },
        ]}
      />
    </Wrapper>
  )
}
