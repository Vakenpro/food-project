import React, { useState } from "react";

import { Box, Button, Checkbox, Popover } from "@mui/material";

const TYPE = [
  'Bride', 'Crown', 'Denture', 'Maryland', 'Veneer', 'Lingual Veneer', 'Appliance'
];

const CONDITION = [
  'Sound', 'Carious', 'Defective', 'Proposed'
];

const MATERIAL = [
  'Acrylic', 'Gold', 'Implant Crown', 'Non Precious', 'Porcelain Bond', 'Precious Metal', 'Temporary', 'Unknown'
];

const RESTORATION = [
  '(none)', 'Acrylic', 'Gold', 'Implant Crown', 'Non Precious', 'Porcelain Bond', 'Precious Metal'
];

const PRODUCT = [
  'CR-GD - Full Gold Crown',
  'SMTH else'
]

export const ToothPopover = ({ anchorEl, onClose, selectedTooth, onSave }) => {
  const [selectedType, setSelectedType] = useState();
  const [selectedCondition, setSelectedCondition] = useState();
  const [selectedMaterial, setSelectedMaterial] = useState();
  const [selectedRestoration, setSelectedRestoration] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [extract, setExtract] = useState(false);

  const handleClose = () => {
    onClose();
    handleTypeChange('');
  };

  const handleSave = () => {
    onSave('toothTreatment',{
      selectedType,
      selectedCondition,
      selectedMaterial,
      selectedRestoration,
      selectedProduct,
      extract
    });
    handleTypeChange('')
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setSelectedCondition();
    setSelectedMaterial();
    setSelectedRestoration();
    setSelectedProduct();
    setExtract(false);
  }

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
      <Box sx={{display: 'flex', gap: '10px', margin: '5px', height: '175px'}}>
        <Box>
          Type
          <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '154px', width: '120px'}}>
            {TYPE.map((elem) => (
              <span key={elem} onClick={() => handleTypeChange(elem)} style={{background: elem === selectedType ? 'blue' : 'white', color: elem === selectedType ? 'white' : 'black' }}>
                {elem}
              </span>
            ))}
          </Box>
        </Box>
        {!!selectedType && (
          <Box>
            Condition
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '154px', width: '80px'}}>
              {CONDITION.map((elem) => (
                <span key={elem} onClick={() => handleConditionChange(elem)} style={{background: elem === selectedCondition ? 'blue' : 'white', color: elem === selectedCondition ? 'white' : 'black' }}>
                  {elem}
                </span>
              ))}
            </Box>
          </Box>
        )}
        {!!selectedCondition && (
          <Box>
            Material
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '154px', width: '120px'}}>
              {MATERIAL.map((elem) => (
                <span key={elem} onClick={() => handleMaterialChange(elem)} style={{background: elem === selectedMaterial ? 'blue' : 'white', color: elem === selectedMaterial ? 'white' : 'black' }}>
                  {elem}
                </span>
              ))}
            </Box>
          </Box>
        )}
        {selectedCondition === 'Defective' && (
          <Box>
            Restoration
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '134px', width: '120px'}}>
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
            <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid grey', cursor: 'pointer', height: '154px', minWidth: '200px'}}>
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
