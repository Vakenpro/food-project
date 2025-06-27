import React, { useMemo } from 'react';
import { Piramid } from '../Piramid';
import { Box } from '@mui/material';

export const Jaw = ({ type, data, onUpdate }) => {
  const leftPart = useMemo(() => {
    return data.filter(({position}) => position.includes('L'));
  }, [data]);

  const rightPart = useMemo(() => {
    return data.filter(({position}) => position.includes('R'));
  }, [data]);

  return (
    <Box sx={{width: '100%', display: 'flex', borderTop: '2px solid grey', transform: type !== 'bottom' ? 'scaleY(-1)' : '' }}>
      <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-end', width: '50%', borderRight: '2px solid grey', paddingRight: '7.5px', boxSizing: 'border-box'}}>
        {rightPart.map((data) => (
          <Piramid type={data.type} key={data.position} data={data} onUpdate={onUpdate} />
        ))}
      </Box>
      <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-start', width: '50%', paddingLeft: '7.5px', boxSizing: 'border-box'}}>
        {leftPart.map((data) => (
          <Piramid type={data.type} key={data.position} data={data} onUpdate={onUpdate} />
        ))}
      </Box>
    </Box>
  )
}