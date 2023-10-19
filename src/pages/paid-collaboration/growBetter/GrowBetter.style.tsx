import { styled } from '@stitches-config/stitches.config';

const GrowBetter = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  bgColor: '#261B37',
  pt: '$6xl',
  pb: '$6xl',
  '.grow-container': {
    maxWidth: '1056px !important',
    width: '$full',
    margin: '0 auto',
  },
  '.connect-cta': {
    background:
      'linear-gradient(180deg, rgba(76, 0, 206, 0.8) -35.58%, rgba(203, 54, 255, 0.40) 180.77%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backdropFilter: 'blur(2.5px)',
    borderRadius: '32px',
    padding: '57px 66px',
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center !important',
    '&:before': {
      content: '',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.4,
      background:
        'url(https://d1ks0pavw8unez.cloudfront.net/public/images/curated-list/cta-bg.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    '.rgt-info': {
      gap: '$lg',
      h3: {
        fontSize: '3rem',
        lh: '0.92',
        fontWeight: '$bold',
        color: ' #FFFFFF',
        '@md': {
          fontSize: '$h4',
        },
      },
    },
    '@lg': {
      gap: 30,
    },
    '@md': {
      padding: '57px 20px',
    },
  },
  'p.detail': {
    fontSize: 20,
    width: '$full',
    maxWidth: 800,
    ml: 'auto',
    mr: 'auto',
    mt: 48,
    color: '#fff',
    lineHeight: 1.5,
    textAlign: 'center',
    fontWeight: 400,
    fontFamily: 'articulat-cf',
  },
});

const Info = styled('div', {
  // maxWidth: 554,
  display: 'flex',
  justifyContent: 'end',
  '@md': {
    justifyContent: 'flex-start',
  },
  '.grow-btn': {
    background: 'rgba(46, 8, 93, 0.5)',
    boxShadow:
      '0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(5.83333px)',
    color: 'white',
    fontSize: '35px',
    svg: {
      path: {
        fill: '#fff',
      },
    },
    '&:hover': {
      background: '#ff6435',
    },
  },
  '.outline-button': {
    '&.md': {
      minHeight: 51,
      px: '$2xl',
      color: '#ff6435',
      boxShadow:
        '0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgb(46 8 93 / 75%)',
      marginLeft: 'auto',
      // marginRight: 'auto',
      backdropFilter: 'blur(5.83333px)',
      borderColor: '#2E085D80',
      fontSize: 23,
      lh: 1,
      padding: '16px 26px',
      fontFamily: 'articulat-cf',
      '>svg': {
        mt: 1,
        width: 14,
        height: 13,
      },
      '.fill-social-icon': {
        fill: '#fff',
      },
    },
    '&.primary': {
      '&:hover': {
        backgroundColor: '#ff6435',
        borderColor: '#ff6435',
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

export default GrowBetter;
export { Info };
