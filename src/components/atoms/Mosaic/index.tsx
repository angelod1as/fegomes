import { ReactNode, useState } from 'react'
import { StyledMosaic, SeeMore } from './styles'

interface MosaicProps {
  children: ReactNode
  limit?: boolean
}

export default function Mosaic({ children, limit }: MosaicProps) {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div>
      <StyledMosaic limit={limit} isOpened={isOpened}>
        {children}
        {limit ? (
          <SeeMore onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? 'Veja menos' : 'Veja mais'}
          </SeeMore>
        ) : (
          ''
        )}
      </StyledMosaic>
    </div>
  )
}
