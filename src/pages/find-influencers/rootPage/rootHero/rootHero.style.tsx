import { styled } from '@stitches-config/stitches.config';

const CuratedHeroStyled = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(../../images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  pt: '46px',
  pb: '27px',
  mt: '-2px',
  '.first': {
    '@lg': {
      display: 'flex',
      fd: 'column',
    },
  },
  '@lg': {
    overflowX: 'clip',
    pt: '$4xl',
    '.mobile-show': {
      display: 'block !important',
      mb: 19,
    },
  },
  '.breadcrumb': {
    color: '#fff',
    '.crumb': {
      color: '#fff',
      fontSize: 14,
      textDecoration: 'none',
    },
  },
  '.mobile-show': {
    display: 'none',
  },
});

const CurateListInfo = styled('div', {
  position: 'relative',
  h1: {
    textAlign: 'center',
    fontSize: '$h3',
    color: '$white',
    fontWeight: '$extrabold',
    lh: '1',
    letterSpacing: '$sm',
    '@md': {
      fontSize: '$h4',
      lh: 1.2,
      width: 274,
    },
    '@lg': {
      textAlign: 'left',
    },
  },
  h4: {
    mt: '20px',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 600,
    '@lg': {
      textAlign: 'left',
    },
  },
  '.details': {
    fontSize: 20,
    maxWidth: 850,
    margin: 'auto',
    lh: '1.2',
    textAlign: 'center',
    width: '100%',
    color: '$white',
    fontWeight: '$normal',
    mt: '$md',
    transition: 'all 0.3s ease 0s',
    strong: {
      fontSize: 16,
      fontWeight: '$semibold',
      cursor: 'pointer',
    },
    // '&.mt-0': {
    //   mt: '4px',
    // },
    '.minimized': {
      maxHeight: '30em',
      height: 'auto',
      display: 'block',
      overflow: 'unset',
      transition: 'max-height 1s ease-in-out',
      fontSize: '16px',
      '&.expanded': {
        maxHeight: '0em',
        lineHeight: ' 1.5em',
        height: 'auto',
        overflow: 'hidden',
        transition: 'max-height 1s ease-in-out',
      },
    },
    '@md': {
      fontSize: 16,
    },
    '@lg': {
      textAlign: 'left',
    },
  },
  '@lg': {
    maxWidth: '$full',
  },
});

const Herotyled = styled('div', {
  color: 'white',
  position: 'relative',
  width: '100%',
  bottom: '-64px',
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
  '@lg': {
    pt: '$4xl',
    bottom: 0,
    pb: 22,
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
  maxWidth: '100%',
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
  overflow: 'hidden',
  '.social-icon-mobile': {
    width: '20px !important',
    height: '20px !important',
  },
  '.socail': {
    fs: 0,
    '.socail__single-value': {
      color: '$primary',
      letterSpacing: '$sm',
      fontFamily: 'articulat-cf',
      fontWeight: '$bold',
      cursor: 'pointer',
      m: 0,
      p: 0,
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
          size: 32,
        },
      },
      '.socail__control--is-focused': {
        bs: 'none',
      },
      '@sm': {
        width: 56,
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
    marginLeft: '5px',
    '.search-input__menu': {
      top: 'calc(100% - 4px)',
      zIndex: 3,
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
      fontSize: 16,
    },
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

export default CuratedHeroStyled;
export {
  CategoryList,
  CategoryListItem,
  CurateListInfo,
  ExploreTopic,
  Herotyled,
  Marquee,
  MarqueeOverlay,
  SearchBox,
  SearchIcon,
};
