import { styled } from '@stitches-config/stitches.config';

const SecondaryHeader = styled('div', {
  background: 'linear-gradient(#2d1f42 0%, #322448 100%)',
  pt: '$lg',
  pb: '$lg',
  '.button': {
    '&.theme': {
      '&.md': {
        fontFamily: 'articulat-cf',
        fontWeight: '800',
        minHeight: 51,
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
  '@xl': {
    '.brand': {
      width: 45,
      overflow: 'hidden',
    },
  },
  '@lg': {
    '.brand': {
      width: 'initial',
      overflow: 'hidden',
    },
    '.hide-mobile': {
      display: 'none',
    },
  },
  '@sm': {
    '.brand': {
      width: 45,
      overflow: 'hidden',
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
    color: '#fff',
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
  zIndex: 2,
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
    display: 'flex',
  },
});

const NavListItem = styled('li', {
  marginLeft: '$xl',
  marginRight: '$xl',
  a: {
    letterSpacing: '$sm',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    display: 'flex',
    color: '#fff',
    fontFamily: 'articulat-cf',
    '@lg': {
      py: '$sm',
      fontSize: '$xl',
      color: '#333',
    },
    br: {
      '@lg': {
        display: 'none',
      },
    },
    '&:hover': {
      color: '$primary',
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
