"use client"
import YouTube, { YouTubeProps } from 'react-youtube';

type YouTubePlayerProps = {
  videoId: string;
};

const CustomYouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  // Set up event handlers with proper types
  const onReady: YouTubeProps['onReady'] = (event) => {
    const player = event.target;
    player.playVideo();
  };

  const onError: YouTubeProps['onError'] = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default CustomYouTubePlayer;