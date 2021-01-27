import { ContainerWrapper } from './styles'
import TopBar from '@components/atoms/TopBar'
import Footer from '@components/atoms/Footer'
import Contact from '@components/atoms/Contact'
import Hero from '@components/atoms/Hero'
import { ReactNode } from 'react'
import Separator from '@components/atoms/Separator'
import { PageProps } from '@interfaces/query'

interface ContainerProps {
  children?: ReactNode
  footerProps: PageProps
}

export default function Container({ children, footerProps }: ContainerProps) {
  if (footerProps) {
    return (
      <ContainerWrapper>
        <TopBar />
        <Separator h={50}></Separator>

        {children}

        <Hero
          title={footerProps.title}
          backgroundImage={footerProps.footerImage[0].url}
          style={{ marginBottom: 0 }}
        >
          <Contact footerProps={footerProps} />
        </Hero>

        <Footer
          title={footerProps.footerSubTitle}
          lead={footerProps.footerSubDescription}
          social={Object.keys(footerProps.footerSocial)
            .filter(each => footerProps.footerSocial[each] !== '')
            .map(each => {
              return {
                social: each,
                url: footerProps.footerSocial[each],
                icon: each,
              }
            })}
        />
      </ContainerWrapper>
    )
  } else {
    return <div></div>
  }
}
