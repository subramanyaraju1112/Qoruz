import { styled } from '@stitches-config/stitches.config';

const QoruzMakesStyled = styled('section', {
  pt: '$5xl',
  pb: '$4xl',
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
    pb: '$2xl',
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
  position: 'relative',
  // maxWidth: '80%',
  width: '$full',
  ml: 'auto',
  mr: 'auto',
  textAlign: 'right',
  '.main': {
    width: '80%',
    height: 'auto',
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
  '.details': {
    height: 0,
    visibility: 'hidden',
    opacity: 0,
    overflow: 'hidden',
    transition: 'visibility 0s, height 0.5s, opacity 0.5s linear',
    '&.active': {
      height: 150,
      visibility: 'visible',
      opacity: 1,
      overflow: 'auto',
    },
    '&.active::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const FigureWrapper = styled('div', {
  position: 'relative',
  '@lg': {
    mt: '$3xl',
  },
});

const TabList = styled('ul', {
  fd: 'column',
  '.content': {
    transition: 'visibility 0.3s linear,opacity 0.3s linear !important',
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

const Title = styled('div', {
  h2: {
    fontSize: '$h2',
    fontWeight: '$bold',
    lh: '$xs',
    '@md': {
      fontSize: '$h3',
    },
  },
  span: {
    lh: '$xs',
    fontSize: '$h3',
    color: '#666666',
    fontWeight: '$medium',
    '@md': {
      fontSize: '$h4',
    },
  },
});

const Line = styled('div', {
  position: 'relative',
  pb: '$md',
  img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const TabListItemTitle = styled('div', {});

const QoruzMakesIntro = styled('div', {
  '.description': {
    fontFamily: 'elza-text',
    fontSize: 20,
    lh: 1.5,
    color: '#666666',
  },
});

const TabListItem = styled('li', {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  py: '$lg',
  position: 'relative',
  '&:first-child': {
    '&:before': {
      border: '1px dashed #E2E2E2',
    },
  },
  '&:last-child': {
    '&:before': {
      border: 'none',
    },
  },
  '&:before': {
    content: '',
    position: 'absolute',
    border: '1px dashed #E2E2E2',
    height: '100%',
    top: 24,
    left: 12,
  },
  img: {
    mr: '$md',
    '@lg': {
      mr: 0,
      filter: 'grayscale(1)',
    },
  },
  '.details': {
    mt: '$lg',
  },
  h4: {
    fontSize: '$h4',
    fontWeight: '$medium',
    position: 'relative',
    color: '#666666',
    '@lg': {
      display: 'none',
    },
  },
  '&.active': {
    h4: {
      color: '#000000',
    },
    '.indicator': {
      borderColor: '$primary',
      '&:before': {
        content: '',
        bgColor: '$primary',
        size: 12,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        br: '$round',
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

const QoruzMakesWrapper = styled('div', {
  display: 'flex',
  fd: 'column',
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
    width: '$full',
    height: 'auto',
  },
  '@lg': {
    size: 32,
    mr: '$md',
    mt: '$xs',
  },
});

const Indicator = styled('div', {
  size: '$lg',
  bgColor: '#FFFFFF',
  border: '2px dashed #E2E2E2',
  br: '$round',
  fs: 0,
  mt: '$sm',
  position: 'relative',
});

const PartnersWraper = styled('div', {
  mt: '$3xl',
});

const PartnersList = styled('ul', {
  width: '100%',
  bgColor: '#24163B',
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

//mobile components:

const FigureM = styled('figure', {
  position: 'relative',
  // maxWidth: '80%',
  width: '$full',
  ml: 'auto',
  mr: 'auto',
  minHeight: 300,
  '.main': {
    width: '$full',
    height: 'auto',
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

const ContentM = styled('div', {
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
  '.details': {
    height: 0,
    visibility: 'hidden',
    opacity: 0,
    overflow: 'hidden',
    transition: 'visibility 0s, height 0.5s, opacity 0.5s linear',
    '&.active': {
      height: 600,
      visibility: 'visible',
      opacity: 1,
      overflow: 'auto',
      '@lg': {
        height: 'auto',
      }
    },
  },
});

const TabListM = styled('ul', {
  fd: 'column',
  '.content': {
    textAlign: 'left',
    ml: '$2xl',
    h4: {
      // mt: 24,
    },
    '.details': {
      fontSize: 18,
      color: '#666666',
    },
    '@lg': {
      display: 'unset',
      mt: '-$2xl',
      pl: 18,
    },
  },
  // '@lg': {
  //   fd: 'column',
  //   mt: 0,
  //   width: '40% ',
  //   jc: 'center',
  //   gap: '$2xl',
  // },
});

const TabListItemM = styled('li', {
  cursor: 'pointer',
  // width: '100vw',
  WebkitTapHighlightColor: 'transparent',
  py: '$lg',
  position: 'relative',
  '&:first-child': {
    '&:before': {
      border: '1px dashed #E2E2E2',
    },
  },
  '&:last-child': {
    '&:before': {
      border: 'none',
    },
  },
  '&:before': {
    content: '',
    position: 'absolute',
    border: '1px dashed #E2E2E2',
    height: '100%',
    top: 24,
    left: 12,
    '@lg': {
      content: 'unset',
    },
  },
  img: {
    mr: '$md',
    '@lg': {
      mr: 0,
      filter: 'grayscale(1)',
    },
  },
  '.details': {
    mt: '$lg',
  },
  h4: {
    fontSize: '$h4',
    fontWeight: '$medium',
    position: 'relative',
    color: '#666666',
    '@lg': {
      display: 'none',
    },
  },
  '&.mobile': {
    h4: {
      '@lg': {
        display: 'unset',
      },
    },
  },
  '&.active': {
    h4: {
      color: '#000000',
    },
    '.indicator': {
      borderColor: '$primary',
      '&:before': {
        content: '',
        bgColor: '$primary',
        size: 12,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        br: '$round',
      },
    },
    '@lg': {
      img: {
        filter: 'initial',
      },
    },
    '.figure': {
      display: 'block',
    },
    transition: 'visibility 0s, opacity 0.5s linear',
  },
  '@lg': {
    flexDirection: 'column',
  },
  '.figure': {
    display: 'none',
  },
});

const IndicatorM = styled('div', {
  size: '$lg',
  bgColor: '#FFFFFF',
  border: '2px dashed #E2E2E2',
  br: '$round',
  fs: 0,
  mt: '$sm',
  position: 'relative',
  top: 8,
});

export default QoruzMakesStyled;
export {
  Content,
  ContentM,
  CounterList,
  CounterListItem,
  CounterWrapper,
  Figure,
  FigureM,
  FigureWrapper,
  IconHolder,
  Indicator,
  IndicatorM,
  Line,
  Parent,
  PartnersList,
  PartnersListItem,
  PartnersWraper,
  QoruzMakesIntro,
  QoruzMakesWrapper,
  TabContent,
  TabList,
  TabListItem,
  TabListItemM,
  TabListItemTitle,
  TabListM,
  Title,
};
