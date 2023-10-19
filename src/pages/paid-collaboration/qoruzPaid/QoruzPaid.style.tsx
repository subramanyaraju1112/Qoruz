import { keyframes, styled } from '@stitches-config/stitches.config';

const blinkCaret = keyframes({
  'from, to': { opacity: 1 },
  '50%': { opacity: 0 },
});

const QoruzPaid = styled('section', {
  pt: '$4xl',
  pb: '$4xl',
  bgColor: '#170C2A',
  h1: {
    fontSize: '3rem',
    fontWeight: '800',
    lh: 1,
    color: '#fff',
    letterSpacing: '-0.03em',
    span: {
      color: '$primary',
      lh: 1,
      fontWeight: '600',
    },
  },
  '.row': {
    ai: 'center !important',
  },
  a: {
    fontFamily: 'articulat-cf',
    fontWeight: '800',
    mt: '$3xl',
    '&.md': {
      minHeight: 51,
      px: '$2xl',
    },
  },
  '.orbit-column': {
    '@lg': {
      height: 650,
    },
    '@md': {
      height: 550,
    },
  },
});

const Video = styled('div', {
  width: 297,
  height: 528,
  background:
    'linear-gradient(180deg, rgba(255, 100, 53, 0.03) 1.65%, rgba(255, 100, 53, 0) 100%)',
  border: '1px solid #FFFFFF',
  br: 22,
  display: 'flex',
  jc: 'center',
  ai: 'center',
  position: 'relative',
  video: {
    width: 297,
    height: 528,
    br: 22,
    '@md': {
      width: 238,
      height: 410,
    },
  },
  img: {
    position: 'absolute',
    maxWidth: '$full',
  },
  '.share': {
    top: '$2xl',
    left: -160,
    '@sm': {
      maxWidth: 120,
      top: '$lg',
      left: -60,
    },
  },
  '.influencers': {
    bottom: '$2xl',
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: 520,
    backdropFilter: 'blur(6.18131px)',
    '@sm': {
      width: '$full',
    },
  },
  '@md': {
    width: 238,
    height: 410,
  },
});

const HeroCTA = styled('div', {
  span: {
    fontSize: '$xs',
    fontWeight: '500',
    mt: '$sm',
    fontFamily: 'articulat-cf',
    color: '#fff',
  },
  a: {
    boxShadow: 'none',
    '@lg': {
      mx: 'auto',
    },
  },
});

const Reels = styled('div', {
  display: 'flex',
  ai: 'center',
  jc: 'center',
  py: '$2xl',
  // maxWidth: 630,
  // backgroundPosition: 'center',
  // backgroundImage: 'url(../images/paid-collaboration/reels-bg.svg)',
  // backgroundSize: 'cover',
  mx: 'auto',
  position: 'absolute',
  top: 18,
  right: 185,
  padding: 10,
  background:
    'linear-gradient(180deg, rgba(255, 100, 53, 0.03) 1.65%, rgba(255, 100, 53, 0) 100%)',
  border: '1.07247px solid #572D9E',
  backdropFilter: 'blur(10.2971px)',
  borderRadius: 17.64,
  '@md': {
    right: 60,
  },
});

const Intro = styled('div', {
  '.lead': {
    mt: '$lg',
    fontFamily: 'articulat-cf',
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    mb: '$sm',
  },
  h1: {
    fontWeight: 'bold',
  },
  '.typewriter': {
    '&:after': {
      content: '|',
      animation: `${blinkCaret} 1s step-end infinite`,
      fontWeight: '100',
    },
  },
  '@lg': {
    ta: 'center',
  },
});

const Dot = styled('div', {
  size: 20,
  br: '$round',
  position: 'absolute',
  '&.dot-yellow': {
    top: -9,
    left: '50%',
    bgColor: '#FFB547',
  },
  '&.dot-green': {
    top: '50%',
    right: -9,
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
  // transform: 'translateY(-50%)',
  height: 650,
  width: 650,
  maxWidth: '100%',
  maxHeight: '100%',
  marginLeft: 'auto',
  overflow: 'hidden',
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
  },
  '@lg': {
    top: '5%',
  },
  '@md': {
    size: 575,
    ml: 'auto',
    mr: 'auto',
    top: '30%',
  },
  '@sm': {
    size: 360,
    ml: 'auto',
    mr: 'auto',
    top: '30%',
  },
});

const OuterOrbit = styled('div', {
  size: 581,
  bgColor: 'rgb(134 70 241 / 30%)',
  br: '$round',
  position: 'absolute',
  animation: 'rotation 20s infinite linear',
  '&:hover': {
    // animationPlayState:'paused!important',
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
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        transition: '0s',
        opacity: 0,
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
        span: {
          opacity: 1,
          transitionDelay: '0.8s',
        },
      },
    },
  },
  '@md': {
    size: 506,
  },
  '@sm': {
    size: 320,
  },
});

const MiddleOrbit = styled('div', {
  size: 460,
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
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        transition: '0s',
        opacity: 0,
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
        span: {
          opacity: 1,
          transitionDelay: '0.8s',
        },
      },
    },
  },
  '@md': {
    size: 385,
  },
  '@sm': {
    size: 248,
  },
});

const InnerOrbit = styled('div', {
  size: 318,
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
      span: {
        fontWeight: 700,
        whiteSpace: 'nowrap',
        transition: '0s',
        opacity: 0,
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
        span: {
          opacity: 1,
          transitionDelay: '0.8s',
        },
      },
    },
  },
  '.inner-orbit-icon': {
    position: 'absolute',
    animation: 'rotationReverse 20s infinite linear',
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
    size: 243,
  },
  '@sm': {
    size: 140,
  },
});

const NumberInformation = styled('div', {});

export default QoruzPaid;
export {
  Dot,
  HeroCTA,
  InnerOrbit,
  Intro,
  MiddleOrbit,
  NumberInformation,
  OrbitWrapper,
  OuterOrbit,
  Reels,
  Video,
};
