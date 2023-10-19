import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
  }
}
interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
    script.onload = initializePlayer;
    return () => {
      document.body.removeChild(script);
    };
  });

  const initializePlayer = () => {
    (window as any).YT.ready(() => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '460',
        width: '840',
        videoId: videoId,
      });
    });
  };

  return <div id='youtube-player' />;
};

export default YouTubePlayer;
