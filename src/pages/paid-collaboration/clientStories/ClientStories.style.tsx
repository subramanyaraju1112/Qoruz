import { styled } from '@stitches-config/stitches.config';

const ClientStoriesStyled = styled('section', {
  bgColor: '#fff',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/curated-list/connected-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top -3rem',
  backgroundSize: 'contain',
  pt: '$6xl',
  pb: '$6xl',
  // '.container': {
  //   width: '56%',
  // },
  fontFamily: 'articulat-cf',
  '*': {
    fontFamily: 'articulat-cf',
  },
  '.row': {
    rowGap: 30,
  },
  h2: {
    letterSpacing: '-0.02em',
    color: '#000',
    fontSize: '2.25rem',
    lineHeight: 1.2,
    // fontWeight: '$bold',
    ta: 'center',
    '@md': {
      fontSize: '$h4',
    },
  },
});

const Quotes = styled('div', {
  '@lg': {
    fd: 'column-reverse',
  },
});

const Intro = styled('div', {
  maxWidth: 760,
  h2: {
    color: '#000',
    lh: 1.2,
    fontWeight: '$extrabold',
    fontSize: 48,
    ta: 'left',
    mark: {
      lh: 1.2,
      color: '#FF6434',
    },
    '@md': {
      fontSize: '$h3',
    },
  },
  '.details': {
    mt: '$md',
    fontSize: 20,
    fontWeight: '$normal',
    color: '#666',
  },
  '@lg': {
    mt: '$2xl',
  },
});

const Info = styled('div', {
  mt: '$md',
  h4: {
    letterSpacing: '-0.02em',
    color: '#333',
    fontWeight: '$semibold',
    fontFamily: 'elza-text',
    fontSize: 20,
  },
  span: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    color: '#999',
    fontSize: 16,
    mt: '$xs',
  },
  '.company': {
    mt: '$md',
  },
  '@lg': {
    mt: 0,
  },
});

const Figure = styled('figure', {
  maxWidth: 250,
  img: {
    maxWidth: '$full',
    height: 'auto',
  },
});

const ClientStoriesBlock = styled('div', {
  border: '1px solid #F8F8F8',
  br: 20,
  p: '$3xl',
  mt: '$3xl',
  bgColor: '#F8F8F8',
  height: '$full',
  gap: '$2xl',
  mark: {
    bgColor: 'transparent',
    color: '#FFAC7D',
  },
  h3: {
    color: '#FFAC7D',
    fontWeight: '$extrabold',
    letterSpacing: '-0.02em',
    fontSize: '2rem',
    lh: 1.2,
  },
  '.lead': {
    fontWeight: '$semibold',
    fontSize: 18,
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    mt: '$md',
  },
  '.para': {
    letterSpacing: '-0.03em',
    color: 'rgba(255, 255, 255, 0.8)',
    mt: '$md',
    fontWeight: '$bold',
  },
  '@lg': {
    fd: 'column',
    ai: 'flex-start',
  },
});

export default ClientStoriesStyled;
export { ClientStoriesBlock, Figure, Info, Intro, Quotes };
