import React from 'react'
import './VideoSection.css'

const VideoSection = () => {
  return (
    <div>
      <div className="videoSec">
        <video src="/public/Videos/videoSec.mp4" autoPlay loop muted playsInline width={'100%'} onPlaying={'this.controls=false'} ></video>
      </div>
    </div>
  )
}

export default VideoSection
