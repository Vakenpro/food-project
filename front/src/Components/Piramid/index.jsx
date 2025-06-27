import React from 'react';
import { PiramidSide } from './components/PiramidSide';

export const Piramid = ({ type, data, onUpdate }) => {
  return (
    <div style={{position: 'relative', width: '50px', height: '50px', marginTop: '15px'}}>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', zIndex: '1000', cursor: 'pointer'}}>
        <PiramidSide points={type === 'sharp' ? "0,0 12.5,20 12.5,30 0,50" : "0,0 12.5,12.5 12.5,37.5 0,50"} data={data} side="middle-right" onUpdate={onUpdate} />
        <PiramidSide points={type === 'sharp' ? "0,0 12.5,20 37.5,20 50,0" : "0,0 12.5,12.5 37.5,12.5 50,0"} data={data} side="top" onUpdate={onUpdate} />

        <PiramidSide points={type === 'sharp' ? "50,50 37.5,30 37.5,20 50,0" : "50,50 37.5,37.5 37.5,12.5 50,0"} data={data} side="middle-left" onUpdate={onUpdate} />
        <PiramidSide points={type === 'sharp' ? "50,50 37.5,30 12.5,30 0,50" : "50,50 37.5,37.5 12.5,37.5 0,50"} data={data} side="bottom" onUpdate={onUpdate} />

        <PiramidSide points={type === 'sharp' ? "12.5,20 12.5,30 37.5,30 37.5,20" : "12.5,12.5 12.5,37.5 37.5,37.5 37.5,12.5"} data={data} side="middle" onUpdate={onUpdate} />
      </svg>
      {data.toothStatus === 'removed' && <div style={{width: '60px', height: '20px', borderRadius: '5px 5px 0px 0px', background: 'pink', position: 'absolute', bottom: '0', left: '-5px'}} />}
    </div>
  )
}