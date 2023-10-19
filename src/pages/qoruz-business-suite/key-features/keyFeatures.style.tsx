import { styled } from '@stitches-config/stitches.config';

const KeyFeaturesStyled = styled('section', {
  pt: '$4xl',
  pb: '$6xl',
  '.container': {
    gap: '5rem',
    '@lg': {
      gap: '3rem',
    },
    '@md': {
      gap: '2rem',
    },
  },
});

const Figure = styled('figure', {
  // position: 'relative',
  mt: '$2xl',
  mb: -60,
  img: {
    maxWidth: '$full',
    height: 'auto',
    position: 'relative !important',
  },
});

const Intro = styled('div', {
  maxWidth: 640,
  width: '$full',
  mx: 'auto',
  textAlign: 'center',
  h2: {
    '@md': {
      fontSize: '$h3',
    },
    '.heading-line': {
      position: 'absolute',
      bottom: 0,
      left: 84,
    },
  },
  '.intro-text': {
    color: '#666',
    fontSize: 20,
    mt: '$xl',
  },
});

const KeyFeaturesBlock = styled('ul', {
  columnGap: '5rem',
  rowGap: '7rem',
  '@lg': {
    columnGap: '1.5rem',
    rowGap: '5rem',
  },
});

const KeyFeaturesSingle = styled('li', {
  br: 20,
  px: '$2xl',
  pt: '$3xl',
  maxWidth: 'calc(50% - 2.5rem)',
  width: '$full',
  bgColor: '#f1f1f1',
  position: 'relative',
  background:
    'hsla(25,100%,94%,1);background-image:radial-gradient(at 40% 20%, hsla(25,100%,94%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(25,100%,94%,1) 0px, transparent 50%),radial-gradient(at 73% 69%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,0%,100%,1) 0px, transparent 50%),radial-gradient(at 96% 93%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(25,100%,94%,1) 0px, transparent 50%)',
  // background: 'url(../../images/solution/bg-key-features.png)',
  // backgroundSize: 'cover',
  // backgroundRepeat:'no-repeat',
  '.icon': {
    position: 'absolute',
    top: -40,
    right: '$2xl',
    width: 77,
    height: 'auto',
    '@md':{
      width:68,
    }
  },
  mark: {
    bgColor: 'transparent',
    color: '#FFAC7D',
  },
  h3: {
    fontFamily: 'elza-text',
    fontWeight: '$extrabold',
    letterSpacing: '-0.02em',
    fontSize: '2rem',
    lh: 1.2,
    '@md': {
      fontSize: '$h4',
    },
  },
  small: {
    color: '$primary',
    fontWeight: '$semibold',
    fontSize: '$md',
    mt: '$md',
  },
  '.lead': {
    fontSize: '$xl',
    color: '#666666',
    mt: '$2xl',
  },
  '.para': {
    letterSpacing: '-0.03em',
    color: 'rgba(255, 255, 255, 0.8)',
    mt: '$md',
    fontWeight: '$bold',
  },
  '@lg': {
    maxWidth: 'calc(50% - 12px)',
  },
  '@md': {
    maxWidth: '480px',
  },
});

export default KeyFeaturesStyled;
export { Figure, Intro, KeyFeaturesBlock, KeyFeaturesSingle };
