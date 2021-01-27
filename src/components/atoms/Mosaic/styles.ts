import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  .ReactCollapse--collapse {
    transition: height 0.7s;
  }
`

export const StyledMosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  transition: max-height 0.3s;
  padding-bottom: 100px;
`

export const SeeMore = styled.div`
  color: ${p => p.theme.color.main};
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 50px 0 0px 0;
  background: ${p => p.theme.color.white};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${p => p.theme.color.black} 50%
  );
  font-weight: ${p => p.theme.font.weight.medium};
`
