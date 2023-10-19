import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';

import { ParallaxContainer } from './hero.style';

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const s3Url =
    'https://d1ks0pavw8unez.cloudfront.net/public/videos/home-banner.mp4';
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = s3Url;
      videoRef.current.loop = true;
    }
  }, [s3Url]);
  if (window.innerWidth < 991) {
    return null;
  }
  return (
    <ParallaxContainer>
      <video ref={videoRef} autoPlay muted />
    </ParallaxContainer>
  );
};

export default dynamic(() => Promise.resolve(HeroVideo), {
  ssr: false,
});
