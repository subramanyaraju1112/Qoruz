import { styled } from '@stitches-config/stitches.config';

const CustomerStyled = styled('section', {
  bgColor: '#fff',
  pt: '$5xl',
  pb: '$5xl',
  h3: {
    fontSize: 36,
    fontWeight: 900,
    fontFamily: 'articulat-cf',
    '*': {
      fontFamily: 'articulat-cf',
    },
    '> span': {
      color: '#666666',
      fontSize: '$h4',
      fontWeight: '$normal',
      '@md': {
        fontSize: '$h5',
      },
    },
    '@md': {
      fontSize: '$h4',
    },
  },
  '.embla': {
    '&__dots': {
      left: 'initial',
      '@sm': {
        right: 15,
      },
    },
    '&__dot': {
      size: 12,
      bgColor: '$white',
      opacity: 0.3,
      marginLeft: 3,
      mr: 3,
      br: '$round',
      '&.embla__dot--selected': {
        width: 28,
        br: 28,
        opacity: 1,
      },
    },
  },
  '.embla__customer': {
    '.embla__container': {
      pt: '$3xl',
      '.embla__class-names': {
        width:'$full',
        maxWidth: 500,
        display: 'flex',
        fd: 'column',
      },
      '.embla__slide': {
        mr: '$4xl',
        '@sm': {},
      },
    },
    '.embla__dots': {
      display: 'none',
      bottom: 'initial',
      top: -60,
      bgColor: '#FAFAFA',
      br: 32,
      p: '$md $xl',
      '.embla__dot': {
        bgColor: '#AAAAAA',
        opacity: 0.3,
        '&.embla__dot--selected': {
          opacity: 1,
        },
      },
      '@md': {
        top: 'auto',
        bottom: '-$4xl',
      },
    },
  },
  '.business__control': {
    bgColor: '#fff',
    border: 0,
    minHeight: 'initial',
    mx: '$sm',
    '&.business__control--is-focused': {
      border: 0,
      bs: 'none',
      outine: 'none',
    },
    '.business__value-container': {
      p: 0,
      '.business__input-container, .business__single-value': {
        m: 0,
        p: 0,
      },
    },
    '.business__indicators': {
      '.business__indicator-separator': {
        display: 'none',
      },
      '.business__indicator': {
        p: 0,
        ml: '$sm',
        svg: {
          path: {
            fill: '#000000',
          },
        },
      },
    },
  },
  '.business__menu': {
    m: 0,
    top: 'calc(100% - 4px)',
    zIndex: 2,
    bs: 'none',
    p: '$sm',
    bgColor: 'transparent',
    '.business__menu-list': {
      minWidth: 200,
      bgColor: '#fff',
      br: 12,
      bs: '0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)',
      border: 0,
      '.business__option': {
        p: '8px 12px',
        fontWeight: 600,
        fontSize: 20,
        cursor: 'pointer',
        color: '#000000',
        '&.business__option--is-focused': {
          bgColor: 'rgba(255, 100, 53, 0.1)',
          color: '#333333',
        },
        '&.business__option--is-selected': {
          bgColor: '$primary',
          color: '#fff',
        },
      },
    },
  },
  '.swiper-slide-customer':{
    maxWidth:'50%',
    '@lg':{
      maxWidth:'100%',
    },
  },
  '.swiper-pagination':{
    display:'none',
  },
});

const LineSelect = styled('div', {
  position: 'relative',
  img: {
    position: 'absolute',
    bottom: '-$sm',
  },
});

const FilterSlider = styled('div', {
  color: '#000000',
});

const CustomerDetails = styled('div', {
  ml: '$4xl',
  fd: 'column',
  '@xl': {
    ml: '$2xl',
  },
  '@md': {
    ml: 0,
    mt: '$lg',
    fd: 'column-reverse',
  },
});

const CustomerCard = styled('div', {
  display: 'flex',
  flexDirection:'column',
  ta: 'center',
  width: '$full',
  bgColor: '#F8F8F8',
  br: 32,
  p: '$3xl',
  '.note': {
    fontSize: 16,
    color: '#666',
    ta: 'left',
    mt: '$lg',
    '@xl': {
      fontSize: '$xl',
    },
    '@md': {
      fontSize: '$md',
      ta: 'center',
    },
    '@sm': {
      fontSize: '$sm',
    },
  },
  '> img': {
    br: 32,
    height: 350,
    width: 230,
    objectFit: 'cover',
    '@md': {
      width: '$full',
    },
  },
  '@xl': {
    p: '$2xl',
  },
  '@md': {
    fd: 'column',
  },
});

const AuthorDetails = styled('div', {
  '.avatar': {
    size: 120,
    fs: 0,
    br: 20,
  },
  '@md': {
    jc: 'center',
  },
});

const Author = styled('div', {
  ml: '$lg',
  ta: 'left',
  height: '100%',
  justifyContent: 'end',
  '> *': {
    letterSpacing: '$sm',
    '@xl': {
      fontSize: '$md',
    },
    '@sm': {
      fontSize: '$sm',
    },
  },
  b: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    mt: '$sm',
  },
  '.linkedin': {
    ml: 10,
    '.fill-social-icon': {
      fill: '#0072b1',
    },
  },
  span: {
    color: '#999',
    fontWeight: '500',
    '&.company': {
      fontSize: 14,
    },
  },
  '@sm': {
    ml: '$md',
  },
});

export default CustomerStyled;
export {
  Author,
  AuthorDetails,
  CustomerCard,
  CustomerDetails,
  FilterSlider,
  LineSelect,
};
