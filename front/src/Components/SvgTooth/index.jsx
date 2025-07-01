import React, { useEffect, useState } from "react";

import crown_1 from './assets/top/crown_1-1.svg';
import root_1 from './assets/top/root_1-1.svg';

import crown_2 from './assets/top/crown_1-2.svg';
import root_2 from './assets/top/root_1-2.svg';

import crown_3 from './assets/top/crown_1-3.svg';
import root_3 from './assets/top/root_1-3.svg';

import crown_4 from './assets/top/crown_1-4.svg';
import root_4 from './assets/top/root_1-4.svg';

import crown_5 from './assets/top/crown_1-5.svg';
import root_5 from './assets/top/root_1-5.svg';

import crown_6 from './assets/top/crown_1-6.svg';
import root_6 from './assets/top/root_1-6.svg';

import crown_7 from './assets/top/crown_1-7.svg';
import root_7 from './assets/top/root_1-7.svg';

import crown_8 from './assets/top/crown_1-8.svg';
import root_8 from './assets/top/root_1-8.svg';

import crown_11 from './assets/bottom/crown_1.svg';
import root_11 from './assets/bottom/root_1.svg';

import crown_21 from './assets/bottom/crown_2.svg';
import root_21 from './assets/bottom/root_2.svg';

import crown_31 from './assets/bottom/crown_3.svg';
import root_31 from './assets/bottom/root_3.svg';

import crown_41 from './assets/bottom/crown_4.svg';
import root_41 from './assets/bottom/root_4.svg';

import crown_51 from './assets/bottom/crown_5.svg';
import root_51 from './assets/bottom/root_5.svg';

import crown_61 from './assets/bottom/crown_6.svg';
import root_61 from './assets/bottom/root_6.svg';

import crown_71 from './assets/bottom/crown_7.svg';
import root_71 from './assets/bottom/root_7.svg';

import crown_81 from './assets/bottom/crown_8.svg';
import root_81 from './assets/bottom/root_8.svg';

import { Box } from "@mui/material";
import { Popover } from "../Popover";

export const SvgTooth = ({ type = 'top', position, rotate = false, data, onUpdate }) => {
  const [crownPath, setCrownPath] = useState(crown_1);
  const [rootPath, setRootPath] = useState(root_1);
  const [left, setLeft] = useState('0');
  const [top, setTop] = useState('5px');
  const [transform, setTransform] = useState(1);
  const [selectedTooth, setSelectedTooth] = useState('');
  const [selectedRoot, setSelectedRoot] = useState('');

  useEffect(() => {
    if (type === 'bottom') {
      switch (position) {
        case 1: {
          setCrownPath(crown_11);
          setRootPath(root_11);
          setTransform(2);
          break;
        }
        case 2: {
          setCrownPath(crown_21);
          setRootPath(root_21);
          setTransform(2);
          break;
        }
        case 3: {
          setCrownPath(crown_31);
          setRootPath(root_31);
          setTransform(2);
          break;
        }
        case 4: {
          setCrownPath(crown_41);
          setRootPath(root_41);
          setTransform(2);
          break;
        }
        case 5: {
          setCrownPath(crown_51);
          setRootPath(root_51);
          setTransform(2);
          break;
        }
        case 6: {
          setCrownPath(crown_61);
          setRootPath(root_61);
          setTop('10px');
          setTransform(1.2);
          break;
        }
        case 7: {
          setCrownPath(crown_71);
          setRootPath(root_71);
          setTop('10px');
          setTransform(1.2);
          break;
        }
        case 8: {
          setCrownPath(crown_81);
          setRootPath(root_81);
          setTop('10px');
          setTransform(1.2);
          break;
        }
        default: {
          setCrownPath(crown_11);
          setRootPath(root_11);
          break;
        }
      }
    }

    if (type === 'top') {
      switch (position) {
        case 1: {
          setCrownPath(crown_1);
          setRootPath(root_1);
          setTransform(2);
          break;
        }
        case 2: {
          setCrownPath(crown_2);
          setRootPath(root_2);
          setLeft('-6.5px');
          setTransform(2);
          break;
        }
        case 3: {
          setCrownPath(crown_3);
          setRootPath(root_3);
          setLeft('-5px');
          setTransform(2);
          break;
        }
        case 4: {
          setCrownPath(crown_4);
          setRootPath(root_4);
          setLeft('-8px');
          setTransform(2);
          break;
        }
        case 5: {
          setCrownPath(crown_5);
          setRootPath(root_5);
          setTransform(2);
          break;
        }
        case 6: {
          setCrownPath(crown_6);
          setRootPath(root_6);
          setLeft('-5px');
          setTop('10px');
          break;
        }
        case 7: {
          setCrownPath(crown_7);
          setRootPath(root_7);
          setLeft('-5px');
          setTop('10px');
          break;
        }
        case 8: {
          setCrownPath(crown_8);
          setRootPath(root_8);
          setLeft('-5px');
          setTop('10px');
          setTransform(1.5);
          break;
        }
        default: {
          setCrownPath(crown_1);
          setRootPath(root_1);
          break;
        }
      }
    }
  }, [type, position, data]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, target, type = 'tooth') => {
    setAnchorEl(event.currentTarget);
    if (type === 'root') {
      setSelectedRoot(target);
    } else {
      setSelectedTooth(target);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTooth('');
    setSelectedRoot('');
  };

  const handleSave = (key, value) => {
    onUpdate({ 
      ...data, 
      [key]: value, 
      toothStatus: value?.extract ? 'removed' : data.toothStatus === 'removed' ? 'normal' : value?.selectedType === 'Crown' ? 'Crown' : value.selectedType
    });
    handleClose();
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%'}}>
      {type === 'top' && (
        <>
          <span>{position}</span>
          {data.toothStatus === 'removed' ? <div style={{width: '50px', height: '38.82px'}} /> : <img src={rootPath} alt={data.rootStatus} width="50px" style={{position: 'relative', top, left: !rotate ? left : left.replace('-', ''), transform: !rotate ? `scaleX(-${transform})` : `scaleX(${transform})`, cursor: 'pointer', filter: !!selectedRoot ? 'hue-rotate(50deg) saturate(6)' : 'none', height: '38.82px'}} onClick={(e) => handleClick(e, `U${!rotate ? 'R' : 'L'}${9 - position} Root`, 'root')} />}
          <img src={crownPath} alt={data.toothStatus} width="50px" height="40px" style={{transform: !rotate ? "scaleX(-1)" : '', cursor: 'pointer', filter: !!selectedTooth ? 'hue-rotate(260deg) saturate(6)' : data.toothStatus === 'removed' ? 'hue-rotate(160deg) saturate(12)' : 'none' }} onClick={(e) => handleClick(e, `Tooth U${!rotate ? 'R' : 'L'}${9 - position}`, 'tooth')} />
          <Popover selectedTooth={selectedRoot} anchorEl={!!selectedRoot ? anchorEl : null} onClose={handleClose} type="root" onSave={handleSave} />
          <Popover selectedTooth={selectedTooth} anchorEl={!!selectedTooth ? anchorEl : null} onClose={handleClose} onSave={handleSave} />
        </>
      )}
      {type === 'bottom' && (
        <>
          <img src={crownPath} alt={data.toothStatus} width="50px" height="40px" style={{transform: rotate ? "scaleX(-1)" : '', cursor: 'pointer', filter: !!selectedTooth ? 'hue-rotate(260deg) saturate(6)' : data.toothStatus === 'removed' ? 'hue-rotate(160deg) saturate(12)' : 'none'}} onClick={(e) => handleClick(e, `Tooth B${rotate ? 'L' : 'R'}${9 - position}`, 'tooth')} />
          {data.toothStatus === 'removed' ? <div style={{width: '50px', height: '38.82px'}} /> : <img src={rootPath} alt={data.rootStatus} width="50px" style={{position: 'relative', top: `-${top}`, left: !rotate ? left : left.replace('-', ''), transform: rotate ? `scaleX(-${transform})` : `scaleX(${transform})`, cursor: 'pointer', filter: !!selectedRoot? 'hue-rotate(50deg) saturate(6)' : 'none', height: '38.82px'}} onClick={(e) => handleClick(e, `B${rotate ? 'L' : 'R'}${9 - position} Root`, 'root')} />}
          <Popover selectedTooth={selectedTooth} anchorEl={!!selectedTooth ? anchorEl : null} onClose={handleClose} onSave={handleSave} />
          <Popover selectedTooth={selectedRoot} anchorEl={!!selectedRoot ? anchorEl : null} onClose={handleClose} type="root" onSave={handleSave} />
          <span>{position}</span>
        </>
      )}
    </Box>
  )
}
