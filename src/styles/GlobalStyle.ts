import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'
import { ThemeProps } from './theme'

interface GlobalProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  /* reset and normalize */
  ${reset}
  ${normalize}

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline-offset: 3px;
      outline: ${p => p.theme.color.black} auto 1px;
    }
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 1em;
  }

  // clean UL and LI
  ul, li {
    margin: 0;

    li, p {
      margin: 5px 0;
    }
  }

  h1, h2, h3 {
    margin: 60px 0 30px 0;
    padding: 0;
    font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
    font-weight: 700;
  }

  h1 {
    font-size: 48px;
    line-height: 110%;
  }

  h2 {
    font-size: 30px;
    line-height: 120%;
  }

  h3 {
    font-size: 20px;
    line-height: 35px;
  }

  a {
    display: inline-block;
    color: ${p => p.theme.color.black};
    font-weight: 500;
    transition: all .2s;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      color: ${p => p.theme.color.black};
    }
  }
  &.bg {
    color: ${p => p.theme.color.white};
    &:hover {
      color: ${p => p.theme.color.gray};
    }
    &:visited {
      color: ${p => p.theme.color.white};
    }
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }

  b, strong {
    font-weight: 700;
  }

  i, em {
    font-style: italic;
  }

  hr {
    margin: 0;
  }

  /* blockquote */

  blockquote {
    padding-left: 15px;
    border-left: 5px solid ${p => p.theme.color.darkgray};
    font-style: italic;
  }

  /* image caption */

  figcaption {
    &:before {
      content: '\\203A';
      font-style: normal;
      font-weight: 700;
      padding-right: 15px;
    }
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  /* lists */

  ul, ol {
    li {
      padding-left: 25px;
      position: relative;
      line-height: 1.2em;
      &:before {
        font-weight: 700;
        top: -1px;
        left: 5px;
        position: absolute;
        color: ${p => p.theme.color.black};
      }
    }
  }

  ul {
    li {
      &:before {
        content: '\\203A';
      }
    }
  }

  ol {
    li {
      counter-increment: step-counter;
      &:before {
        content: counter(step-counter) '.';
      }
    }
  }
`

export default GlobalStyle
