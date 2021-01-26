import { Wrapper } from '@components/atoms/Audio/styles'
import styled from 'styled-components'

export const Columns = styled.div`
  * > :first-child {
    margin-top: 0px;
  }

  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  ${Wrapper} {
    margin: 20px 0px;
  }

  @media ${p => p.theme.size.medium} {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 3fr);
  }
`

export const Column = styled.div`
  /* border: 1px solid ${p => p.theme.color.gray}; */
  padding: 15px 20px 0 20px;
  /* border-radius: ${p => p.theme.numbers.radius}; */
  margin-bottom: 30px;
`

export const Card = styled.div`
  border: 1px solid ${p => p.theme.color.gray};
  padding: 15px 20px;
  margin-bottom: 30px;
  border-radius: ${p => p.theme.numbers.radius};
`
