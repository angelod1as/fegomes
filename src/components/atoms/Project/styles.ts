import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  & > div {
    margin-bottom: 100px;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    @media ${p => p.theme.size.small} {
      display: grid;

      grid-gap: 20px;
      grid-template-columns: 320px minmax(320px, 1fr);
    }

    @media ${p => p.theme.size.large} {
      grid-template-columns: 500px minmax(500px, 1fr);
    }
  }
`

export const Image = styled.div<{ image: string }>`
  background-image: url(${p => p.image});
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media ${p => p.theme.size.mini} {
    width: 320px;
    height: 320px;
    margin: 0 auto;
  }
  @media ${p => p.theme.size.small} {
    max-width: 320px;
    max-height: 320px;
    width: 320px;
    height: 320px;
  }
  @media ${p => p.theme.size.large} {
    max-width: 500px;
    max-height: 500px;
    width: 500px;
    height: 500px;
  }
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media ${p => p.theme.size.small} {
    flex: 1;
    align-items: flex-start;

    h1 {
      text-align: left;
      margin-top: 0;
    }
  }
`

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Tag = styled.div<{ current: boolean }>`
  background-color: ${p =>
    p.current ? p.theme.color.main : p.theme.color.gray};
  color: ${p => p.theme.color.black};
  padding: 0.5em;
  font-size: 0.9em;
  border-radius: ${p => p.theme.numbers.radius};
  margin-bottom: 20px;
  margin: 50px auto 0 auto;
  display: inline-block;
  font-weight: ${p => p.theme.font.weight.medium};

  @media ${p => p.theme.size.small} {
    margin: 0 0 20px 0;
  }
`
