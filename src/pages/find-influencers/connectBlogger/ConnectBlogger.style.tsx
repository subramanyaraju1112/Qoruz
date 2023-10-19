import { styled } from '@stitches-config/stitches.config';

const ConnectBlogger = styled('section', {
  backgroundImage: 'url(../../images/curated-list/connected-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left -14rem top -21rem',
  backgroundSize: '70%',
  pt: '10rem',
  pb: '7rem',
  '@lg': {
    backgroundPosition: 'left -50px top -1rem',
    backgroundSize: '145%',
    pt: '3rem',
    pb: '3rem',
  },

  '.undefined': {
    '@lg': {
      ml: 'auto',
      mr: 'auto',
      mt: 22,
    },
  },
});

const Figure = styled('figure', {
  width: '$full',
  maxWidth: '$full',
  // maxWidth: 660,
  position: 'absolute',
  left: -60,
  top: 15,
  img:{
    width: '$full',
    maxWidth: '$full',
    height: 'auto',
  },
  '@lg': {
    position: 'relative',
    left: 0,
    top: 0,
    width: '$full',

    '.blogger-banner': {
      width: '$full',
      height: 'auto',
      objectFit: 'cover',
    },

    '&.mobile-hide': {
      display: 'none !important',
    },
  },
  '&.desktop-hide': {
    display: 'none !important',
    '@lg': {
      display: 'block !important',
    },
  },
});

const Info = styled('div', {
  maxWidth: 554,
  h2: {
    fontWeight: '$extrabold',
    letterSpacing: '-0.02em',
    color: '#000',
    lh: 0.96,
    '@lg': {
      textAlign: 'center',
      fontSize: 40,
      mb: 40,
    },
  },
  '.lead': {
    mt: '$3xl',
    color: '#666666',
    fontFamily: 'elza-text',
    fontWeight: '400',
    lh: 1.5,
    '@lg': {
      textAlign: 'center',
      fontSize: 18,
      mt: 0,
    },
  },
  a: {
    mt: 48,
  },
  '.outline-button': {
    '&.md': {
      minHeight: 51,
      px: '$2xl',
      color: '$primary',
      boxShadow: '$lg',
      backgroundColor: '#fff',
      fontSize: 20,
      lh: 1,
      '>svg': {
        mt: '-3px',
      },
    },
    '&.primary': {
      '&:hover': {
        backgroundColor: '$primary',
        borderColor: '$primary',
        color: '#fff',
        svg: {
          path: {
            fill: '#fff',
          },
        },
      },
    },
  },
});

export default ConnectBlogger;
export { Figure, Info };
