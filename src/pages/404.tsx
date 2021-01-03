import styled from 'styled-components'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Wrapper>
      <h1>
        <span>this page does not exist</span>
      </h1>
      <Link href="/">Click here to go back</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    max-width: 620px;
    text-align: center;
    span {
      font-style: italic;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.color.white};
`
