import { globalCss } from '@stitches/react';
export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    transition: 'all 0.15s ease-out 0s',
    fontFamily: "'elza-text', -apple-system, BlinkMacSystemFont",
    WebkitFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    padding: '0',
    margin: '0',
  },
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
  '.headroom-wrapper': {
    transition: 'none',
    zIndex: 9,
    '*': {
      transition: 'none',
      scrollBehavior: 'smooth',
    },
    '& + main': {
      position: 'relative',
      zIndex: 0,
    }
  },
  a: {
    '&.outline-button': {
      borderRadius: 50,
      fontWeight: '$semibold',
      letterSpacing: '$sm',
      backgroundColor: 'transparent',
      padding: '7px 18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'max-content',
      textDecoration: 'none',
      '> svg, > img': {
        marginLeft: '$sm',
        marginTop: 2,
      },
      '&.sm': {
        minHeight: 40,
        fontSize: '$sm',
      },
      '&.md': {
        minHeight: 48,
        fontSize: '$md',
      },
      '&.lg': {
        minHeight: 48,
        fontSize: 20,
      },
      '&.primary': {
        color: '$white',
        border: '2px solid $white',
        '&:hover': {
          color: '#FF6435',
          backgroundColor: '$white',
        },
      },
      '&.secondary': {
        color: '#666666',
        border: '2px solid #CCCCCC',
        '&:hover': {
          borderColor: '$primary',
          backgroundColor: '$primary',
          color: '$white',
        },
      },
    },
    '&.button': {
      padding: '7px 18px',
      borderRadius: 50,
      fontWeight: '$semibold',
      letterSpacing: '$sm',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'max-content',
      minHeight: 48,
      boxShadow: '$lg',
      border: 0,
      textDecoration: 'none',
      '> svg, > img': {
        marginLeft: '$sm',
        marginTop: 2,
      },
      '&.sm': {
        minHeight: 40,
        fontSize: '$sm',
      },
      '&.md': {
        minHeight: 48,
        fontSize: '$md',
      },
      '&.lg': {
        minHeight: 48,
        fontSize: 20,
      },
      '&.primary': {
        color: '$primary',
        backgroundColor: '$white',
        '&:hover': {
          color: '$white',
          backgroundColor: '$primary',
          '.fill-social-icon': {
            fill: '$white',
          },
        },
      },
      '&.theme': {
        backgroundColor: '$primary',
        color: 'white',
        svg : {
          path: {
            fill: 'white',
          }
        }
      },
    },
  },
  '.text-center': {
    textAlign: 'center',
  },
  '.flex': {
    display: 'flex',
  },
  '.inline-flex': {
    display: 'inline-flex',
  },
  '.flex-center': {
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.flex-column': {
    flexDirection: 'column',
  },
  '.flex-row': {
    flexDirection: 'row',
  },
  '.flex-wrap': {
    flexWrap: 'wrap',
  },
  '.flex-nowrap': {
    flexWrap: 'nowrap',
  },
  '.flex-1': {
    flex: '1',
  },
  '.flex-auto': {
    flex: '1 1 auto',
  },
  '.flex-initial': {
    flex: '0 1 auto',
  },
  '.flex-none': {
    flex: 'none',
  },
  '.items-start': {
    alignItems: 'flex-start',
  },
  '.items-end': {
    alignItems: 'flex-end',
  },
  '.items-center': {
    alignItems: 'center',
  },
  '.items-baseline': {
    alignItems: 'baseline',
  },
  '.items-stretch': {
    alignItems: 'stretch',
  },
  '.self-auto': {
    alignSelf: 'auto',
  },
  '.self-start': {
    alignSelf: 'flex-start',
  },
  '.self-end': {
    alignSelf: 'flex-end',
  },
  '.self-center': {
    alignSelf: 'center',
  },
  '.self-stretch': {
    alignSelf: 'stretch',
  },
  '.justify-start': {
    justifyContent: 'flex-start',
  },
  '.justify-end': {
    justifyContent: 'flex-end',
  },
  '.justify-center': {
    justifyContent: 'center',
  },
  '.justify-between': {
    justifyContent: 'space-between',
  },
  '.justify-around': {
    justifyContent: 'space-around',
  },
  '.content-center': {
    alignContent: 'center',
  },
  '.content-start': {
    alignContent: 'flex-start',
  },
  '.content-end': {
    alignContent: 'flex-end',
  },
  '.content-between': {
    alignContent: 'space-between',
  },
  '.content-around': {
    alignContent: 'space-around',
  },
  '.content-stretch': {
    alignContent: 'stretch',
  },
  '.relative': {
    position: 'relative',
  },
  '.absolute': {
    position: 'absolute',
  },
  '.fixed': {
    position: 'fixed',
  },
  '.grid': {
    display: 'grid',
  },
  html: {
    '@lg': {
      fontSize: '90%',
    },
  },
});
