import React from 'react'

const VideoSection = () => {
  const videoSection = [
    { type: 'video', media: '/images/Home/Bracelets.mp4', description: "Elevate your Everyday" },
    { type: 'video', media: '/images/Home/Earrings.mp4', description: "Style Simplified" },
    { type: 'video', media: '/images/Home/Necklace.mp4', description: "Enhance Everyday" },
    { type: 'video', media: '/images/Home/Rings.mp4', description: "Where Style meets function" },
  ]

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {videoSection.map((item, index) => (
        <div
          key={index}
          className="w-full h-screen overflow-hidden relative snap-start"
        >
          <video
            src={item.media}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
          <span className="flex items-center justify-center"
            style={{ fontFamily: "Burgues Script, Edwardian Script ITC, cursive" }}
          >
            <p className="absolute bottom-6 xl:text-5xl text-md text-black text-center px-4 font-medium">
              {item.description}
            </p>
          </span>
        </div>
      ))}
    </div>
  )
}

export default VideoSection
