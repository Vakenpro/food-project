import React, { useState } from "react";

import { Box, Button, Popover } from "@mui/material";

const TYPE = [
  'Vital Pulpotomy', 'Root Filling', 'Apicectomy', 'Implant', 'Post', 'Core & Post', 'Pin'
];

const CONDITION = [
  'Sound', 'Failed', 'Proposed'
];

export const RootPopover = ({ anchorEl, onClose, selectedRoot, onSave }) => {
  const [selectedType, setSelectedType] = useState();
  const [selectedCondition, setSelectedCondition] = useState();

  const handleClose = () => {
    onClose();
    handleConditionChange('');
  };

  const handleSave = () => {
    onSave('rootTreatment', {
      selectedType,
      selectedCondition,
    });
    handleConditionChange('');
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTypeChange = (value) => {
    setSelectedType(value);
  }

  const handleConditionChange = (value) => {
    setSelectedCondition(value);
    setSelectedType();
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      transitionDuration={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box sx={{marginLeft: '5px', marginTop: '5px'}}>
        {selectedRoot}
      </Box>
      <Box sx={{display: 'flex', gap: '10px', margin: '5px', height: '155px'}}>
        <Box>
          Condition
          <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '135px', width: '80px'}}>
            {CONDITION.map((elem) => (
              <span key={elem} onClick={() => handleConditionChange(elem)} style={{background: elem === selectedCondition ? 'blue' : 'white', color: elem === selectedCondition ? 'white' : 'black' }}>
                {elem}
              </span>
            ))}
          </Box>
        </Box>
        <Box>
          Type
          <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '135px', width: '120px'}}>
            {TYPE.map((elem) => (
              <span key={elem} onClick={() => handleTypeChange(elem)} style={{background: elem === selectedType ? 'blue' : 'white', color: elem === selectedType ? 'white' : 'black' }}>
                {elem}
              </span>
            ))}
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '18px'}}>
          <Button variant="outlined" onClick={handleSave}>Save</Button>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Popover>
  )
}
