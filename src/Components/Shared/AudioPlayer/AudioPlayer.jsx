import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { PauseCircleOutline, PlayArrowOutlined } from '@mui/icons-material';

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio());

  const handlePlayPause = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <audio
     
        src="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        ref={(element) => {
          setAudio(element);
        }}
      />
      <Button onClick={handlePlayPause}>
        {playing ? <PauseCircleOutline /> : <PlayArrowOutlined />}
      </Button>
    </div>
  );
};

export default AudioPlayer
