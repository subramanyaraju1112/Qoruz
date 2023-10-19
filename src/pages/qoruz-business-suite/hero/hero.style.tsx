import { styled } from '@stitches-config/stitches.config';

const HeroStyled = styled('section', {
  bgColor: '#170c2a',
  color: 'white',
  position: 'relative',
  alignItems: 'center',
  // pt: 'calc(72px + 4rem)',
  pt: '4rem',
  pb: '4rem',
  minHeight: 'calc(100vh - 153px)',
  '.banner-content': {
    display: 'flex',
    fd: 'column',
    gap: '$2xl',
  },
  '.hero-mobile': {
    display: 'none',
    objectFit: 'cover',
    objectPosition: 'bottom',
    '@md': {
      display: 'block',
    },
    '@sm': {
      objectFit: 'contain',
    },
  },
  '.hero-desktop': {
    display: 'block',
    '@md': {
      display: 'none',
    },
  },
  '@sm': {
    backgroundSize: 'contain',
  },
  h1: {
    fontSize: '$h1',
    color: '$primary',
    fontWeight: '900',
    letterSpacing: '$xs',
    lh: '$xs',
    maxWidth: 420,
    '@md': {
      fontSize: '2.5rem',
      mt: '$4xl',
    },
  },
  '.lead': {
    fontSize: 20,
    letterSpacing: '$sm',
    maxWidth: 420,
    '@md': {
      fontSize: '$xl',
    },
  },
  '.explore-topic': {
    display: 'none',
  },
  '@md': {
    alignItems: 'flex-start',
    '.right-orbit': {
      overflow: 'visible',
      pl:'0px !important',
      pr:'0px !important',
    },
  },
});

const Dot = styled('div', {
  size: 16,
  br: '$round',
  position: 'absolute',
  '&.dot-yellow': {
    top: -5,
    left: '50%',
    bgColor: '#FFB547',
  },
  '&.dot-green': {
    top: '50%',
    right: -8,
    bgColor: '#85BF3B',
  },
  '&.dot-blue': {
    bottom: '4%',
    left: '25%',
    bgColor: '#42D4FF',
  },
});

const OrbitWrapper = styled('div', {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  height: 500,
  width: 500,
  maxWidth: '100%',
  maxHeight: '100%',
  '.orbit-path': {
    position: 'absolute',
  },
  h3: {
    lineHeight: 1,
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 900,
    position: 'absolute',
    maxWidth: 160,
    '@md': {
      maxWidth: 120,
      fontSize: '1rem',
    },
  },
  '@lg': {
    margin: 'auto',
  },
  '@md': {
    height: 464,
    width: '$full',
    margin: 'auto',
    my: 30,
    overflow: 'hidden',
  },
});

const OuterOrbit = styled('div', {
  size: 440,
  bgColor: 'rgb(134 70 241 / 30%)',
  br: '$round',
  position: 'absolute',
  animation: 'rotation 20s infinite linear, glow 2s infinite linear',
  // bs: '1px 1px 0 #380E80, 0 0 20px 5px #380E80',
  '&:hover': {
    animationPlayState: 'paused!important',
    '.avatar': {
      animationPlayState: 'paused!important',
    },
  },

  '&:has(.avatar:hover)': {
    zIndex: 20,
  },
  '.avatar-1': {
    position: 'absolute',
    top: '16%',
    left: '3%',
  },
  '.avatar-2': {
    position: 'absolute',
    top: '2%',
    right: '20%',
  },
  '.avatar-3': {
    position: 'absolute',
    bottom: '0%',
    right: '28%',
  },
  '.avatar-4': {
    position: 'absolute',
    left: '1%',
    bottom: '22%',
  },
  '.avatar': {
    display: 'flex',
    animation: 'rotationReverse 20s infinite linear',
    img: {
      '@md': {
        transform: 'scale(0.8)',
      },
    },
    '.info': {
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid #783FD8',
      backdropFilter: 'blur(5px)',
      borderRadius: 48,
      zIndex: -1,
      width: 0,
      pr: 10,
      paddingLeft: 'calc(100% + 10px)',
      height: '100%',
      visibility: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      overflow: 'hidden',
      // opacity: 0,
      // transition: 'opacity 1s ease-in-out, width 1s ease-in-out',
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        // transition: '0s',
        // opacity: 0,
        img: {
          mr: 5,
        },
        '&.likes': {
          backgroundColor: '#000',
          br: 30,
          px: 12,
          py: 4,
        },
        '&.left': {
          fontWeight: 600,
          color: '#A7A5A9',
        },
      },
    },
    '&:hover': {
      '.info': {
        width: 250,
        visibility: 'visible',
        transition: '1s',
        // span: {
        //   opacity: 1,
        //   transitionDelay: '0.8s',
        // },
        '@md': {
          visibility: 'hidden',
        },
      },
    },
  },
  '@md': {
    size: 320,
    '.avatar-1': {
      top: '12%',
    },
    '.avatar-2': {
      right: '16%',
    },
    '.avatar-3': {
      right: '17%',
    },
    '.avatar-4': {
      left: '-2%',
      bottom: '19%',
    },
  },
});

const MiddleOrbit = styled('div', {
  size: 348,
  bgColor: 'rgb(134 70 241 / 40%)',
  br: '$round',
  position: 'absolute',
  animation: 'rotationReverse 20s infinite linear',
  '&:hover': {
    animationPlayState: 'paused!important',
    '.avatar': {
      animationPlayState: 'paused!important',
    },
  },
  
  '&:has(.avatar:hover)': {
    zIndex: 20,
  },
  '.avatar-1': {
    position: 'absolute',
    top: '18%',
    left: '4%',
  },
  '.avatar-2': {
    position: 'absolute',
    top: '25%',
    right: '1%',
  },
  '.avatar-3': {
    position: 'absolute',
    bottom: '15%',
    right: '4%',
  },
  '.avatar': {
    display: 'flex',
    zIndex: 9,
    animation: 'rotation 20s infinite linear',
    img: {
      '@md': {
        transform: 'scale(0.8)',
      },
    },
    '.info': {
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid #783FD8',
      backdropFilter: 'blur(5px)',
      borderRadius: 48,
      zIndex: -1,
      width: 0,
      pr: 20,
      paddingLeft: 'calc(100% + 10px)',
      height: '100%',
      visibility: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      overflow: 'hidden',
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        // transition: '0s',
        // opacity: 0,
        img: {
          mr: 5,
        },
        '&.left': {
          fontWeight: 600,
          color: '#A7A5A9',
        },
      },
    },
    '&:hover': {
      '.info': {
        width: 250,
        visibility: 'visible',
        transition: '1s',
        // span: {
        //   opacity: 1,
        //   transitionDelay: '0.8s',
        // },
        '@md': {
          visibility: 'hidden',
        },
      },
    },
  },
  '@md': {
    size: 220,
    '.avatar-1': {
      top: '7%',
    },
    '.avatar-2': {
      top: '16%',
    },
    '.avatar-3': {
      bottom: '10%',
    },
  },
});

const InnerOrbit = styled('div', {
  size: 240,
  bgColor: 'rgb(134 70 241 / 70%)',
  br: '$round',
  border: '5px solid #FEA287',
  animation: 'rotation 20s infinite linear',
  '&:hover': {
    animationPlayState: 'paused!important',
    '.avatar': {
      animationPlayState: 'paused!important',
    },
    '.inner-orbit-icon': {
      animationPlayState: 'paused!important',
    },
  },
  
  '&:has(.avatar:hover)': {
    zIndex: 20,
  },
  '.avatar-1': {
    position: 'absolute',
    bottom: '6%',
    left: '2%',
  },
  '.avatar-2': {
    position: 'absolute',
    top: '6%',
    right: '8%',
  },
  '.avatar': {
    display: 'flex',
    zIndex: 9,
    animation: 'rotationReverse 20s infinite linear',
    img: {
      '@md': {
        transform: 'scale(0.8)',
      },
    },
    '.info': {
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid #783FD8',
      backdropFilter: 'blur(5px)',
      borderRadius: 48,
      zIndex: -1,
      width: 0,
      pr: 20,
      paddingLeft: 'calc(100% + 10px)',
      height: '100%',
      visibility: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      overflow: 'hidden',
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        // transition: '0s',
        // opacity: 0,
        img: {
          mr: 5,
        },
        '&.left': {
          fontWeight: 600,
          color: '#A7A5A9',
        },
      },
    },
    '&:hover': {
      '.info': {
        width: 250,
        visibility: 'visible',
        transition: '1s',
        // span: {
        //   opacity: 1,
        //   transitionDelay: '0.8s',
        // },
        '@md': {
          visibility: 'hidden',
        },
      },
    },
  },
  '.inner-orbit-icon': {
    position: 'absolute',
    animation: 'rotationReverse 20s infinite linear',
    '@md': {
      size: 40,
    },
    '&.icon-1': {
      top: -40,
    },
    '&.icon-2': {
      right: -40,
    },
    '&.icon-3': {
      bottom: -40,
    },
    '&.icon-4': {
      left: -40,
    },
  },
  '@md': {
    size: 120,
    '.avatar-1': {
      bottom: '-12%',
      left: '-15%',
    },
    '.avatar-2': {
      top: '-9%',
      right: '-3%',
    },
  },
});

export default HeroStyled;
export { Dot, InnerOrbit, MiddleOrbit, OrbitWrapper, OuterOrbit };
