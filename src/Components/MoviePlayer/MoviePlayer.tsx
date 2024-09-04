import YouTube, { YouTubeProps } from "react-youtube";

type MoviePlayer = {
  videoID: string | undefined;
};

const MoviePlayer = ({ videoID }: MoviePlayer) => {
  const opts: YouTubeProps["opts"] = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <YouTube videoId={videoID} opts={opts} />
     
    </div>
  );
};

export default MoviePlayer;
