import React, { useState } from 'react';
import { Popover } from '../../Popover';

export const PiramidSide = ({ points, data, side, onUpdate }) => {
  const [hovered, setHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = (key, value) => {
    onUpdate({...data, piramid: {...data.piramid, [side]: value}, toothStatus: value?.extract ? 'removed' : data.toothStatus === 'removed' ? 'normal' : data.toothStatus});
    handleClose();
  };

  const getWearAffect = () => {
    switch (side) {
      case 'top': {
        return <polygon points="12.5,0 12.5,5 37.5,5 37.5,0" fill="red" stroke="black" strokeWidth="1" />
      }
      case 'middle-right': {
        return <polygon points="0,12.5 5,12.5 5,37.5 0,37.5" fill="red" stroke="black" strokeWidth="1" />
      }
      case 'middle-left': {
        return <polygon points="50,12.5 45,12.5 45,37.5 50,37.5" fill="red" stroke="black" strokeWidth="1" />
      }
      case 'bottom': {
        return <polygon points="12.5,50 12.5,45 37.5,45 37.5,50" fill="red" stroke="black" strokeWidth="1" />
      }
    }
  }

  return (
    <>
      <polygon
        points={points}
        fill={!!anchorEl ? 'green' : hovered ? "grey" : data.toothStatus === 'removed' ? 'darkRed' : data.toothStatus === 'Crown' ? 'red' : 'white'}
        stroke="black"
        strokeWidth="2"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {data.piramid[side]?.selectedCondition === 'Wear' && getWearAffect()}
      <Popover selectedTooth={`Tooth ${data.position} ${side[0].toUpperCase()}`} anchorEl={anchorEl} onClose={handleClose} type="piramid" onSave={handleSave} />
    </>
  )
}