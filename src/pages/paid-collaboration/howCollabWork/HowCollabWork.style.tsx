import { styled } from '@stitches-config/stitches.config';

const SectionStyled = styled('section', {
  position: 'relative',
  background: '#fff',
  pb: '$4xl',
  '.outline-button': {
    '&.md': {
      minHeight: 51,
      px: '$2xl',
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
  '.heading-top-container': {
    position: 'absolute',
    // top: 90,
    zIndex: 12,
    // bottom: '50vh',
    backgroundColor: '#fff',
  },
  '.heading-top': {
    // position: 'sticky',
    transition: 'all 0.3s ease-in-out 0s',
    top: 80,
    pt: 20,
    zIndex: 12,
    width: '100%',
    mb: -100,
    // bottom: '50vh',
    backgroundColor: '#fff',
    '&.pinned': {
      position: 'sticky',
      transition: 'transform 200ms ease-in-out',
    },
    '&.hide-heading': {
      position: 'sticky',
      transform: 'translateY(-100%)',
      // transition: transform 200ms ease-in-out;
    },
  },
  h2: {
    color: '$black',
    textAlign: 'center',
    fontSize: '2.25rem',
    position: 'relative',
    width: 'fit-content',
    margin: '0 auto',
    '.paid-line': {
      position: 'absolute',
      top: 48,
      left: 109,
      maxWidth: 133,
      height: 9,
      width: '$full',
      '@md': {
        left: 161,
      },
    },
    '@md': {
      // fontSize: '$h3',
      '.paid-line': {
        top: 36,
      }
    },
  },
  '.lead': {
    fontSize: 16,
    color: '#666',
    fontWeight: '$normal',
    textAlign: 'center',
    mt: 16,
    letterSpacing: '$sm',
    background:'#fff', 
  },
  '.heading': {
    '.header-container': {
      paddingTop: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '.word-frame': {
    height: '76px',
    // position: 'relative',
    overflow: 'hidden',
    '.word': {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'baseline'
    },
  },
  '.left-text-container': {
    display: 'flex',
    gap: '40px',

    '.primary.md': {
      boxShadow: ' 0px 1px 3px rgba(0, 0, 0, 0.15)',
      color: '#FF6435',
      '&:hover': {
        color: '#fff',
      },
    },
  },
  '@lg': {
    '.swiper-button-prev': {
      top: 'unset',
      left: '44%',
      bottom: 0,
    },
    '.swiper-button-next': {
      top: 'unset',
      right: '44%',
      bottom: 0,
    },
    '.swiper-button-next:after, .swiper-button-prev:after': {
      fontSize: 20,
    },
  },
  '&.mobile-only': {
    '.swiper-horizontal': {
      pb: 55,
    },
  },

  '.mask-scroll': {
    position: 'absolute',
    width: '50%',
    zIndex: 2,
    height: '107px',
    left: '0px',
    right: '0px',
    background: '#fff',
  },
  '.bottom-scroll': {
    position: 'sticky',
    width: '50%',
    zIndex: 2,
    marginRight: 'auto',
    height: '50px',
    bottom: '60px',
    marginLeft: '-30px',
    background: 'rgb(255, 255, 255)',
    '&.hide-shadow':{
      display:'none',
    },
  },
  '.button-section': {
    zIndex: 3,
    width: '$full',
    pt:5,
    '&.scroll-btn': {
      position: 'sticky !important',
      bottom: '0px',
      zIndex: 50,
      width: '100%',
      height: '86px',
      background: ' #fff',
    },
  },
});

const WorkDetails = styled('div', {
  mt: '$3xl',
  position: 'relative',
  width: '100%',

  '.left-info-row': {
    minHeight: '70vh',
    // pb: '20vh',
    alignItems: 'center !important',
    '@lg': {
      height: 'auto',
      flexDirection: 'column-reverse !important',
      mb: '$4xl',
      gap: 30,
    },
  },

  '.figure-container': {
    position: 'absolute !important',
    right: '0px !important',
    zIndex: 2,
    '@lg': {
      position: 'relative !important',
    },
  },

  '.left-info': {
    width: '50%',
    mt: 130,
    '@lg': {
      width: '$full',
      display: 'block',
    },
  },
  '.background-right': {
    // background:
    // 'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #FFF0E6 131.25deg, #F7EBFF 313.13deg, #FFFFFF 360deg), #FFFFFF',
    // boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
    // borderRadius: 32,
    // width: 600,
    // height: '60vh',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    backgroundAttachment: 'fixed',
    '.background-display': {
      backgroundImage:
        'radial-gradient(at 40% 20%, hsla(25,100%,94%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(25,100%,94%,1) 0px, transparent 50%),radial-gradient(at 73% 69%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,0%,100%,1) 0px, transparent 50%),radial-gradient(at 96% 93%, hsla(276,100%,96%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(25,100%,94%,1) 0px, transparent 50%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'calc(100vh - 70px)',
      position: 'sticky',
      top: 70,
    },
  },

  '.right-background': {
    position: 'relative',
    width: '50%',
    right: 0,

    '.background-display': {
      background:
        'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #FFF0E6 131.25deg, #F7EBFF 313.13deg, #FFFFFF 360deg), #FFFFFF',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
      borderRadius: 32,
      width: 600,
      // height: '60vh',
      height: 'calc(100vh - 70px)',
      position: 'sticky',
      top: 70,
      mb: 3,
      ml: 3,
    },
    '.h-10': {
      height: '6rem',
      width: 620,
      background: '#fff',
    },
    '.h-top': {
      // top: 22,
      // position: 'sticky',
      // zIndex: 3,
      top: 120,
      position: 'sticky',
      /* bottom: 0; */
      // width: '650px',
      width: '100%',

      height: 'calc(100vh - 160px)',
      backgroundColor: 'transparent',
      zIndex: 9,
      borderLeft: '30px solid #fff',
      borderRight: '30px solid #fff',
      borderTop: '130px solid #fff',
      borderBottom: '40px solid #fff',
      '&:before': {
        position: 'absolute',
        content: '',
        border: '20px solid #fff',
        // br: 30,
        left: -10,
        right: -10,
        top: -10,
        bottom: -10,
      },
      '&:after': {
        position: 'absolute',
        content: '',
        border: '9px solid #fff',
        br: 30,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 0px 14px 0px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0.02) 0px -2px 1px inset',
      },
    },
    // '.h-bottom': {
    //   top: '80vh',
    //   position: 'sticky',
    //   height: '10rem !important',
    //   zIndex: 3,
    // },
  },
  '@lg': {
    '.hide': {
      display: 'none',
    },
  },
});

const Figure = styled('figure', {
  // backgroundImage: 'url(../../images/paid-collaboration/reels-bg.png)',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  maxWidth: '95%',
  width: '$full',
  height: 300,
  // ml: 'auto',
  margin: '0 auto',
  img: {
    width: '$full',
    height: 'auto',
  },
  '@lg': {
    ml: 'auto',
    mr: 'auto',
  },
});

const Info = styled('div', {
  h3: {
    fontWeight: '$extrabold',
    fontSize: 48,
    letterSpacing: '-0.03em',
    color: '#666',
    lh: 1.2,
    maxWidth: 280,
    width: '$full',
    '@lg': {
      maxWidth: 780,
      mt:15,
    },
    '@md': {
      fontSize: '$h4',
      mt: '$2xl',
    },
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
  button: {
    mt: '$3xl',
  },
  '.work-content': {
    maxWidth: 400,
    width: '$full',
    fontFamily: 'elza-text',
    mt: '$2xl',
    fontWeight: '$normal',
    lh: 1.5,
    color: '#666',
    fontSize: 16,
    '@lg': {
      maxWidth: 780,
    },
  },
  '.work-content-mobile': {
    // maxWidth: '40%',
    width: '460px',
    textAlign: 'center',
    '@lg': {
      maxWidth: 780,
    },
  },
  '.info-mobile': {
    width: '100% !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
});

const InfoMobile = styled('div', {
  h3: {
    fontWeight: '$extrabold',
    fontSize: '4rem',
    letterSpacing: '-0.03em',
    color: '#666',
    lh: 1.2,
    paddingLeft: '40px',
    maxWidth: 380,
    width: '$full',
    mt:15,
    // '@lg': {
    //   maxWidth: 780,
    // },
    // '@md': {
    //   fontSize: '$h4',
    //   mt: '$2xl',
    // },
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
  '.work-content': {
    maxWidth: 400,
    width: '$full',
    '@lg': {
      maxWidth: 780,
    },
  },
  '.work-content-mobile': {
    // maxWidth: '40%',
    width: '70%',
    paddingLeft: '40px',
    textAlign: 'left',
    '@lg': {
      maxWidth: 780,
    },
  },
  '.custom-button': {
    ml: 40,
  },
  '.info-mobile': {
    width: '100% !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  '.post-campain-mobile-button': {
    marginLeft: '40px',
  },
});

export default SectionStyled;
export { Figure, Info, InfoMobile, WorkDetails };
