import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Box, IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff, Fullscreen, FullscreenExit } from '@mui/icons-material';
import screenfull from 'screenfull';

const VideoPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => setPlaying(!playing);

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (event, newValue) => {
    if (playerRef.current) {
      playerRef.current.seekTo(newValue / 100, 'fraction');
    }
  };

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  const handleFullscreenToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerRef.current.wrapper);
      setFullscreen(!fullscreen);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        muted={muted}
        width="100%"
        height="100%"
        controls={false}
        onProgress={handleProgress}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <IconButton onClick={handlePlayPause} sx={{ color: 'white' }}>
            {playing ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton onClick={handleMuteToggle} sx={{ color: 'white' }}>
            {muted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
          <IconButton onClick={handleFullscreenToggle} sx={{ color: 'white' }}>
            {fullscreen ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </Box>
        <Slider
          value={played * 100}
          onChange={handleSeekChange}
          aria-labelledby="progress-slider"
          sx={{ width: '80%', color: 'white' }}
        />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
