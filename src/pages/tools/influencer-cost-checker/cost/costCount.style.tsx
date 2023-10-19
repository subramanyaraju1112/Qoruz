import { styled } from '@stitches-config/stitches.config';

const CostCountStyle = styled('div', {
  pt: '5rem',
  '.cost-image':{
    width:'$full',
    height:'auto',
  },
  '.sub-heading': {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: 'justify',
    color: '#666666',
    mt: '$3xl',
  },
  '.tool-sub-heading': {
    fontFamily: 'articulat-cf',
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '1.375',
    letterSpacing: '-0.02em',
    color: '#000000',
    position: 'relative',
    '@lg':{
      fontSize:24,
    }
  },
  '.border-title': {
    '&:after': {
      content: '',
      width: 100,
      height: 4,
      background: 'red',
      left: 0,
      bottom: '-16px',
      position: 'absolute',
    },
  },
  '.cards-title': {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#666666',
    mb: '$3xl',
  },
  '.tools-content': {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: 'justify',
    color: '#666666',
    mt: '$3xl',
  },
  '.mt-8': {
    mt: '$3xl',
  },
  '.mt-12': {
    mt: '3rem',
  },
  '@lg': {
    pt: '3rem',
    '.mt-none':{
      mt:0,
      '.tools-content':{
        mt:0,
      }
    },
  },
});

export default CostCountStyle;
