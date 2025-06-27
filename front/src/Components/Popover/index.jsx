import React from "react";

import { RootPopover } from "./components/RootPopover";
import { ToothPopover } from "./components/ToothPopover";
import { PiramidPopover } from "./components/PiramidPopover";

export const Popover = ({ anchorEl, onClose, selectedTooth, type = 'tooth', onSave }) => {
  const handleSave = (key, value) => {
    onSave(key, value)
  }

  if(type === 'root') {
    return (
      <RootPopover anchorEl={anchorEl} onClose={onClose} selectedRoot={selectedTooth} onSave={handleSave} />
    )
  } else if (type === 'tooth') {
    return (
      <ToothPopover anchorEl={anchorEl} onClose={onClose} selectedTooth={selectedTooth} onSave={handleSave} />
    )
  } else {
    return (
      <PiramidPopover anchorEl={anchorEl} onClose={onClose} selectedTooth={selectedTooth} onSave={handleSave} />
    )
  }

}
