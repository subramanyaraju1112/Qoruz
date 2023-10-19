import { styled } from '@stitches-config/stitches.config';

const HeaderStyled = styled('header', {
  paddingTop: '$md',
  paddingBottom: '$md',
  bgColor: '#170c2a',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  height: 72,
  transition: 'all 0.2s ease-in-out 0s',
  '&.pinned': {
    bgColor: 'transparent',
    background: '#170C2A',
    transition: 'all 0.3s ease-in-out 0s',
    // backdropFilter:'blur(5px)',
    // backdropFilter: 'blur(14.5px)',
    // WebkitBackdropFilter: 'blur(14.5px)',
  },
  '.mobile': {
    display: 'none',
    '@lg': {
      display: 'flex',
    },
  },
  '.desktop': {
    display: 'flex',
    '@lg': {
      display: 'none',
    },
  },
  '> .container': {
    justifyContent: 'space-between',
    '.brand': {
      display: 'flex',
      img: {
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
        maxHeight: 41,
      },
      '@xs': {
        maxWidth: '100px',
      },
    },
  },
  '.button.primary': {
    // marginLeft: 'auto',
  },
  '.undeline-btn': {
    fontSize: '$medium',
    opacity: 0.9,
    fontWeight: '$normal!important',
  },
  '.primary': {
    marginLeft: '$lg',
  },
});

const ToggleMenu = styled('div', {
  cursor: 'pointer',
  display: 'none',
  marginRight: '$lg',
  '@lg': {
    display: 'flex',
  },
});

const NavList = styled('ul', {
  listStyleType: 'none',
  padding: 0,
  marginBottom: 0,
  marginLeft: '$3xl',
  marginRight: '$md',
  display: 'flex',
  gap: '$xl',
  '@lg': {
    margin: 0,
    flexDirection: 'column',
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    background: 'rgba(23, 12, 42, 0.85)',
    // backdropFilter: 'blur(14.5px)',
    // WebkitBackdropFilter: 'blur(14.5px)',
    padding: '$xl',
    display: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    gap: '$sm',
  },
  ' &.open': {
    display: 'flex',
    zIndex: 2,
  },
});

const Options = styled('div', {
  ml: 'auto',
  'a.outline-button.md.postcampaign': {
    minHeight: 42,
  },
});

const NavListItem = styled('li', {
  a: {
    letterSpacing: '$sm',
    color: '#fff',
    opacity: 0.9,
    textDecoration: 'none',
    fontWeight: '$normal',
    display: 'flex',
    '@lg': {
      my: '$sm',
      fontSize: '$xl',
    },
    '&:hover': {
      color: '$primary',
    },
  },
  '@lg': {
    width: '100%',
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
    },
    '.socail__menu': {
      mt: '0px',
      mb: 0,
      bgColor: '#fff',
      // br: 0,
      br: 16,
      minWidth: 220,

      zIndex: 9,
      overflow: 'hidden',

      // minWidth: 145,
      '.socail__menu-list': {
        // bgColor: '#170C2A',
        '.socail__option': {
          p: 0,
          // bgColor: '#170C2A',
          a: {
            color: '#666666',
            letterSpacing: '$sm',
            fontFamily: 'articulat-cf',
            fontWeight: '$bold',
            cursor: 'pointer',
            display: 'flex',
            ai: 'center',
            p: '$md',
          },
          '&.socail__option--is-selected': {
            bgColor: '#170C2A',
            color: '#666666',
            a: {
              bgColor: 'rgba(255, 100, 53, 0.1)',
              color: '#666666',
            },
          },
          '&.socail__option--is-focused': {
            bgColor: 'transparent',

            a: {
              bgColor: 'rgba(255, 100, 53, 0.1)',
              color: '#666666',
            },
          },
        },
      },
    },
    '.socail__control': {
      border: 0,
      minWidth: 120,
      height: 48,
      background: 'transparent',
      bs: 'none',
      br: 0,
      mr: 0,
      pl: '$md',
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
      letterSpacing: '$sm',
      color: '#fff',
      opacity: 0.9,
      textDecoration: 'none',
      fontWeight: '$normal',
      m: 0,
      '@lg': {
        my: '$sm',
        fontSize: '$xl',
      },
      '&:hover': {
        color: '$primary',
        cursor: 'pointer',
      },
    },
  },
  '&.menu-item': {
    letterSpacing: '$sm',
    color: 'rgb(255, 255, 255,0.9)',
    textDecoration: 'none',
    fontWeight: '$normal',
    display: 'flex',
    height: '48px',
    zIndex:3,
    lineHeight: '48px',
    '.sub-menu': {
      display: 'none',
      borderRadius: '20px',
      background: '#fff',
      position: 'absolute',
      top: '46px',
      zIndex: 5,
      overflow: 'hidden',
      border: 'unset',
      width:187,
      '.list-item': {
        a: {
          position: 'relative',
          padding: '13px 16px',
          color: '#666666',
          fontFamily: 'elza-text',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          '&:hover': {
            background: 'rgba(255, 181, 160, 0.2)',
          },
          '&:active': {
            background: '#FF6435',
            color: '#fff !important',
          },
        },
      },
      '@lg': {
        top: 120,
      },
    },
    '&:hover': {
      color: '$primary',
      '.sub-menu': {
        display: 'block',
      },
    },
  },
});

export default HeaderStyled;
export { NavList, NavListItem, Options, ToggleMenu };
