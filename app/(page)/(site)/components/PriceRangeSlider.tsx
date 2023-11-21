'use client'

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface DualHandleSliderProps {
  onRangeChange: (values: number | number[]) => void;
}

const DualHandleSlider: React.FC<DualHandleSliderProps> = ({ onRangeChange }) => {
  const [sliderValues, setSliderValues] = useState<number[]>([100, 1000]);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setSliderValues(values);
      onRangeChange(values);
    }
  };

  const sliderStyle = {
    trackStyle: { backgroundColor: 'lightblue', height: '8px' },
    handleStyle: {
    //   backgroundColor: 'lightblue',
    //   borderColor: 'lightblue',
      height: '16px',
      width: '16px',
      marginTop: '-4px',
    //   boxShadow: 'none'
    },
    railStyle: { backgroundColor: 'lightgray', height: '8px' },

   
  };

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700">Price Range</label>
      <Slider
        range
        min={0}
        max={1500}
        step={10}
        defaultValue={[100, 1000]}
        onChange={handleSliderChange}
        {...sliderStyle}
      />
      <div className="flex justify-between mt-2">
        <span>Min: {sliderValues[0]}</span>
        <span>Max: {sliderValues[1]}</span>
      </div>
    </div>
  );
};

export default DualHandleSlider;
