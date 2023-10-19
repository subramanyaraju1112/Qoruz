import { styled } from '@stitches-config/stitches.config';

const ComingSoonStyled = styled('section', {
  background: '#170C2A',
  backdropFilter: 'blur(5px)',
  height: 'calc(100vh - 72px)',
  pb: 8,
  '.small-heading': {
    fontFamily: 'elza-text',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',

    letterSpacing: '0.06em',
    textTransform: 'uppercase',

    color: '#FF6435',
  },
  '.sub-heading': {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '48px',
    lineHeight: '44px',
    mt: 10,
    letterSpacing: '-0.02em',
    mb: 10,
    color: '#FFFFFF',
  },
  '.details': {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    mb: '3rem',
    color: '#FFFFFF',
  },
  '.align-center': {
    alignItems: 'center !important',
    '@lg': {
      flexDirection: 'column-reverse !important',
    },
  },
  '.height-full': {
    height: '$full',
    '.image-animation': {
      height: '$full',
      svg: {
        height: '$full',
      },
    },
    '@lg': {
      height: 'auto',
    },
  },

  '.coming-image': {
    width: '$full',
    height: 'auto',
  },

  '.floating-lady': {
    animation: 'skyfloat 2s infinite linear',
  },

  '.cloud1': {
    animation: 'cloudfloat 1.8s infinite linear',
    path: {
      transform: 'translateX(-40%)',
    },
  },
  '.cloud2': {
    animation: 'cloudfloat 2.5s infinite linear',
  },
  '.cloud3': {
    animation: 'cloudfloat 3s infinite linear',
  },
  '@lg': {
    height: 'auto',
    pb: '$5xl',
    '.image-animation': {
      svg: {
        width: '$full',
      },
    },
  },
});

export default ComingSoonStyled;
