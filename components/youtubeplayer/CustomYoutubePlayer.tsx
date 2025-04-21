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
      className="rounded-lg shadow-lg transition duration-500 group-hover:scale-105"
    />
  );
};

export default CustomYouTubePlayer;