// src/components/ModuleCard.js
import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const ModuleCard = ({ module }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <VideoPlayer url={module.videoUrl} />
      <CardContent>
        <Typography variant="h5" component="div">
          {module.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {module.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
          {module.tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
