import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router';

export const AppHeader = () => {
  const location = useLocation();

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '64px',
        width: 'calc(100% - 80px)',
        marginLeft: '80px',
        background: 'rgba(249, 249, 249, 0.7)',
        boxShadow: '0px 0px 5px grey'
      }}>
      {location.pathname.split('/')[1].toUpperCase()}
    </Box>
  );
}