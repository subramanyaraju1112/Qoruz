import { styled } from '@stitches-config/stitches.config';

const TestimonialStyled = styled('section', {
  bgColor: '#fff',
  mt: '$5xl',
  pb: '$5xl',
  position: 'relative',
  h3: {
    color: '$white',
    fontSize: '$h3',
    fontWeight: '$bold',
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
      right: 'calc(((100% - 1110px) / 2) + 0px)',
      '@2xl': {
        right: 'calc(((100% - 1110px) / 2) + 0px)',
      },
      '@xl': {
        right: 'calc(((100% - 930px) / 2) + 0px)',
      },
      '@lg': {
        right: 'calc(((100% - 720px) / 2) + 0px)',
      },
      '@md': {
        right: 'calc(((100% - 510px) / 2) + 0px)',
      },
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
  '.embla__testimonial': {
    '.embla__container': {
      pt: '$4xl',
      pb: '$4xl',
      pl: 'calc((100% - 1140px) / 2)',
      pr: 'calc((100% - 1140px) / 2)',
      '@2xl': {
        pl: 'calc((100% - 1110px) / 2)',
        pr: 'calc((100% - 1140px) / 2)',
      },
      '@xl': {
        pl: 'calc((100% - 930px) / 2)',
        pr: 'calc((100% - 970px) / 2)',
      },
      '@lg': {
        pt: '$4xl',
        pl: 'calc((100% - 720px) / 2)',
        pr: 'calc((100% - 750px) / 2)',
      },
      '@md': {
        pl: 'calc((100% - 510px) / 2)',
        pr: 'calc((100% - 540px) / 2)',
      },
      '@sm': {
        pl: 15,
        pr: 15,
      },
      '.embla__slide': {
        mr: '$3xl',
        width: 1140,
        '@2xl': {
          maxWidth: 1140,
        },
        '@xl': {
          maxWidth: 930,
        },
        '@lg': {
          maxWidth: 720,
        },
        '@md': {
          maxWidth: 510,
        },
        '@sm': {
          maxWidth: '$full',
          pl: 0,
          '&:last-child': {
            pl: 15,
            '.testimonial-card': {
              width: 'calc(100% + 15px)',
            },
          },
        },
      },
    },
    '.embla__dots': {
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
        top: '$md',
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
      p: '8px',
      border: 0,
      '.business__option': {
        p: '8px 12px',
        m: '12px 0',
        borderRadius: '10px',
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
      '&::-webkit-scrollbar':{
        display:'none',
      },
    },
  },
  '@lg': {
    pt: '$3xl',
    mt: '$3xl',
    // pb: '0',
    '.swiper-slide.swiper-slide-visible.swiper-slide-active':{
      width:'100% !important',
    }
  },
  '.customer': {
    position: 'unset',
    '.swiper-pagination': {
      position: 'absolute',
      display: 'flex',
      top: '30px !important',
      height: 'min-content',
      right: '0px',
      left: 'unset !important',
      textAlign: 'right',
      marginRight: '15%',
      background: '#FAFAFA',
      borderRadius: '32px',
      width: 'fit-content !important',
      padding: '13px 21px',
      '.swiper-pagination-bullet': {
        width: '12px !important',
        height: '12px !important',
        background: '#AAAAAA',
        opacity: 0.3,
        size: 12,
        transition: 'opacity 0.4s ease-in-out, width 0.4s ease-in-out',
        borderRadius: '24px !important',
      },
      '.swiper-pagination-bullet-active': {
        width: '28px !important',
        borderRadius: 24,
        background: '#AAAAAA',
        opacity: 1,
        transition: 'opacity 0.4s ease-in-out, width 0.4s ease-in-out',
      },
      '@lg': {
        top: 'unset !important',
        bottom: '30px !important',
        right: '17%',
        zIndex:1,
      },      
    },
    '@lg':{
      px:15,
    }
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

const TestimonialDetails = styled('div', {
  ml: '$4xl',
  fd: 'column',
  '.note': {
    fontSize: 20,
    letterSpacing: '-0.02em',
    color: '#666666',
    fontWeight: '$normal',
    ta: 'left',
    '@xl': {
      fontSize: '$xl',
    },
    '@md': {
      fontSize: '$md',
      ta: 'justify',
    },
    '@sm': {
      fontSize: '$sm',
    },
  },
  '@xl': {
    ml: '$2xl',
  },
  '@md': {
    ml: 0,
    mt: '$lg',
    fd: 'column-reverse',
  },
});

const TestimonialCard = styled('div', {
  display: 'flex',
  ta: 'center',
  width: '$full',
  bgColor: '#F8F8F8',
  br: 32,
  p: '$3xl',
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
  mt: '$3xl',
  img: {
    maxWidth: 54,
    height: 'auto',
    fs: 0,
  },
  '@xl': {
    mt: '$2xl',
  },
  '@md': {
    jc: 'unset',
    mt: 0,
    mb: '$2xl',
  },
});

const Author = styled('div', {
  ml: '$lg',
  ta: 'left',
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
    '@md':{
      fontSize:18,
    }
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

export default TestimonialStyled;
export {
  Author,
  AuthorDetails,
  FilterSlider,
  LineSelect,
  TestimonialCard,
  TestimonialDetails,
};
