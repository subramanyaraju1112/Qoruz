import { styled } from '@stitches-config/stitches.config';

const HeroStyled = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  mt: '-2px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  '.first': {
    '@lg': {
      display: 'flex',
      fd: 'column',
    },
  },
  '@lg': {
    overflowX: 'clip',
  },
  // height: '574px',
  pb: '10rem',
  // pt: '10rem',
});

const ListInfo = styled('div', {
  position: 'relative',
  h1: {
    textAlign: 'center',
    fontSize: '48px',
    color: '$white',
    fontWeight: 700,
    lh: '1',
    // marginTop: '100px',
    letterSpacing: '$sm',
    '@md': {
      fontSize: '$h3',
      lh: 1.2,
    },
  },
  '.details': {
    fontSize: '20px',
    // maxWidth: 650,
    margin: 'auto',
    lh: '1.2',
    textAlign: 'center',
    width: '100%',
    color: '$white',
    fontWeight: 400,
    mt: '$lg',
    transition: 'all 0.3s ease 0s',
    strong: {
      fontSize: 16,
      fontWeight: '$semibold',
      cursor: 'pointer',
    },
  },
  '@lg': {
    maxWidth: '$full',
  },
});

const MainHeroStyled = styled('div', {
  color: 'white',
  position: 'relative',
  maxWidth: 960,
  mx: 'auto',
  width: '100%',
  bottom: '-39px',
  alignItems: 'center',
  '> img': {
    position: 'absolute',
    width: '$full',
    height: '$full',
    objectFit: 'contain',
    objectPosition: 'right',
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
  '.explore-topic': {
    display: 'none',
  },
  '@md': {
    alignItems: 'flex-start',
  },
  '&.fake-checker': {
    '.socail .socail__control': {
      justifyContent:'center',
      width:'auto',
      '.socail__value-container': {
        display: 'none',
      },
    },
  },
});

const CategoryList = styled('ul', {
  gap: '$sm',
  p: 0,
  mt: '$sm',
  mb: 0,
});

const ExploreTopic = styled('div', {
  mt: '$4xl',
});

const CategoryListItem = styled('li', {
  mt: '$sm',
});

const SearchIcon = styled('div', {
  size: 40,
  position: 'relative',
  backgroundColor: '#FF6435',
  mr: '20px',
  padding: '8px',
  br: '50%',
  width: '48px',
  height: '48px',
  cursor: 'pointer',
  transition: 'all 0.3s ease 0s',
  '&:hover': {
    transform: 'scale(0.97)',
  },
  img: {
    '@sm': {
      size: 14,
    },
  },
  '@sm': {
    size: 28,
  },
});

const SearchBox = styled('div', {
  maxWidth: '960',
  mx: 'auto',
  width: '$full',
  minHeight: 72,
  br: 60,
  position: 'relative',
  bgColor: '$white',
  display: 'flex',
  ai: 'center',
  jc: 'space-between',
  pt: 12,
  pb: 12,
  pl: 12,
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  '.socail': {
    borderRadius: '60px',
    border: '1px solid #FF6435',
    fs: 0,
    padding: '0px 10px',
    '.socail__single-value': {
      color: '$primary',
      letterSpacing: '$sm',
      fontFamily: 'articulat-cf',
      fontWeight: '$bold',
      cursor: 'pointer',
      m: 0,
    },
    '.socail__menu': {
      mt: '$xs',
      mb: 0,
      bgColor: '#FFEFE0',
      br: 16,
      minWidth: 145,
      '.socail__menu-list': {
        bgColor: '#fff',
        br: 16,
        p: '$xs',
        '.socail__option': {
          color: '#666666',
          letterSpacing: '$sm',
          fontFamily: 'articulat-cf',
          fontWeight: '$bold',
          cursor: 'pointer',
          display: 'flex',
          ai: 'center',
          img: {
            mr: 8,
            filter: 'grayscale(1)',
          },
          '&.socail__option--is-selected': {
            bgColor: 'transparent',
            color: '$primary',
            img: {
              filter: 'initial',
            },
          },
          '&.socail__option--is-focused': {
            bgColor: 'transparent',
            color: '$primary',
            img: {
              filter: 'initial',
            },
          },
        },
      },
    },
    '.socail__control': {
      border: 0,
      width: 148,
      height: 48,
      bs: 'none',
      br: 60,
      mr: 12,
      pl: '$lg',
      img: {
        mr: '$xs',
        '@sm': {
          mr: 0,
          size: 26,
        },
      },
      '.socail__control--is-focused': {
        bs: 'none',
      },
      '@sm': {
        width: 47,
        height: 40,
        mr: 0,
        bgColor: 'transparent',
        pl: 0,
      },
    },
    '.socail__input-container': {
      m: 0,
      p: 0,
    },
    '.socail__indicator-separator': {
      display: 'none',
    },
    '.socail__value-container': {
      p: 0,
      '@sm': {
        opacity: 0,
      },
    },
    '.socail__indicator': {
      p: 0,
      mr: '$sm',
      svg: {
        path: {
          fill: '$primary',
        },
      },
      '@sm': {
        mr: 0,
      },
    },
    '.socail__placeholder': {
      color: '$primary',
      letterSpacing: '$sm',
      fontFamily: 'articulat-cf',
      fontWeight: '$bold',
      m: 0,
    },
  },
  '.search-input': {
    border: 0,
    bs: 'none',
    fontSize: '$xl',
    letterSpacing: '$sm',
    color: '#555555',
    mr: 'auto',
    width: '$full',
    maxWidth: 'calc(100% - 160px)',
    paddingLeft: '40px',
    '.search-input__menu': {
      top: 'calc(100% - 4px)',
      zIndex: 1,
      br: 12,
      border: 0,
      minWidth: 320,
      overflow: 'hidden',
      '.search-input__menu-list': {
        '.search-input__option': {
          p: 0,
          overflow: 'hidden',
          a: {
            fontSize: 16,
            textDecoration: 'none',
            color: '#666666',
            display: 'flex',
            ai: 'center',
            p: '$lg',
            b: {
              fontWeight: '500',
            },
            span: {
              fontSize: 10,
              bgColor: '#ffffff',
              fontWeight: '500',
              ml: '$sm',
              mt: '$xs',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#999999',
            },
            img: {
              mr: '$lg',
              filter: 'grayscale(1)',
              display: 'flex',
            },
            '.tag': {
              ml: '$xs',
            },
          },
          '&.search-input__option--is-focused': {
            bgColor: 'rgba(255, 100, 53, 0.1);',
            a: {
              '.tag': {
                bgColor: 'transparent',
              },
            },
          },
          '&.search-input__option--is-selected': {
            bgColor: '$primary',
            color: '#fff',
            cursor: 'pointer',
            a: {
              color: '#fff',
              img: {
                filter: 'brightness(0) invert(1)',
              },
              '.tag': {
                bgColor: 'transparent',
                color: '#FFD8CC',
              },
            },
          },
        },
      },
      '@xs': {
        left: -78,
        minWidth: 'calc(100% + 72px)',
      },
    },
    '.search-input__control': {
      flex: 1,
      height: 48,
      border: 0,
      cursor: 'text',
      maxWidth: 'calc(100% - 60px)',
      '&.search-input__control--is-focused': {
        border: 0,
        bs: 'none',
      },
      '.search-input__indicators': {
        display: 'none',
      },
      '.search-input__value-container': {
        fontSize: 18,
        letterSpacing: '-0.02em',
        color: '#555555',
        '.search-input__placeholder': {
          m: 0,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize: 18,
          letterSpacing: '-0.02em',
          color: '#555555',
        },
        '.search-input__input-container': {
          m: 0,
          p: 0,
          width: '$full',
          input: {
            width: '$full',
          },
        },
      },
      '@sm': {
        maxWidth: 'calc(100% - 50px)',
      },
    },
    '&:focus': {
      outline: 'none',
      bs: 'none',
    },
    '@sm': {
      maxWidth: 'calc(100% - 68px)',
      pl: 20,
    },
  },
  '.cost-social-icon': {
    gap: 10,
    pl: 18,
  },
  '@sm': {
    minHeight: 56,
    height: 56,
  },
});

const MarqueeOverlay = styled('div', {
  width: 76,
  position: 'absolute',
  right: 66,
  height: 40,
  '&.top': {
    top: 0,
    background:
      'linear-gradient(180deg, rgb(255, 255, 255) 28.96%, rgba(255, 255, 255, 0) 100%)',
  },
  '&.bottom': {
    bottom: 0,
    background:
      'linear-gradient(0deg, rgb(255, 255, 255) 28.96%, rgba(255, 255, 255, 0) 100%)',
  },
  '@md': {
    display: 'none',
  },
});

const Marquee = styled('div', {
  position: 'absolute',
  right: 66,
  hieght: 44,
  '-webkit-animation': 'urmove 8s linear infinite',
  animation: 'urmove 1.25s linear infinite alternate',
  lineHeight: 1.2,
  span: {
    fontWeight: '$semibold',
    fontSize: '$xl',
    letterSpacing: '$sm',
    color: '#000',
    lineHeight: 1.2,
  },
  '@md': {
    display: 'none',
  },
});

const CopySection = styled('div', {
  position: 'relative',
  color: '#FFFFFF',
  textAlign: 'center',
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  border: '2px solid #AC82F4',
  padding: '8px 16px',
  backgroundColor: '#FFEDE8',
  margin: 'auto',
  marginTop: '70px',
  borderRadius: '30px',
  transition: 'all 0.3s ease 0s',
  width: '60%',
  '@md': {
    width: '$full',
    span: {
      fontSize: 12,
      textAlign: 'left',
    },
  },
});

const ResponseStyled = styled('div', {
  '.search-result-container': {
    mt: 42,
    display: 'flex',
    flexDirection: 'column',
    gap: '66.5px',
    justifyContent: 'center',

    '.search-detail': {
      // maxWidth: 393,
      // width: '$full',
      background: '#fff',
      padding: '24px 60px 24px 24px',
      borderRadius: '32px',
      h3: {
        fontWeight: 700,
        fontSize: 28,
        lineHeight: '34px',
        letterSpacing: '-0.02em',
        color: '#000000',
        fontFamily: 'elza-text',
      },
      '.details': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#666666',
        opacity: '0.9',
        marginTop: '16px',
      },
      small: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.5,
        color: '#333333',
        opacity: '0.9',
      },
      '@md': {
        padding: '60px 24px 24px 24px',
        textAlign: 'center',
        marginTop: '-74px',
        borderRadius: '32px',
      },
    },

    '.profile-image-top': {
      alignItems: 'center',
      position: 'relative',
      // maxWidth: '520px',
      // width: '$full',
      marginLeft: 'auto',
      marginRight: 'auto',
      '@md': {
        flexDirection: 'column-reverse',
      },
    },
    '.profile-image-detail': {
      position: 'relative',
      right: '50px',
      '@md': {
        position: 'relative',
        bottom: '-15px',
      },
    },
    '.bottom-section': {
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 100,
      '@md': {
        gap: '20px',
      },
    },
    '.influencer-stats': {
      background: '#fff',
      padding: '32px 35px',
      br: 32,
      width: 200,
      h3: {
        fontWeight: 700,
        fontSize: 32,
        lineHeight: 1.38,
        letterSpacing: '-0.02em',
        color: '#000000',
      },
      small: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.5,
        color: '#333333',
        opacity: 0.9,
      },
    },
    '.profile-image': {
      width: 200,
      height: 200,
      br: '50%',
    },
  },
  '.mt-3': {
    mt: '3rem',
    justifyContent: 'space-evenly',
    '.cost-content': {
      background: '#fff',
      padding: '20px 30px',
      borderRadius: '15px',
      '.details-cost': {
        flexDirection: 'column',
        gap: '10px',
        mt: '20px',
        '.cost': {
          color: 'transparent',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
          userSelect: 'none',
        },
      },
    },
  },
});

const Polygon = styled('span', {
  position: 'absolute',
  fontWeight: '$bold',
  fontSize: '1.75rem',
  letterSpacing: '$xs',
  color: '$white',
  textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
  size: 80,
  ta: 'center',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/top-creators/polygon.svg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  bottom: '0px',
  right: '-10px',
  fs: 0,
  // '@md': {
  //   width: '$2xl',
  //   height: '$2xl',
  //   fontSize: 12,
  // },
});

const Info = styled('div', {
  maxWidth: 554,
  '.outline-button': {
    '&.md': {
      minHeight: 51,
      px: '$2xl',
      color: '#fff',
      boxShadow:
        '0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgb(46 8 93 / 75%)',
      mt: 29,
      // marginLeft: 'auto',
      // marginRight: 'auto',
      backdropFilter: 'blur(5.83333px)',
      borderColor: '#2E085D80',
      fontSize: 23,
      lh: 1,
      padding: '16px 26px',
      fontFamily: 'articulat-cf',
      '>svg': {
        width: 14,
        height: 13,
        mb: 6,
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
  '@lg': {
    ml: 'auto',
    mr: 'auto',
  },
  '.response-image': {
    width: '$full',
    height: 'auto !important',
  },
});

const GrowBetter = styled('div', {
  pt: '3rem',
  '.grow-container': {
    maxWidth: '1056px !important',
    width: '$full',
    margin: '0 auto',
  },
  '.connect-cta': {
    background:
      'linear-gradient(180deg, #3E00A9 -35.58%, rgba(203, 54, 255, 0.61) 180.77%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backdropFilter: 'blur(2.5px)',
    borderRadius: '32px',
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
        fontSize: '38px',
        lh: '44px',
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
      '.items-center': {
        '.response-image': {
          width: '$full',
          height: 'auto',
        },
      },
    },
  },
});

const BreadCrumb = styled('div', {
  color: '#fff',
  marginBottom: '4rem',
  paddingTop: '30px',
  paddingLeft: '15px',
  paddingRight: '15px',
  '.crumb': {
    color: '#fff',
    fontSize: 14,
    textDecoration: 'none',
  },
});

export default HeroStyled;
export {
  BreadCrumb,
  CategoryList,
  CategoryListItem,
  CopySection,
  ExploreTopic,
  GrowBetter,
  Info,
  ListInfo,
  MainHeroStyled,
  Marquee,
  MarqueeOverlay,
  Polygon,
  ResponseStyled,
  SearchBox,
  SearchIcon,
};
