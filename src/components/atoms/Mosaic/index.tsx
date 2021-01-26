import { ReactNode, useCallback, useState } from 'react'
import { StyledMosaic, SeeMore, Wrapper } from './styles'
import { Collapse } from 'react-collapse'

interface MosaicProps {
  children: ReactNode
  limit: boolean
}

// {/* <Collapse isOpened={isOpened}>
//   <StyledMosaic height={height}>{children}</StyledMosaic>
// </Collapse>
// {limit ? (
//   <SeeMore onClick={handleClick}>
//     {isOpened ? 'Veja menos' : 'Veja mais'}
//   </SeeMore>
// ) : (
//   ''
// )} */}

// {/* <Collapse isOpened={isOpened}>
//   <StyledMosaic height={height}>{children}</StyledMosaic>
// </Collapse>

// <SeeMore onClick={handleClick}>
//   {isOpened ? 'Veja menos' : 'Veja mais'}
// </SeeMore> */}

export default function Mosaic({ children }) {
  const [isOpened, setIsOpened] = useState(false)
  const [height, setHeight] = useState<number | string>(500)

  const handleClick = useCallback(() => {
    setHeight('auto')
    setIsOpened(!isOpened)
  }, [isOpened])

  return (
    <div>
      <button onClick={handleClick}>
        {isOpened ? 'Veja menos' : 'Veja mais'}
      </button>
      <Collapse isOpened={isOpened}>
        <div style={{ height: height }}>{children}</div>
      </Collapse>
    </div>
  )
}
