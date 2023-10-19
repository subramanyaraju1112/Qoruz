import { styled } from '@stitches-config/stitches.config';

const MapStyled = styled('div', {
  height:'100%',
  iframe: {
    height:'100%',
    width: '100%',
  },
  '@lg':{
    height:450,
    overflow: 'hidden'
  }
});

export default MapStyled;
