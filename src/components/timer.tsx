import { FunctionComponent, useState, useEffect } from 'react'
import fitty from 'fitty'

import {
  buildgalleryTimeString,
  getSegmentedTime,
  getDatePlusDuration
} from '../lib/utils'

export interface TimerProps {
  duration?: string
  color?: string
  font?: string
  weight?: string
  shadow?: string
}

const Timer: FunctionComponent<TimerProps> = ({
  duration = '10',
  color = '222222',
  font = 'Signika',
  weight = '600',
  shadow = 'none'
}) => {
  let interval: number
  let timeout: number

  const [text, setText] = useState('')
  const [showText, setShowText] = useState(false)
  const parsedDuration = parseFloat(duration)
  const endDate = getDatePlusDuration(parsedDuration)

  // Taking endDate and duration, calculate the timer text
  const calcTimeString = () => {
    const { hours, minutes, seconds } = getSegmentedTime(endDate)
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      if (parsedDuration <= 60) {
        setText('00:00')
      } else {
        setText('00:00:00')
      }
      clearInterval(interval)
    } else {
      setText(buildgalleryTimeString(hours, minutes, seconds))
    }
  }

  useEffect(() => {
    const fittyTimer = fitty('.timer', {
      minSize: 10,
      maxSize: 2000
    })[0]

    fittyTimer.freeze()

    // @ts-ignore
    const myFittyElement = fittyTimer.element

    const init = () => {
      fittyTimer.unfreeze()
      fittyTimer.fit()

      calcTimeString()

      interval = window.setInterval(() => {
        calcTimeString()
      }, 1000)
    }

    myFittyElement.addEventListener('fit', function freezeText() {
      setShowText(true)
      fittyTimer.freeze()
      myFittyElement.removeEventListener('fit', freezeText, false)
    })

    timeout = window.setTimeout(init, 200)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      fittyTimer.unsubscribe()
    }
  }, [parsedDuration])

  return (
    <>
      <div className="timer">{text}</div>
      <style jsx>{`
        .timer {
          display: inline-block;
          white-space: nowrap;
          user-select: none;
          color: #${color};
          font-family: ${font};
          font-weight: ${weight};
          text-shadow: ${shadow};
          opacity: ${showText ? 1 : 0};
        }
      `}</style>
    </>
  )
}

export default Timer
