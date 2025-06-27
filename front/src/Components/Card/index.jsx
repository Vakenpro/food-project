import React from 'react';
import { Box, Pagination } from '@mui/material';
import ReactStars from 'react-stars';

export const IngredientsPage = () => {
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '16px', boxSizing: 'border-box'}}>
      <Box sx={{flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
        {Array(10).fill().map((_) => (
          <Box
            sx={{
              width: '320px',
              height: '350px',
              background: 'rgba(249, 249, 249, 0.7)',
              borderRadius: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, .7)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img src="https://placehold.co/320x286" />
            <Box
              sx={{
                width: '100%',
                height: '64px',
                background: 'rgba(0, 0, 0, 0.09)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                boxSizing: 'border-box'
              }}
            >
              <span>Name</span>
              <ReactStars count={5} size={24} color2="#ffd700" />
            </Box>
          </Box>
        ))}
      </Box>
      <Pagination count={25} variant="outlined" shape="rounded" />
    </Box>
  );
}
