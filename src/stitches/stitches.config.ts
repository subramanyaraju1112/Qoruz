import { createStitches, PropertyValue } from '@stitches/react';

export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    fonts: {
      default: 'elza-text, -apple-system, BlinkMacSystemFont',
    },
    colors: {
      primary: '#FF6435',
      secondary: '#593C2B',
      white: '#ffffff',
      crimson300: '#FF6435',
      crimson200: '#F4A568',
      crimson100: '#FDF1E9;',
      crimsonDark200: '#593C2B',
      crimsonDark100: '#311708',
      tealTing200: '#2ACC83',
      tealTing100: '#96E1CF',
      blueZest200: '#00B2EA',
      blueZest100: '#75D0E4',
      purplePop200: '#8300EA',
      purplePop100: '#BF9ADD',
      text300: '#999999',
      text200: '#555555',
      text100: '#000000',
      purple: '#8D4AFF',
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '4rem',
      '5xl': '6rem',
      '6xl': '8rem',
      '8xl': '10rem',
    },
    sizes: {
      xs: '14px',
      sm: '16px',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem',
      '2xl': '1.875rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '5rem',
      '10xl': '6rem',
      half: '50%',
      full: '100%',
      vw: '100vw',
      vh: '100vh',
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '17px',
      xl: '18px',
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      h5: '18px',
      h6: '2rem',
    },
    lineHeights: {
      xs: '1',
      sm: '1.5',
    },
    letterSpacings: {
      xs: '-0.04em',
      sm: '-0.02em',
      md: '0.08em',
    },
    radii: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '32px',
      round: '50%',
      pill: '9999px',
    },
    shadows: {
      xs: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      sm: '0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      md: ' 6.83739px 5.12804px 9.40141px 3.41869px rgba(0, 0, 0, 0.05), 0px 38px 39.315px -13px rgba(0, 0, 0, 0.2)',
      lg: '0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)',
      xl: '6.83739px 5.12804px 9.40141px 3.41869px rgba(0, 0, 0, 0.05), 10px 22px 27px 5px rgba(0, 0, 0, 0.5)',
    },
    transitions: {
      default: 'all 0.15s ease-out 0s',
    },
    zIndices: {
      1: '9',
      2: '99',
      3: '999',
      max: '9999',
    },
    borderWidths: {},
    borderStyles: {},
  },
  media: {
    '2xl': '(max-width: 1599px)',
    xl: '(max-width: 1199px)',
    lg: '(max-width: 991px)',
    md: '(max-width: 767px)',
    sm: '(max-width: 575px)',
    xs: '(max-width: 480px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    bgColor: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});
