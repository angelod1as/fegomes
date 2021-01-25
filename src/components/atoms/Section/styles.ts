import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 0;
  margin: 0 auto;
  max-width: ${p => p.theme.numbers.section};
  width: 100%;
`

export const Container = styled.div`
  max-width: ${p => p.theme.numbers.section};
  margin: 0 20px;
`

export const Title = styled.h2`
  /* max-width: ${p => p.theme.numbers.width}; */
  text-align: center;
`
