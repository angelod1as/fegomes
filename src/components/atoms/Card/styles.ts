import styled from 'styled-components'

export const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${p => p.image});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  h3 {
    margin: 25px 0 15px 0;
  }

  p {
    margin-bottom: 30px;
  }
`
