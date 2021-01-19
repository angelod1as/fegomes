import styled from 'styled-components'

export const StyledMosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
`
