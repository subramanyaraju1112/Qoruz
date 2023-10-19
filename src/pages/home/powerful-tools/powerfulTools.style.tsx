import { styled } from '@stitches-config/stitches.config';

const PowerfulToolsStyled = styled('section', {
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/powerful-tools/bg-powerfull-left.svg), url(https://d1ks0pavw8unez.cloudfront.net/public/images/powerful-tools/bg-powerfull-right.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top -12rem, right center',
  backgroundSize: '75%, 25%',
  pt: '$5xl',
  pb: '$5xl',
  overflow: 'hidden',
  h2: {
    fontSize: '$h2',
    color: '$primary',
    fontWeight: '$extrabold',
    lh: '$xs',
    maxWidth: 440,
    '@lg': {
      maxWidth: '$full',
    },
    '@md': {
      ta: 'center',
      fontSize: '$h3',
    },
  },
  '.powerful-tool-left': {
    '@lg': {
      display: 'flex',
      ai: 'center',
      jc: 'center',
      fd: 'column',
      ta: 'center',
    },
  },
  '@lg': {
    pt: '$3xl',
    pb: 0,
  },
});

const TabContent = styled('div', {
  display: 'flex',
  ai: 'flex-end',
  height: '100%',
  width: '100%',
  h4: {
    fontSize: '1.75rem',
    fontFamily: 'elza-text',
    fontWeight: '$extrabold',
    position: 'relative',
    '&:before': {
      content: '',
      position: 'absolute',
      bgColor: '$primary',
      br: 3,
      left: '-$lg',
      width: 4,
      top: 7,
      bottom: 7,
      '@lg': {
        display: 'none',
      },
    },
  },
  '.details': {
    mt: '$md',
    color: '#666666',
    fontSize: 18,
  },
});

const Parent = styled('div', {
  display: 'flex',
  fd: 'column',
  width: '100%',
  '&.one': {
    figure: {
      '.small': {
        '&.left': {
          left: -90,
          bottom: 40,
          '@sm': {
            left: '10%',
            bottom: '-10%',
          },
        },
        '&.right': {
          right: -57,
          top: 100,
          '@sm': {
            right: '10%',
            bottom: '-10%',
            top: 'initial',
          },
        },
      },
    },
  },
  '&.two': {
    figure: {
      '.small': {
        '&.left': {
          left: -62,
          top: 110,
          '@sm': {
            left: '10%',
            bottom: '-10%',
            top: 'initial',
          },
        },
        '&.right': {
          right: -57,
          bottom: 69,
          '@sm': {
            right: '10%',
            bottom: '-10%',
          },
        },
      },
    },
  },
  '&.three': {
    figure: {
      '.small': {
        '&.left': {
          left: -80,
          bottom: 57,
          '@sm': {
            left: '10%',
            bottom: '-10%',
          },
        },
        '&.right': {
          right: -80,
          top: -35,
          '@sm': {
            right: '10%',
            bottom: '-10%',
            top: 'initial',
          },
        },
      },
    },
  },
  '&.four': {
    figure: {
      '.small': {
        '&.left': {
          left: -97,
          top: 180,
          '@sm': {
            left: '10%',
            bottom: '-10%',
            top: 'initial',
          },
        },
        '&.right': {
          right: -80,
          bottom: 160,
          '@sm': {
            right: '10%',
            bottom: '-10%',
          },
        },
      },
    },
  },
  '.content': {
    display: 'none',
    '@lg': {
      display: 'flex',
    },
  },
  '@lg': {
    fd: 'column-reverse',
  },
});

const Figure = styled('figure', {
  // img: {
  //   position: 'relative !important',
  // },
  position: 'relative',
  // maxWidth: '80%',
  width: '$full',
  ml: 'auto',
  mr: 'auto',
  '.main': {
    width: '$full',
    height: 'auto',
    background:
      'linear-gradient(to bottom right, rgba(255, 198, 173, 0.15), white)',
    br: '60px',
  },
  '.small': {
    position: 'absolute',
    '@sm': {
      maxWidth: '40%',
    },
  },
  '@lg': {
    mt: '$2xl',
  },
  '@sm': {
    maxWidth: '100%',
  },
  '*': {
    transition: 'all 0.5s ease-in-out',
  },
});

const Content = styled('div', {
  pl: '$lg',
  '@lg': {
    pl: 0,
    mt: '$2xl',
    display: 'flex',
    ai: 'center',
    jc: 'center',
    fd: 'column',
    ta: 'center',
  },
  '@sm': {
    mt: '$3xl',
  },
});

const FigureWrapper = styled('div', {
  top: '100px',
  position: 'relative',
  '@lg': {
    mt: '$3xl',
    top: 0,
  },
});

const TabList = styled('ul', {
  mt: '$xl',
  fd: 'column',
  '.content': {
    h4: {
      // mt: 24,
    },
    '.details': {
      fontSize: 18,
      color: '#666666',
    },
    '@lg': {
      display: 'none',
    },
  },
  '@lg': {
    fd: 'row',
    mt: 0,
    width: '$full',
    jc: 'center',
    gap: '$2xl',
  },
});

const TabListItemTitle = styled('div', {});

const TabListItem = styled('li', {
  mt: '$3xl',
  width: 'max-content',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  minHeight: 64,
  img: {
    position: 'relative !important',
    mr: '$md',
    '@lg': {
      mr: 0,
      filter: 'grayscale(1)',
    },
  },
  h4: {
    fontSize: '$h4',
    fontWeight: '$medium',
    position: 'relative',
    img: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '$full',
      objectFit: 'cover',
      display: 'none',
    },
    '@lg': {
      display: 'none',
    },
  },
  '&.active': {
    h4: {
      img: {
        display: 'flex',
      },
    },
    '@lg': {
      img: {
        filter: 'initial',
      },
    },
  },
});

const CounterWrapper = styled('section', {
  h2: {
    fontFamily: 'elza-text',
    span: {
      color: '#666666',
      lh: '$xs',
      fontSize: '$h4',
      fontWeight: '$medium',
      '@lg': {
        fontSize: '$md',
      },
    },
    '@lg': {
      fontSize: '$h4',
    },
  },
});

const CounterList = styled('ul', {
  bgColor: '$white',
  bs: '$xs',
  br: '0px 0px 60px 60px',
  p: '$2xl',
});

const CounterListItem = styled('li', {
  '@sm': {
    '&:last-child': {
      display: 'none',
    },
  },
});

const IconHolder = styled('figure', {
  bgColor: '$purple',
  bs: '0px 18px 16px -3px rgba(0, 0, 0, 0.1)',
  size: 44,
  br: '$round',
  overflow: 'hidden',
  mt: 14,
  mr: '$xl',
  fs: 0,
  img: {
    position: 'relative !important',
    width: '$full',
    height: 'auto',
  },
  '@lg': {
    size: 32,
    mr: '$md',
    mt: '$xs',
  },
});

const PartnersWraper = styled('div', {
  mt: '-88px',
});

const PartnersList = styled('ul', {
  width: '100%',
  bgColor: '#170C2A',
  bs: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  br: '60px 60px 0px 0px',
  p: '$2xl',
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
  '@sm': {},
});

const PartnersListItem = styled('li', {
  img: {
    position: 'relative !important',
  },
  '@lg': {
    '&:first-child, &:last-child': {
      display: 'none',
    },
  },
  '@md': {
    '&:nth-last-child(2), &:nth-last-child(3)': {
      display: 'none',
    },
  },
  '@sm': {
    '&:nth-last-child(4)': {
      display: 'none',
    },
  },
});

export default PowerfulToolsStyled;
export {
  Content,
  CounterList,
  CounterListItem,
  CounterWrapper,
  Figure,
  FigureWrapper,
  IconHolder,
  Parent,
  PartnersList,
  PartnersListItem,
  PartnersWraper,
  TabContent,
  TabList,
  TabListItem,
  TabListItemTitle,
};
