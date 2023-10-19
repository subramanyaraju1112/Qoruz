import { styled } from '@stitches-config/stitches.config';

const Reels = styled('section', {
  bgColor: '#261C37',
  pt: '$6xl',
  pb: '$6xl',
  minHeight: '100vh',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/paid-collaboration/reels-pattern.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  h2: {
    color: '$white',
    textAlign: 'center',
    mark: {
      bgColor: 'transparent',
      color: '#FF6435',
    },
  },
  '.lead': {
    fontSize: 20,
    color: '$white',
    fontWeight: '$medium',
    textAlign: 'center',
  },
  '.row': {
    mt: '$3xl',
  },
});

const Figure = styled('figure', {
  // backgroundImage: 'url(../../images/paid-collaboration/reels-bg.png)',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  maxWidth: 600,
  width: '$full',
  height: 300,
  ml: 'auto',
  img: {
    width: '$full',
  },
});

const Info = styled('div', {
  h3: {
    fontWeight: '$extrabold',
    fontSize: '4rem',
    letterSpacing: '-0.03em',
    color: '#666',
    lh: 1.2,
  },
  '.details': {
    mt: '$2xl',
    color: '#666',
    pb: 10,
    mark: {
      bgColor: 'transparent',
      color: '#666',
      fontWeight: '$semibold',
    },
  },
  a: {
    mt: '$3xl',
  },
});

export default Reels;
export { Figure, Info };
