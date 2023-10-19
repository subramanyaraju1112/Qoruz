import { styled } from '@stitches-config/stitches.config';

const FooterStyled = styled('footer', {
  backgroundColor: '#170c2a',
  paddingTop: '$5xl',
  paddingBottom: '$5xl',
  h5: {
    color: '#FF6435',
    fontWeight: 800,
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: 0,
  },
  '.title': {
    mt: '$3xl',
    mb: '$xl',
  },
  a: {
    '@sm': {
      maxWidth: 'none',
    },
  },
  '.details': {
    fontWeight: '$normal',
    fontSize: '$md',
    letterSpacing: '$sm',
    color: '#FFF4EE',
  },
  '.container': {
    '@lg': {
      flexDirection: 'column',
    },
  },
  // '&.footer-sticky': {
  //   '@lg': {
  //     pb: 'calc($lg + 72px)',
  //   },
  // },
  '@lg': {
    paddingTop: '$3xl',
    paddingBottom: '$3xl',
  },
});

const FooterNav = styled('div', {
  maxWidth: 'calc(100% - 340px)',
  width: '$full',
  gap: '$4xl $2xl',
  '.footer-navigation': {
    maxWidth: 'calc((100% / 3) - $sm)',
    width: '100%',
    '@xl': {
      mt: '$2xl',
    },
    '@lg': {
      maxWidth: '$full',
    },
    '@md': {
      maxWidth: '$full',
    },
  },
  '@lg': {
    maxWidth: '$full',
    gap: 0,
  },
});

const SocialList = styled('ul', {
  marginTop: '$2xl',
});

const SocialListItem = styled('li', {
  marginRight: '$lg',
  a: {
    display: 'flex',
    '&:hover': {
      '.fill-social-icon': {
        fill: 'white',
      },
      '.fill-stroke-icon': {
        stroke: 'white',
      },
    },
    svg: {
      width: 16,
      height: 16,
    },
  },
});

const FooterList = styled('ul', {
  marginTop: '$lg',
  display: 'flex',
  '@lg': {
    display: 'none',
    marginTop: '$sm',
  },
  '&.open': {
    '@lg': {
      display: 'flex',
    },
  },
});

const FooterInner = styled('div', {
  '.mobile': {
    display: 'none',
    '@lg': {
      display: 'flex',
    },
  },
  '.desktop': {
    '@lg': {
      display: 'none',
    },
  },
  '&.for-influencers': {
    mt: '$2xl',
  },
});

const FooterListItem = styled('li', {
  marginTop: '$sm',
  a: {
    letterSpacing: '$sm',
    color: '#FFF4EE',
    opacity: 0.8,
    textDecoration: 'none',
    fontWeight: '$normal',
    '&:hover': {
      opacity: 1,
      // textDecoration: 'underline dotted white',
    },
    '&.button':{
      opacity: 1,
    },
  },
});

const FooterInfo = styled('div', {
  maxWidth: 340,
  paddingRight: 60,
  width: '100%',
  '.details': {
    marginTop: '$2xl',
    opacity: 0.6,
  },
  '& + .footer-navigation': {
    marginLeft: 'auto',
    '@lg': {
      marginLeft: 0,
    },
  },
  a: {
    display: 'flex',
    img: {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
      maxHeight: 50,
      '@sm': {
        height: 'auto',
        maxWidth: 94,
      },
    },
  },
  '@lg': {
    maxWidth: '100%',
    paddingRight: 0,
  },
});

const FooterNavigation = styled('div', {
  maxWidth: 160,
  width: '100%',
  h5: {
    img: {
      marginLeft: '$sm',
      display: 'none',
      '@lg': {
        display: 'flex',
      },
    },
    '@lg': {
      cursor: 'pointer',
      paddingTop: '$md',
      paddingBottom: '$md',
      borderBottom: '1px solid rgb(197 162 255 / 36%)',
    },
    '&.open': {
      img: {
        '@lg': {
          transform: 'scaleY(-1)',
        },
      },
    },
    '&.terms': {
      letterSpacing: '$sm',
      color: '#FFF4EE',
      opacity: 0.8,
      textDecoration: 'none',
      fontWeight: '$normal',
      fontFamily: 'elza-text',
      fontSize: 'initial',
      cursor: 'pointer',
      '&:hover': {
        opacity: 1,
        // textDecoration: 'underline dotted white',
      },
      img: {
        display: 'flex',
      },
      '& + ul': {
        mt: 0,
        display: 'none',
        marginLeft: '$xl',
      },
      '&.open': {
        img: {
          transform: 'scaleY(-1)',
        },
      },
      '&.open + ul': {
        display: 'flex',
      },
    },
  },
  '@xl': {
    maxWidth: 190,
  },
  '@lg': {
    marginLeft: 0,
    maxWidth: '100%',
  },
  '&:nth-last-of-type(2)': {
    // maxWidth: 240,
    '@lg': {
      maxWidth: '100%',
    },
  },
});

const CopyRights = styled('div', {
  width: '100%',
  marginTop: '$3xl',
  span: {
    fontWeight: '$medium',
    fontSize: '$xs',
    color: '#FFF4EE',
    opacity: 0.5,
  },
});

const BottomSticky = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  bgColor: '#170c2a',
  px: '$2xl',
  py: '$xl',
  zIndex: 9,
  display: 'none',
  justifyContent: 'space-around',
  flexDirection: 'row',
  gap: '$lg',
  transform: 'translateY(0)',
  '&.hide': {
    transform: 'translateY(100%)',
    // display: 'none',
  },
  'a.primary': {
    '&.md': {
      width: '100%',
      '@sm': {
        width: 'auto',
        gap: '$sm',
        fontSize: '$md',
        svg: {
          ml: 0,
        },
      },
      '@xs': {
        width: 'auto',
        gap: '$xs',
        fontSize: '$sm',
        svg: {
          ml: 0,
        },
      },
    },
  },
  '@lg': {
    display: 'flex',
  },
  '@xs': {
    jc: 'center',
    px: '$sm',
  },
});

export default FooterStyled;
export {
  BottomSticky,
  CopyRights,
  FooterInfo,
  FooterInner,
  FooterList,
  FooterListItem,
  FooterNav,
  FooterNavigation,
  SocialList,
  SocialListItem,
};
