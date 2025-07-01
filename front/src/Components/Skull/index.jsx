import React, { useState } from 'react';
import { Jaw } from '../Jaw';
import { Box } from '@mui/material';
import { TeethBar } from '../TeethBar';
import { TOOTH_DATA } from './constant';

export const Skull = ({isSvg = false}) => {
  const [data, setData] = useState(TOOTH_DATA);

  const handleUpdateData = (newValue) => {
    setData((prev) => prev.map((elem) => elem.position === newValue.position ? newValue : elem));
  }

  return (
    <Box>
      <TeethBar type="top" data={data.filter(({position}) => position.includes('T'))} onUpdate={handleUpdateData} isSvg={isSvg} />
      <Jaw type="top" data={data.filter(({position}) => position.includes('T'))} onUpdate={handleUpdateData} />
      <Jaw type="bottom" data={data.filter(({position}) => position.includes('B'))} onUpdate={handleUpdateData} />
      <TeethBar type="bottom" data={data.filter(({position}) => position.includes('B'))} onUpdate={handleUpdateData} isSvg={isSvg} />
    </Box>
  )
}