'use client'



import ReactPlayer from "react-player";
import {useEffect, useState} from "react";

const Player = ({url}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
      <>
        {
          hasWindow && (
              <ReactPlayer
                  width="100%"
                  height="100%"
                  controls={true}
                  url={url}
              />
          )
        }
      </>
  );
};

export default Player;