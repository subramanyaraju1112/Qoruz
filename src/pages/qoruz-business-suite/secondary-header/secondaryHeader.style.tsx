import { styled } from '@stitches-config/stitches.config';

const SecondaryHeader = styled('div', {
  bgColor: '#24193A',
  pt: '$lg',
  pb: '$lg',
  display: 'flex',
  height: 81,
  '&.pinned': {
    bgColor: 'transparent',
    background: 'rgba(23, 12, 42)',
    transition: 'all 0.3s ease-in-out 0s',
    // backdropFilter: 'blur(14.5px)',
    // WebkitBackdropFilter: 'blur(14.5px)',
  },
  '.secondary-header-btn': {
    display: 'none!important',
    lineHeight: '26px',
  },
  '.button': {
    '&.theme': {
      '&.md': {
        fontFamily: 'articulat-cf',
        fontWeight: '600',
        minHeight: 39,
        px: '$2xl',
        boxShadow: 'none',
        '@sm': {
          fontSize: '$sm',
          px: '$lg',
        },
      },
    },
    '@lg': {
      ml: 'auto',
    },
  },
  '> .container': {
    '@lg': {
      justifyContent: 'flex-start',
    },
  },
  '.brand': {
    display: 'flex',
    img: {
      //for figma height, change to: height: 41,
      height: 57,
      width: 200,
    },
  },
  '@xl': {
    '.brand': {
      // width: 45,
      overflow: 'hidden',
    },
  },
  '@lg': {
    '.brand': {
      width: 'initial',
      overflow: 'hidden',
    },
  },
  '@sm': {
    '.brand': {
      // width: 45,
      overflow: 'hidden',
    },
  },
  '&.fixed-secondary-header': {
    '.post-campaign': {
      display: 'unset !important',
      '@lg': {
        display: 'none !important',
      },
    },
  },
  '.post-campaign': {
    display: 'none !important',
    lineHeight: '26px',
  },
  '.paid-collab': {
    height: 57,
    '.qoruz-paid-logo': {
      height: 57,
      width: 226,
      // objectFit: 'cover',
    },
  },
});

const ToggleMenu = styled('div', {
  cursor: 'pointer',
  display: 'none',
  marginRight: '$lg',
  img: {
    filter: 'invert(0)',
  },
  '@lg': {
    display: 'flex',
  },
});

const List = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  marginBottom: 0,
  marginLeft: '$3xl',
  gap: '$xl',
  '@sm': {
    marginLeft: 'auto',
    marginRight: 0,
    gap: '$md',
  },
});

const ListItem = styled('li', {
  a: {
    letterSpacing: '$sm',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    color: '#000000',
    fontFamily: 'articulat-cf',
    '@sm': {
      fontSize: '$sm',
    },
    '&:hover': {
      opacity: 0.4,
    },
  },
});

const NavList = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  marginBottom: 0,
  mx: '$md',
  display: 'flex',
  gap: '$xl',
  '@xl': {
    gap: '$md',
  },
  '@lg': {
    margin: '$lg 0 0',
    flexDirection: 'column',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    bgColor: '#fff1dc',
    paddingTop: '$xl',
    paddingBottom: '$xl',
    display: 'none',
    gap: 0,
    px: 15,
  },
  ' &.open': {
    // position: 'absolute',
    zIndex: 2,
    display: 'flex',
    height: '200px',
    backgroundColor: '#24193A',
    color: '#FFFFFF',
  },
});

const NavListItem = styled('li', {
  marginLeft: '$xl',
  marginRight: '$xl',
  a: {
    letterSpacing: '$sm',
    textDecoration: 'none',
    fontWeight: '400',
    display: 'flex',
    color: '#ffffff',
    opacity: 0.8,
    fontFamily: 'elza-text',
    '@lg': {
      py: '$sm',
      fontSize: '$xl',
    },
    '&:hover': {
      opacity: 1,
      color: '#ffffff',
    },
  },
  '@lg': {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
});
export default SecondaryHeader;
export { List, ListItem, NavList, NavListItem, ToggleMenu };
