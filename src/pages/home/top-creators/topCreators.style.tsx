import { styled } from '@stitches-config/stitches.config';

const TopCreatorsStyled = styled('section', {
  pt: '$4xl',
  '.button': {
    boxShadow:
      '0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)',
  },
  '.container': {
    '.primary': {
      mt: '$2xl',
      pl: '$2xl',
      pr: '$2xl',
      svg: {
        ml: '$sm',
      },
    },
  },
  '.embla': {
    '&.embla__top-creators': {
      '.embla__slide': {
        width: 200,
        mr: '$lg',
        '@md': {
          width: 180,
          mr: '$md',
        },
      },
      '.embla__container': {
        pt: '$4xl',
        pb: '$6xl',
      },
    },
  },
  '.carousel-container': {
    pt: '$4xl',
    pb: '$6xl',
    '.swiper-slide': {
      width: 'auto',
    },
    '.swiper-wrapper': {
      transition: 'all 0.3s ease-out 0s',
      // '.swiper-slide': {
      //   transition: 'all 0.3s ease-out 0s',
      // },
    },
  },
  '@lg': {
    pt: '$3xl',
  },
});

const Title = styled('div', {
  h2: {
    fontSize: '$h2',
    fontWeight: '$bold',
    lh: '$xs',
    ta: 'center',
    '@md': {
      fontSize: '$h3',
    },
  },
  span: {
    lh: '$xs',
    fontSize: '$h3',
    color: '#666666',
    fontWeight: '$medium',
    '@md': {
      fontSize: '$h4',
    },
  },
});

const Overlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(0deg, #000000 28.96%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.9,
  br: '0px 0px $lg $lg',
  minHeight: 130,
  p: '$lg',
  small: {
    fontWeight: '$semibold',
    fontSize: 10,
    letterSpacing: '$md',
    textTransform: 'uppercase',
    color: '$white',
    opacity: 0.7,
    width: '$full',
  },
  span: {
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$sm',
    color: '$white',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const TopCreator = styled('div', {
  position: 'relative',
  br: '$lg',
  width: 200,
  '> img': {
    position: 'relative',
    width: 200,
    height: 320,
    br: '$lg',
    objectFit: 'cover',
    '@md': {
      width: 180,
      height: 288,
    },
  },
  '@md': {
    width: 180,
  },
  '&:hover': {
    '.message': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
});

const MessageHere = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 'calc(100% - 30px)',
  display: 'flex',
  ai: 'center',
  px: 16,
  pb: 16,
  pt: 38,
  bs: '$md',
  bgColor: '$primary',
  br: '0px 0px $lg $lg',
  transform: 'translateY(-25px)',
  opacity: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '0.4s ease-in-out',
  span: {
    color: '$white',
    fontWeight: '$semibold',
  },
  img: {
    mr: '$md',
  },
});

const Info = styled('div', {
  width: 'calc(100% - 56px)',
  '@md': {
    width: 'calc(100% - 36px)',
  },
});

const Line = styled('div', {
  position: 'relative',
  pb: '$md',
  img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '$full',
  },
});

const Polygon = styled('span', {
  position: 'absolute',
  top: 20,
  right: 20,
  fontWeight: '$bold',
  fontSize: '$xl',
  letterSpacing: '$xs',
  color: '$white',
  textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
  size: 48,
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

export default TopCreatorsStyled;
export { Info, Line, MessageHere, Overlay, Polygon, Title, TopCreator };
