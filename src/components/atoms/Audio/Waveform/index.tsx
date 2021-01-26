import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { Lower, Upper, Wave, Wrapper } from './styles'

interface WaveFormProps {
  played: number
  clientWidth: number
}

export default function Waveform({ played = 0, clientWidth }: WaveFormProps) {
  const [bars, setBars] = useState([])
  const divisible = 15
  const barNumber = Math.round(clientWidth / divisible)
  const height = 100

  useEffect(() => {
    const makeBars = Array.from({ length: barNumber }, () => {
      const number = Math.random()
      let final = Math.round((height * number) / 10) * 10
      if (final < 20) {
        final += 20
      }
      return final
    })
    setBars(makeBars)
  }, [barNumber])

  return (
    <Wrapper height={height}>
      <Lower>
        {bars.map(itemHeight => {
          return <Wave style={{ height: itemHeight }} key={nanoid()} />
        })}
      </Lower>
      <Upper clip={played * 100}>
        {bars.map(itemHeight => {
          return <Wave style={{ height: itemHeight }} key={nanoid()} />
        })}
      </Upper>
    </Wrapper>
  )
}
