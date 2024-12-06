import React from 'react'
import './index.css'

const VideoSection = () => {
  return (
    <div>
  <div className="videoSec">
    <video 
      src="/Videos/videoSec.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      width="100%" 
      onPlaying={() => {
        // This is where you could place code if needed when the video is playing.
        // If you want to keep controls hidden, just omit the controls attribute.
      }}
    />
  </div>
</div>

  )
}

export default VideoSection
