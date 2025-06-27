import React, { useEffect, useState } from "react";

import crown1 from './assets/bottom/tooth1_crown.png';
import root1 from './assets/bottom/tooth1_root.png';

import crown2 from './assets/bottom/tooth2_crown.png';
import root2 from './assets/bottom/tooth2_root.png';

import crown3 from './assets/bottom/tooth3_crown.png';
import root3 from './assets/bottom/tooth3_root.png';

import crown4 from './assets/bottom/tooth4_crown.png';
import root4 from './assets/bottom/tooth4_root.png';

import crown5 from './assets/bottom/tooth5_crown.png';
import root5 from './assets/bottom/tooth5_root.png';

import crown6 from './assets/bottom/tooth6_crown.png';
import root6 from './assets/bottom/tooth6_root.png';

import crown7 from './assets/bottom/tooth7_crown.png';
import root7 from './assets/bottom/tooth7_root.png';

import crown8 from './assets/bottom/tooth8_crown.png';
import root8 from './assets/bottom/tooth8_root.png';

import crown_1 from './assets/top/tooth1_crown.png';
import crown_1_bottom_amalgam from './assets/top/tooth1_crown_bottom_amalgam.png';
import root_1 from './assets/top/tooth1_root.png';

import crown_2 from './assets/top/tooth2_crown.png';
import crown_2_with_crown from './assets/top/tooth2_crown_crown.png';
import root_2 from './assets/top/tooth2_root.png';

import crown_3 from './assets/top/tooth3_crown.png';
import root_3 from './assets/top/tooth3_root.png';

import crown_4 from './assets/top/tooth4_crown.png';
import root_4 from './assets/top/tooth4_root.png';

import crown_5 from './assets/top/tooth5_crown.png';
import root_5 from './assets/top/tooth5_root.png';

import crown_6 from './assets/top/tooth6_crown.png';
import root_6 from './assets/top/tooth6_root.png';

import crown_7 from './assets/top/tooth7_crown.png';
import root_7 from './assets/top/tooth7_root.png';

import crown_8 from './assets/top/tooth8_crown.png';
import root_8 from './assets/top/tooth8_root.png';

/*import crown_1 from './assets/top/crown_1-1.svg';
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
import root_8 from './assets/top/root_1-8.svg'; */
import { Box } from "@mui/material";
import { Popover } from "../Popover";

export const Tooth = ({ type = 'top', position, rotate = false, data, onUpdate }) => {
  const [crownPath, setCrownPath] = useState(crown1);
  const [rootPath, setRootPath] = useState(root1);
  const [selectedTooth, setSelectedTooth] = useState('');
  const [selectedRoot, setSelectedRoot] = useState('');

  useEffect(() => {
    if (type === 'bottom') {
      switch (position) {
        case 1: {
          setCrownPath(crown1);
          setRootPath(root1);
          break;
        }
        case 2: {
          setCrownPath(crown2);
          setRootPath(root2);
          break;
        }
        case 3: {
          setCrownPath(crown3);
          setRootPath(root3);
          break;
        }
        case 4: {
          setCrownPath(crown4);
          setRootPath(root4);
          break;
        }
        case 5: {
          setCrownPath(crown5);
          setRootPath(root5);
          break;
        }
        case 6: {
          setCrownPath(crown6);
          setRootPath(root6);
          break;
        }
        case 7: {
          setCrownPath(crown7);
          setRootPath(root7);
          break;
        }
        case 8: {
          setCrownPath(crown8);
          setRootPath(root8);
          break;
        }
        default: {
          setCrownPath(crown1);
          setRootPath(root1);
          break;
        }
      }
    }

    if (type === 'top') {
      switch (position) {
        case 1: {
          setCrownPath(data.piramid.bottom?.selectedCondition === 'Wear' ? crown_1_bottom_amalgam : crown_1);
          setRootPath(root_1);
          break;
        }
        case 2: {
          setCrownPath(data.toothStatus === 'Crown' ? crown_2_with_crown : crown_2);
          setRootPath(root_2);
          break;
        }
        case 3: {
          setCrownPath(crown_3);
          setRootPath(root_3);
          break;
        }
        case 4: {
          setCrownPath(data.piramid['middle-right']?.selectedCondition === 'Wear' && !rotate ? crown_4 : crown_5);
          setRootPath(root_4);
          break;
        }
        case 5: {
          setCrownPath(crown_5);
          setRootPath(root_5);
          break;
        }
        case 6: {
          setCrownPath(crown_6);
          setRootPath(root_6);
          break;
        }
        case 7: {
          setCrownPath(crown_7);
          setRootPath(root_7);
          break;
        }
        case 8: {
          setCrownPath(crown_8);
          setRootPath(root_8);
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
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      {type === 'top' && (
        <>
          <span>{position}</span>
          {data.toothStatus === 'removed' ? <div style={{width: '50px', height: '38.82px'}} /> : <img src={rootPath} alt={data.rootStatus} width="50px"style={{transform: rotate ? "scaleX(-1)" : '', cursor: 'pointer'}} onClick={(e) => handleClick(e, `U${rotate ? 'R' : 'L'}${9 - position} Root`, 'root')} />}
          <img src={crownPath} alt={data.toothStatus} width="50px" style={{transform: rotate ? "scaleX(-1)" : '', cursor: 'pointer', position: 'relative', top: '-1px', left: (position === 2 && data.toothStatus === 'Crown') || (position === 1 && data.piramid.bottom?.selectedCondition === 'Wear') ? `${rotate ? '-' : ''}2.5px` : '0px'}} onClick={(e) => handleClick(e, `Tooth U${rotate ? 'R' : 'L'}${9 - position}`, 'tooth')} />
          <Popover selectedTooth={selectedRoot} anchorEl={!!selectedRoot ? anchorEl : null} onClose={handleClose} type="root" onSave={handleSave} />
          <Popover selectedTooth={selectedTooth} anchorEl={!!selectedTooth ? anchorEl : null} onClose={handleClose} onSave={handleSave} />
        </>
      )}
      {type === 'bottom' && (
        <>
          <img src={crownPath} alt={data.toothStatus} width="50px" style={{transform: rotate ? "scaleX(-1)" : '', cursor: 'pointer', filter: !!selectedTooth ? 'hue-rotate(50deg) saturate(6)' : 'none'}} onClick={(e) => handleClick(e, `Tooth B${rotate ? 'L' : 'R'}${9 - position}`, 'tooth')} />
          {data.toothStatus === 'removed' ? <div style={{width: '50px', height: '38.82px'}} /> : <img src={rootPath} alt={data.rootStatus} width="50px" style={{transform: rotate ? "scaleX(-1)" : '', cursor: 'pointer', filter: !!selectedRoot? 'hue-rotate(50deg) saturate(6)' : 'none'}} onClick={(e) => handleClick(e, `B${rotate ? 'L' : 'R'}${9 - position} Root`, 'root')} />}
          <Popover selectedTooth={selectedTooth} anchorEl={!!selectedTooth ? anchorEl : null} onClose={handleClose} onSave={handleSave} />
          <Popover selectedTooth={selectedRoot} anchorEl={!!selectedRoot ? anchorEl : null} onClose={handleClose} type="root" onSave={handleSave} />
          <span>{position}</span>
        </>
      )}
    </Box>
  )
}
