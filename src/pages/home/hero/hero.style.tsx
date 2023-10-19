import { styled } from '@stitches-config/stitches.config';

const HomeStyled = styled('section', {
  bgColor: '#170c2a',
  height: 'calc($vh - 72px)',
  color: 'white',
  position: 'relative',
  alignItems: 'center',
  '> img': {
    position: 'absolute',
    width: '$full',
    height: '$full',
    objectFit: 'contain',
    objectPosition: 'right',
  },
  'video': {
    position: 'absolute',
    width: '$full',
    height: '$full',
    objectFit: 'cover',
    objectPosition: 'right center',
  },
  '.hero-mobile': {
    display: 'none',
    objectFit: 'cover',
    objectPosition: 'bottom',
    '@md': {
      display: 'block',
    },
    '@sm':{
      objectFit: 'contain',
    },
  },
  '.hero-desktop': {
    display: 'block',
    '@md': {
      display: 'none',
    }
  },
  '@sm': {
    backgroundSize: 'contain',
  },
  h1: {
    fontSize: '$h1',
    color: '$primary',
    fontWeight: '$black',
    maxWidth: 540,
    lh: '$xs',
    '@md': {
      fontSize: '2.5rem',
      mt: '$4xl',
    },
  },
  '.lead': {
    fontSize: 20,
    letterSpacing: '$sm',
    maxWidth: 420,
    mt: '$2xl',
    '@md': {
      fontSize: '$xl',
    },
  },
  '.explore-topic': {
    display: 'none',
  },
  '@md': {
    alignItems: 'flex-start',
  }
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
  br: '$round',
  bgColor: '$primary',
  fs: 0,
  position: 'absolute',
  right: 12,
  top: '50%',
  transform: 'translateY(-50%)',
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
  maxWidth: 557,
  width: '$full',
  minHeight: 72,
  br: 60,
  position: 'relative',
  mt: '$3xl',
  mb: '$3xl',
  bgColor: '$white',
  display: 'flex',
  ai: 'center',
  jc: 'space-between',
  pt: 12,
  pb: 12,
  pl: 12, 
  border: '4px solid #8371A9',
  '.socail': {
    fs: 0,
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
            }
          },
          '&.socail__option--is-focused': {
            bgColor: 'transparent',
            color: '$primary',
            img: {
              filter: 'initial',
            }
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

const ParallaxContainer = styled('div', {
  position: 'absolute',
  width: '$full',
  height: '$full',
  overflow: 'hidden',
});

export default HomeStyled;
export {
  CategoryList,
  CategoryListItem,
  ExploreTopic,
  Marquee,
  MarqueeOverlay,
  ParallaxContainer,
  SearchBox,
  SearchIcon,
};
