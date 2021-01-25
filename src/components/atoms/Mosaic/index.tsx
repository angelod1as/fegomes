import { ReactNode, useState } from 'react'
import { StyledMosaic, SeeMore, Wrapper } from './styles'
import { Collapse } from 'react-collapse'

interface MosaicProps {
  children: ReactNode
  limit: boolean
}

export default function Mosaic({ children, limit }: MosaicProps) {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <Wrapper>
      <Collapse isOpened={limit ? isOpened : true}>
        <StyledMosaic>{children}</StyledMosaic>
      </Collapse>
      {limit ? (
        <SeeMore onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? 'Veja menos' : 'Veja mais'}
        </SeeMore>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
