import { styled } from '@stitches-config/stitches.config';

const BusinessGoalsStyled = styled('section', {
  bgColor: '#fff',
  pt: '$2xl',
  pb: '$2xl',
  position: 'relative',
  h2: {
    color: '#000000',
    fontWeight: '$extrabold',
    lh: '$xs',
    maxWidth: 630,
    fontFamily: 'articulat-cf',
    span: {
      lh: '$xs',
      color: '#666666',
      fontSize: '$h3',
      fontWeight: '$medium',
      mb: '$md',
      '@md': {
        fontSize: '$h5',
      },
    },
    div: {
      lh: 0.6,
      fontSize: '$h2',
      fontWeight: '$bold',
      fontFamily: 'articulat-cf',
      '@md': {
        fontSize: '$h3',
      },
    },
    mark: {
      color: '$primary',
      bgColor: 'transparent',
      fontFamily: 'articulat-cf',
      fontWeight: '$bold',
      lh: 1.2,
    },
    '@md': {
      fontSize: '$h4',
      linelh: 0.8,
    },
  },
  '.swiper-free-mode': {
    '.swiper-wrapper': {
      transitionTimingFunction: 'linear',
      transitionDelay: '0ms',
      // '.swiper-slide': {
      //   px: 10,
      //   '&:first-child': {
      //     paddingLeft: 140,
      //   },
      //   '&:last-child': {
      //     paddingRight: 140,
      //   },
      // },
    },
  },
  '.swiper.business-goals': {
    // position: 'unset',
    '.swiper-wrapper': {
      // gap: 22,
    },
    '.swiper-button-prev, .swiper-button-next': {
      width: 52,
      height: 48,
      boxShadow:
        '0px 1px 3px 1px rgba(0, 0, 0, 0.1), 0px 27px 21px -17px rgba(0, 0, 0, 0.08)',
      background: ' linear-gradient(270deg, #FFFFFF 77.04%, #F6F6F6 115%)',
      position: 'absolute',
      zIndex: 1,
      top: '$2xl',
      '&:after': {
        fontSize: 20,
        color: '$primary',
      },
      '&.swiper-button-disabled': {
        background: 'linear-gradient(270deg, #FFFFFF 62.27%, #F6F6F6 100%)',
        opacity: '0.5',
        boxShadow:
          '0px 1px 3px 1px rgba(0, 0, 0, 0.1), 0px 27px 21px -17px rgba(0, 0, 0, 0.08)',
        '&:after': {
          color: '#888',
        },
      },
    },
    '.swiper-button-prev': {
      right: 100,
      left: 'initial',
      borderRadius: '32px 4px 4px 32px',
    },

    '.swiper-button-next': {
      right: 40,
      borderRadius: '4px 32px 32px 4px',
    },
  },
  '.card-slider': {
    width: 'fit-content',
    pt: 4,
    pb: 4,
    a: {
      height: '100%',
      width: 'fit-content',
      // maxWidth: 320,
      opacity: 1,
      textDecoration: 'none',
      '.card': {
        bs: 'none',
        maxWidth: 320,
        width: '$full',
        minHeight: 579,
        transition: 'all 0.5s ease 0s',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 3px 5px -7px, rgba(0, 0, 0, 0.15) 0px 1px 3px',
        '&:hover': {
          boxShadow:
            ' 0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)',
          transform: 'scale(1.01)',
        },
      },
      h5: {
        lineHeight: 1.2,
        color: '#000',
      },
      '.details': {
        fontSize: '$md',
      },
      span: {
        color: '$primary',
        fontWeight: '$medium',
        textDecoration: 'underline',
        pt: '$md',
        fontSize: '$sm',
        mb: '$xl',
      },
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
  '.embla__business-goals': {
    '.embla__container ': {
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
        pt: '$3xl',
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
    },
    '.embla__button': {
      top: '-$5xl',
      transform: 'translateY(0)',
      bs: ' 0px 1px 3px 1px rgba(0, 0, 0, 0.1), 0px 27px 21px -17px rgba(0, 0, 0, 0.08)',
      bgColor: '$white',
      svg: {
        '@md': {
          width: 14,
          height: 'auto',
        },
      },
      '&__next': {
        br: '4px 32px 32px 4px',
        right: 'calc((100% - 1140px) / 2)',
        background: 'linear-gradient(270deg, #FFFFFF 77.04%, #F6F6F6 115%)',
        '@2xl': {
          right: 'calc((100% - 1140px) / 2)',
        },
        '@xl': {
          right: 'calc((100% - 930px) / 2)',
        },
        '@lg': {
          right: 'calc((100% - 720px) / 2)',
        },
        '@md': {
          right: 'calc((100% - 510px) / 2)',
        },
        '@sm': {
          right: 15,
        },
      },
      '&__prev': {
        br: '32px 4px 4px 32px',
        left: 'initial',
        background: 'linear-gradient(270deg, #FFFFFF 62.27%, #F6F6F6 100%)',
        right: 'calc(((100% - 1140px) / 2) + 60px )',
        '@2xl': {
          right: 'calc(((100% - 1140px) / 2) + 60px)',
        },
        '@xl': {
          right: 'calc(((100% - 930px) / 2) + 60px)',
        },
        '@lg': {
          right: 'calc(((100% - 720px) / 2) + 60px)',
        },
        '@md': {
          right: 'calc(((100% - 510px) / 2) + 50px)',
        },
        '@sm': {
          right: 'calc(16px + 50px)',
        },
      },
      '@md': {
        top: 'initial',
        bottom: 0,
        width: 43,
        height: 40,
      },
    },

    '.embla__slide': {
      display: 'flex',
      width: 320,
      mr: '$lg',
    },
  },
  '.carousel-container': {
    px: '$xl',
    py: '$4xl',
    '.swiper-slide': {
      display: 'flex',
      width: 'auto',
      minHeight: 480,
    },
  },
  '@lg': {
    pt: '$3xl',
    pb: '$3xl',
  },
  '@md': {
    pb: '$4xl',
  },
  '.embla__dots': {
    bottom: 'initial',
    position: 'relative',
    bgColor: '#FAFAFA',
    br: 32,
    left: 'initial',
    width: 'unset',
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
});

const CardBottom = styled('div', {
  mt: 'auto',
  '> *': {
    mt: '$lg',
  },
  button: {
    '&.sm': {
      minHeight: 22,
    },
    a: {
      color: '#666666',
      '&:hover': {
        color: '#FFFFFF',
      },
    },
    svg: {
      ml: '$xs',
      display: 'none',
      '.fill-social-icon': {
        fill: '#fff',
      },
    },
    '&:hover': {
      svg: {
        display: 'flex',
      },
      a: {
        color: '#FFFFFF',
      },
    },
  },
});

export default BusinessGoalsStyled;
export { CardBottom };
