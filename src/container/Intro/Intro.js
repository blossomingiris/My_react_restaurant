import { useState, useRef } from 'react'
import { BsPlay, BsPause } from 'react-icons/bs'
import { meal } from '../../constants'
import styles from './Intro.module.css'

function Intro() {
  const vidRef = useRef(false)
  const [playVideo, setPlayVideo] = useState(false)

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className={styles.app_video}>
      <video
        src={meal}
        type='video/mp4'
        loop
        muted
        controls={false}
        ref={vidRef}
      ></video>
      <div onClick={handleVideo} className={styles.video_container}>
        {playVideo ? (
          <div className={`${styles.app_video_no_overlay} flex_center`}>
            <div className={`${styles.app_video_overlay_circle} flex_center`}>
              <BsPause className={styles.icons} />
            </div>
          </div>
        ) : (
          <div className={`${styles.app_video_overlay} flex_center`}>
            <div className={`${styles.app_video_overlay_circle} flex_center`}>
              <BsPlay className={styles.icons} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Intro

{
  /* <div className={`${styles.app_video_overlay_circle} flex_center`}>
{' '}
{playVideo ? (
	<BsPause className={styles.icons} />
) : (
	<BsPlay className={styles.icons} />
)}
</div> */
}
