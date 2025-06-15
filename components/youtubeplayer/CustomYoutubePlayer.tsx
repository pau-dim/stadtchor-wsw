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
    <div className="w-full relative" style={{ paddingTop: '56.25%' }}>
      <div className="absolute top-0 left-0 w-full h-full">
        <YouTube
          videoId={videoId}
          onError={onError}
          className="w-full h-full rounded-lg shadow-lg transition duration-500 group-hover:scale-105"
          iframeClassName="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default CustomYouTubePlayer;