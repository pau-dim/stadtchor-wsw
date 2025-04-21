"use client"
import YouTube, { YouTubeProps } from 'react-youtube';

type YouTubePlayerProps = {
  videoId: string;
};

const CustomYouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  // Set up event handlers with proper types


  const onError: YouTubeProps['onError'] = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      videoId={videoId}
      onError={onError}
    />
  );
};

export default CustomYouTubePlayer;