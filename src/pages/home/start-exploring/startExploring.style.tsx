import { styled } from '@stitches-config/stitches.config';

const StartExploringStyled = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  pt: '$8xl',
  '.first': {
    '@xl': {
      display: 'flex',
      fd: 'column-reverse',
    },
    '.explore-button': {
      position: 'absolute',
      zIndex: 4,
      right: '204px',
      top: '118px',
      background:
        'linear-gradient(180deg, #FFB017 0%, rgba(148, 35, 0, 0.22) 100%)',
      boxShadow:
        '8.5463px 6.40972px 11.7512px 4.27315px rgba(0, 0, 0, 0.05), 0px 25.102px 35.6286px 0.809741px rgba(0, 0, 0, 0.6)',
      transform: 'matrix(1, -0.05, -0.07, 1, 0, 0)',
      color: '#fff',
      fontFamily: 'articulat-cf',
      fontSize: '20px !important',
      fontWeight: '600 !important',
      transition: 'all 0.15s ease-out 0s',
      '.fill-social-icon': {
        fill: '#fff',
      },
      '@md': {
        right: 87,
        top: 73,
      },
      '&:hover': {
        transform: 'matrix(1, -0.05, -0.07, 1, 0, 0) scale(1.1)',
        background:
          'linear-gradient(180deg, #ffb017 0%, rgb(148 35 0 / 66%) 100%)',
      },
    },
  },
  '@lg': {
    pt: 0,
    overflowX: 'clip',
  },
});

const AttractiveBusiness = styled('div', {
  position: 'relative',
  p: '$md $4xl',
  gap: '$md',
  mt: '$6xl',
  zIndex: 0,
  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'linear-gradient(180deg, rgba(62, 0, 169, 0.6) -35.58%, rgba(203, 54, 255, 0.072) 180.77%)',
    br: '32px 32px 0 0',
    '@lg': {
      br: '16px 16px 0 0',
    },
  },
  '> *': {
    position: 'relative',
  },
  span: {
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$xs',
    color: '$white',
  },
  a: {
    bgColor: '#7441CC',
    br: 50,
    fontWeight: 'bold',
    fontSize: '$xs',
    letterSpacing: '$xl',
    color: '$white',
    p: '8px 18px',
    minHeight: 40,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.4s ease-in-out',
  },
  '.button-hover': {
    '&:hover': {
      background: '#8E5BE8',
    },
  },
  '@lg': {
    mt: '$3xl',
    pl: '$lg',
    pr: '$lg',
  },
});

const StartExploringImage = styled('figure', {
  position: 'relative',
  zIndex: 1,
  maxWidth: 774,
  width: '$full',
  display: 'flex',
  justifyContent: 'flex-end',
  img: {
    '@md': {
      position: 'relative',
      width: '100%',
      left: '0%',
      right: '0%',
    },
  },
  '@xl': {
    position: 'relative',
    maxWidth: '$full',
    height: '495px',
    top: '0',
    right: '194px',
  },
  '@lg': {
    position: 'relative',
    maxWidth: '$full',
    height: '660px',
    top: '159px',
    right: '75px',
  },
  '@md': {
    position: 'relative',
    maxWidth: '$full',
    height: '600px',
    top: '159px',
    right: '-24px',
  },

  '.embla__slide': {
    position: 'absolute',
  },
  '.card0': {
    top: -170,
    right: 200,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    height: 280,
    width: 175,
    zIndex: 2,
    transition: 'all 0.15s ease-out 0s',
    img: {
      width: 175,
      height: 271,
      objectFit: 'cover',
    },
    small: {
      fontSize: '9px',
    },
    '.influencer-name': {
      fontSize: 14,
    },
    '.polygon': {
      fontSize: 15,
      width: 42,
      height: 42,
    },
    '@md': {
      height: 227,
      width: 142,
      right: 102,
      '.top-creator': {
        width: 142,
        img: {
          width: 142,
          height: 227,
        },
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
  '.card1': {
    top: 32,
    right: 327,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    zIndex: 1,
    transition: 'all 0.15s ease-out 0s',
    img: {
      width: 159,
      height: 246,
      objectFit: 'cover',
    },
    small: {
      fontSize: '8px',
    },
    '.influencer-name': {
      fontSize: 13,
    },
    '.polygon': {
      fontSize: 14,
      width: 38,
      height: 38,
    },
    '@md': {
      height: 206,
      width: 129,
      top: 6,
      right: 215,
      '.top-creator': {
        width: 129,
        img: {
          width: 129,
          height: 206,
        },
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
  '.card2': {
    top: 135,
    right: 465,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    transition: 'all 0.15s ease-out 0s',
    zIndex: 2,
    img: {
      width: 200,
      height: 321,
      objectFit: 'cover',
    },
    small: {
      fontSize: '10px',
    },
    '.influencer-name': {
      fontSize: 16,
    },
    '.polygon': {
      fontSize: 18,
      width: 48,
      height: 48,
    },
    '@md': {
      height: 260,
      width: 162,
      right: 319,
      '.top-creator': {
        width: 162,
        img: {
          width: 162,
          height: 260,
        },
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
  '.card3': {
    top: -101,
    right: -70,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    height: 297,
    width: 186,
    zIndex: 2,
    transition: 'all 0.15s ease-out 0s',
    img: {
      width: 186,
      height: 297,
      objectFit: 'cover',
    },
    small: {
      fontSize: '9px',
    },
    '.influencer-name': {
      fontSize: 15,
    },
    '.polygon': {
      fontSize: 17,
      width: 44,
      height: 44,
    },
    '@md': {
      height: 240,
      width: 150,
      img: {
        width: 150,
        height: 240,
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
  '.card4': {
    top: 71,
    right: 91,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    height: 251,
    width: 162,
    zIndex: 3,
    transition: 'all 0.15s ease-out 0s',
    img: {
      width: 162,
      height: 251,
      objectFit: 'cover',
    },
    small: {
      fontSize: '8px',
    },
    '.influencer-name': {
      fontSize: 13,
    },
    '.polygon': {
      fontSize: 15,
      width: 38,
      height: 38,
    },
    '@md': {
      height: 210,
      width: 131,
      top: 27,
      right: 20,
      '.top-creator': {
        width: 131,
        img: {
          width: 131,
          height: 210,
        },
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
  '.card5': {
    top: 194,
    right: 218,
    transform: 'matrix(1, -0.05, -0.01, 1, 0, 0)',
    height: 234,
    width: 146,
    zIndex: 0,
    transition: 'all 0.15s ease-out 0s',
    img: {
      width: 146,
      height: 234,
      objectFit: 'cover',
    },
    small: {
      fontSize: '7px',
    },
    '.influencer-name': {
      fontSize: 12,
    },
    '.polygon': {
      fontSize: 13,
      width: 35,
      height: 35,
    },
    '@md': {
      height: 190,
      width: 118,
      top: 136,
      right: 133,
      '.top-creator': {
        width: 118,
        img: {
          width: 118,
          height: 190,
        },
      },
    },
    '&:hover': {
      transform: 'matrix(1, -0.05, -0.01, 1, 0, 0) scale(1.05)',
    },
  },
});

const ButtonGroup = styled('div', {
  mt: '$2xl',
  gap: '$md',
  'a, button': {
    mt: '$xl',
    minHeight: 48,
  },
});

const StartExploringInfo = styled('div', {
  maxWidth: 420,
  position: 'relative',
  zIndex: 2,
  h3: {
    fontSize: '$h3',
    color: '$white',
    fontWeight: '$bold',
    lh: '$xs',
    letterSpacing: '$sm',
    maxWidth: 300,
    width: '$full',
    '@md': {
      fontSize: '$h3',
      lh: 1.2,
    },
    '@xl': {
      maxWidth: '$full',
    },
  },
  '.details': {
    fontSize: 20,
    color: '$white',
    mt: '$2xl',
  },
  '@xl': {
    maxWidth: '$full',
  },
});

const Overlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(0deg, #000000 28.96%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.9,
  minHeight: 130,
  p: '$lg',
  small: {
    fontWeight: '$semibold',
    letterSpacing: '$md',
    textTransform: 'uppercase',
    color: '$white',
    opacity: 0.7,
    width: '$full',
  },
  '.influencer-name': {
    fontWeight: '$medium',
    letterSpacing: '$sm',
    color: '$white',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  '@md': {
    br: '0 0 20px 20px',
  },
});

const TopCreator = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  br: '$lg',
  // width: 189,
  '> img': {
    position: 'relative',
    // width: 189,
    // height: 280,
    br: '$lg',
    // objectFit: 'cover',
    '@md': {
      width: 150,
      height: 240,
    },
  },
  '@md': {
    width: 150,
  },
  '&:hover': {
    '.message': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
});

const Polygon = styled('div', {
  position: 'absolute',
  top: 20,
  right: 14,
  fontWeight: '$bold',
  fontSize: '14px',
  letterSpacing: '$xs',
  color: '$white',
  textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
  size: 36,
  ta: 'center',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/top-creators/polygon.svg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  fs: 0,
  '@md': {
    width: '$3xl',
    height: '$3xl',
    fontSize: 12,
  },
});

export default StartExploringStyled;
export {
  AttractiveBusiness,
  ButtonGroup,
  Overlay,
  Polygon,
  StartExploringImage,
  StartExploringInfo,
  TopCreator,
};
