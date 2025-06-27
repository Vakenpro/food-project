import React, { useState } from "react";

import { Box, Button, Checkbox, Popover } from "@mui/material";

const CONDITION = [
  'Sound', 'Carious', 'Defect', 'Wear', 'Early Caries', 'Arrested Caries', 'Decay', 'Cavity', 'Prevention'
];

const MATERIAL = [
  'Amalgam', 'Composite', 'Fissure Sealan', 'Glass Ionomer', 'Gold', 'Porcelain Bond', 'Precious Metal', 'Temporary', 'Unknown'
]

const RESTORATION = [
  '(none)', 'Amalgam', 'Composite', 'Fissure Sealan', 'Glass Ionomer', 'Gold', 'Porcelain Bond', 'Precious Metal', 'Temporary', 'Unknown'
];

const PRODUCT = [
  'FILL-A-L - Large Amalgam Filling',
  'FILL-A-M - Medium Amalgam Filling',
  'FILL-A-S - Small Amalgam Filling',
  'SMTH else'
]

export const PiramidPopover = ({ anchorEl, onClose, selectedTooth, onSave }) => {
  const [selectedCondition, setSelectedCondition] = useState('Sound');
  const [selectedMaterial, setSelectedMaterial] = useState();
  const [selectedRestoration, setSelectedRestoration] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [extract, setExtract] = useState(false);

  const handleClose = () => {
    onClose();
    handleConditionChange('');
  };

  const handleSave = () => {
    onSave('toothTreatment',{
      selectedCondition,
      selectedMaterial,
      selectedRestoration,
      selectedProduct,
      extract
    });
    handleConditionChange('');
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleConditionChange = (value) => {
    setSelectedCondition(value);
    setSelectedMaterial();
    setSelectedRestoration();
    setSelectedProduct();
    setExtract(false);
  }

  const handleMaterialChange = (value) => {
    setSelectedMaterial(value);
    setSelectedRestoration();
    setSelectedProduct();
    setExtract(false);
  }

  const handleRestorationChange = (value) => {
    setSelectedRestoration(value);
    setSelectedProduct();
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
        {selectedTooth}
      </Box>
      <Box sx={{display: 'flex', gap: '10px', margin: '5px', height: '225px'}}>
        <Box>
          Condition
          <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '206px', width: '95px'}}>
            {CONDITION.map((elem) => (
              <span key={elem} onClick={() => handleConditionChange(elem)} style={{background: elem === selectedCondition ? 'blue' : 'white', color: elem === selectedCondition ? 'white' : 'black' }}>
                {elem}
              </span>
            ))}
          </Box>
        </Box>
        {selectedCondition === 'Sound' && (
          <Box>
            Material
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '188px', width: '120px'}}>
              {MATERIAL.map((elem) => (
                <span key={elem} onClick={() => handleMaterialChange(elem)} style={{background: elem === selectedMaterial ? 'blue' : 'white', color: elem === selectedMaterial ? 'white' : 'black' }}>
                  {elem}
                </span>
              ))}
            </Box>
          </Box>
        )}
        {selectedCondition !== 'Sound' && (
          <Box>
            Restoration
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '188px', width: '120px'}}>
              {RESTORATION.map((elem) => (
                <span key={elem} onClick={() => handleRestorationChange(elem)} style={{background: elem === selectedRestoration ? 'blue' : 'white', color: elem === selectedRestoration ? 'white' : 'black' }}>
                  {elem}
                </span>
              ))}
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Checkbox label="Extract" checked={extract} onChange={(e) => setExtract(e.target.checked)} sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, padding: '0px' }}/>
              <span>Extract</span>
            </Box>
          </Box>
        )}
        {!!selectedRestoration && selectedRestoration !== '(none)' && (
          <Box>
            Product
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '154px', minWidth: '260px'}}>
              {PRODUCT.map((elem) => (
                <span key={elem} onClick={() => setSelectedProduct(elem)} style={{background: elem === selectedProduct ? 'blue' : 'white', color: elem === selectedProduct ? 'white' : 'black' }}>
                  {elem}
                </span>
              ))}
            </Box>
          </Box>
        )}
        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '18px'}}>
          <Button variant="outlined" onClick={handleSave}>Save</Button>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </Popover>
  )
}
