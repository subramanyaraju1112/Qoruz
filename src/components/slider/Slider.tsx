import Slider from 'rc-slider';
import React from 'react';

import 'rc-slider/assets/index.css';

const CustomSlider = (props: any) => {
  const { step, marks, max, range, onChange } = props;

  return (
    <Slider
      range={range}
      step={step}
      // dots={false}
      dotStyle={{
        display: 'none',
      }}
      // style={{width: 600, marginRight: 100}}
      onChange={onChange()}
      max={max}
      marks={marks}
      trackStyle={{ backgroundColor: '#FFFFFF', height: 8 }}
      handleStyle={{
        height: 14,
        width: 26,
        marginTop: -3,
        border: 'none',
        backgroundColor: 'white',
        borderRadius: '10px',
        // background: 'linear-gradient(90deg, #B2BEB5, #ffffff, #B2BEB5)',
        opacity: 1,
        outline: 'none',
      }}
      railStyle={{ backgroundColor: '#d3d3d3', height: 8 }}
    />
  );
};

export default CustomSlider;
