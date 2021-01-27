import { ReactNode, useCallback, useState } from 'react'
import { StyledMosaic, SeeMore, Wrapper } from './styles'
import { Collapse } from 'react-collapse'

interface MosaicProps {
  children: ReactNode
  limit?: boolean
}

export default function Mosaic({ limit, children }: MosaicProps) {
  const [height, setHeight] = useState<number | string>(500)

  const handleClick = useCallback(() => {
    setHeight(height === 500 ? 'auto' : 500)
  }, [height])

  return (
    <Wrapper>
      <Collapse isOpened={true}>
        <div
          style={{
            height: limit ? height : 'auto',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <StyledMosaic>{children}</StyledMosaic>
        </div>
      </Collapse>
      {limit ? (
        <SeeMore onClick={handleClick}>
          {height === 500 ? 'Veja mais' : 'Veja menos'}
        </SeeMore>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
