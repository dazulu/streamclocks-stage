import { useRouter } from 'next/router'
import Head from 'next/head'

import Timer, { TimerProps } from '../components/timer'

const Countdown = () => {
  const router = useRouter()
  const { color, font, weight, duration, shadow }: TimerProps = router.query

  return (
    <div className="container">
      <Head>
        {font && weight && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=0:123456789&display=swap`}
            rel="stylesheet"
          />
        )}
      </Head>
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
          text-align: left;
        }
      `}</style>
    </div>
  )
}

export default Countdown
