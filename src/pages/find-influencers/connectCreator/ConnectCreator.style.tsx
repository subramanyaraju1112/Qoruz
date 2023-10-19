import { styled } from '@stitches-config/stitches.config';

const ConnectCreatorStyled = styled('section', {
  pt: '$4xl',
  pb: '$4xl',
  '.container': {
    maxWidth: '1056px !important',
    '.connect-cta': {
      background:
        'linear-gradient(180deg, #3E00A9 -35.58%, rgba(203, 54, 255, 0.61) 180.77%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backdropFilter: 'blur(7.5px)',
      borderRadius: '32px',
      padding: '57px 66px',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'url(../../images/curated-list/cta-bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },

      '.rgt-info': {
        gap: '$lg',
        h3: {
          fontSize: '3rem',
          lh: '0.92',
          color: ' #FFFFFF',
          '@lg': {
            fontSize: '2rem',
            lineHeight: '36px',
          },
        },
        '@lg': {
          mt: 12,
        },
      },
      '@lg': {
        width: '$full',
        margin: 'auto !important',
        padding: '32px',
      },
      '.items-center':{
        '@lg':{
          pl:'0px !important',
          pr:'0px !important',
        }
      }
    },
  },
  '.button-col':{
    pl:'0px !important',
    display: 'flex',
    justifyContent: 'end',
    '@md': {
      display: 'flex',
      justifyContent: 'flex-start',
    }
  },
  '.white-icon': {
    background: 'rgba(46, 8, 93, 0.5)',
    boxShadow: '0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(5.83333px)',
    color: 'white',
    // marginLeft: '60px',
    svg: {
      path: {
        fill: '#fff',
      },
    },
    '&:hover': {
      backgroundColor: '#ff6435',
    }
  }
});

const Info = styled('div', {
  maxWidth: 554,
  a: {
    mt: 48,
  },
  '.outline-button': {
    '&.md': {
      minHeight: 51,
      px: '$2xl',
      color: '#fff',
      boxShadow:
        '0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgb(46 8 93 / 75%)',
      marginRight: 'auto',
      backdropFilter: 'blur(5.83333px)',
      borderColor: '#2E085D80',
      fontSize: 23,
      lh: 1,
      padding: '16px 26px',
      fontFamily: 'articulat-cf',
      '>svg': {
        width: 14,
        height: 13,
      },
      '.fill-social-icon': {
        fill: '#fff',
      },
      '@lg': {
        fontSize: 20,
        mt:26,
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

export default ConnectCreatorStyled;
export { Info };
