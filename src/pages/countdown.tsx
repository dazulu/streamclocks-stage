import { useRouter } from 'next/router'

import Timer, { TimerProps } from '../components/timer'

const Countdown = () => {
  const router = useRouter()
  const { color, font, weight, duration, shadow }: TimerProps = router.query

  return (
    <div className="container">
      <Timer
        color={color}
        font={font}
        weight={weight}
        duration={duration}
        shadow={shadow}
      />
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0);
          height: 100vh;
          width: 90vw;
          text-align: left;
        }
      `}</style>
    </div>
  )
}

export default Countdown
