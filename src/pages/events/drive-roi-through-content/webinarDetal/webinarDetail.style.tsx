import { styled } from '@stitches-config/stitches.config';

const WebinardetailContainer = styled('div', {
  pt: '3rem',
  pb: '3rem',
  '.title': {
    fontFamily: 'elza-text',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#FF6435',
    mb: 10,
  },
  h1: {
    fontFamily: 'articulat-cf',
    fontWeight: 700,
    fontSize: 48,
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#000000',
    mb: '$2xl',
    '@lg':{
      fontSize:36,
    },
  },
  '.iternary': {
    mb: '$2xl',
    display: 'flex',
    flexDirection: 'column',
    '.title': {
      mb: 4,
      width:'$full',
    },
    '.detail': {
      fontFamily: 'elza-text',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '22px',
      letterSpacing: '-0.02em',
      color: '#000000',
      width:'$full',
    },
    '&.text-left': {
      textAlign: 'left',
    },
    '&.text-center': {
      textAlign: 'center',
    },
    '&.text-right': {
      textAlign: 'right',
    },
  },
  '@lg': {
    '.flex.justify-between': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  '.details': {
    fontFamily: 'articulat-cf',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#000000',
  },
});

export default WebinardetailContainer;
