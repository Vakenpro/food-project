import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { Tooth } from '../Tooth';

export const TeethBar = ({type = 'top', data, onUpdate}) => {
  const leftPart = useMemo(() => {
    return data.filter(({position}) => position.includes('L'));
  }, [data]);

  const rightPart = useMemo(() => {
    return data.filter(({position}) => position.includes('R'));
  }, [data]);

  return (
    <Box sx={{width: '100%', display: 'flex'}}>
      <Box sx={{display: 'flex', gap: '15px', width: '50%', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '7.5px', boxSizing: 'border-box'}}>
        {rightPart.map((elem, idx) => (
          <Tooth type={type} position={8 - idx} rotate={type !== "bottom"} key={elem.position} data={elem} onUpdate={onUpdate} />
        ))}
      </Box>
      <Box sx={{display: 'flex', gap: '15px', width: '50%', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '7.5px', boxSizing: 'border-box'}}>
        {leftPart.map((elem, idx) => (
          <Tooth type={type} position={idx + 1} rotate={type === "bottom"} key={elem.position} data={elem} onUpdate={onUpdate} />
        ))}
      </Box>
    </Box>
  )
}