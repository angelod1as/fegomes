import { Wrapper, Play, WaveHolder } from './styles'
import ReactPlayer from 'react-player/file'
import { useCallback, useEffect, useRef, useState } from 'react'
import Waveform from './Waveform'
import { FaPlay } from 'react-icons/fa'

interface AudioProps {
  url: string
}

export default function Audio({ url }: AudioProps) {
  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const [ready, setReady] = useState(false)
  const [duration, setDuration] = useState(0)
  const [clientWidth, setClientWidth] = useState(0)

  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef && audioRef.current) {
      setClientWidth(audioRef.current.wrapper.clientWidth)
    }
  }, [audioRef])

  const handlePlayPause = useCallback(() => {
    setPlaying(!playing)
  }, [playing])

  const handleProgress = useCallback(state => {
    setPlayed(state.played)
  }, [])

  const handleEnded = useCallback(() => {
    setPlaying(false)
  }, [])

  const handleReady = useCallback(({ getDuration }) => {
    setDuration(getDuration())
    setReady(true)
  }, [])

  return (
    <Wrapper>
      {ready && (
        <WaveHolder onClick={handlePlayPause}>
          <Waveform played={played} clientWidth={clientWidth}></Waveform>
          {!playing && (
            <Play>
              <FaPlay size={30} />
            </Play>
          )}
        </WaveHolder>
      )}
      <ReactPlayer
        ref={audioRef}
        width="100%"
        height="100%"
        url={url}
        playing={playing}
        controls={false}
        onReady={handleReady}
        onProgress={handleProgress}
        onEnded={handleEnded}
        progressInterval={100}
      />
    </Wrapper>
  )
}
