// src/App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Module Viewer
      </Typography>
      <VideoPlayer url="https://youtu.be/LXb3EKWsInQ?si=w0MqKCbTn-8tQdMF" />
    </Container>
  );
}

export default App;
