import { styled } from '@stitches-config/stitches.config';

const IntroCollabrateNow = styled('div', {
  gap: '$xl',
  maxWidth: 372,
  width: '$full',
});

const CollabrateNowStyled = styled('div', {
  backgroundImage: `url(https://d1ks0pavw8unez.cloudfront.net/public/images/profile/collabrate-now-2.svg), url(https://d1ks0pavw8unez.cloudfront.net/public/images/profile/collabrate-now-1.svg)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  jc: 'space-between',
  br: '$lg',
  py: '$3xl',
  px: '$3xl',
  gap: '15px',
  overflow: 'hidden',
  h2: {
    color: '$white',
    lh: 1,
    fontWeight: '$semibold',
    fontSize: '$h3',
    '@lg': {
      textAlign: 'center',
    },
  },
  '.collab-button': {
    background: 'rgba(21, 60, 118, 0.73)',
    boxShadow:
      ' 0px 23.3333px 28px -8.16667px rgba(0, 0, 0, 0.3), 0px 1.16667px 3.5px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(5px)',
    br: 58,
    px: '$2xl',
    py: '$lg',
    color: '$white',
    fontFamily: 'articulat-cf',
    fontWeight: '$bold',
    fontSize: '$h4 !important',
    letterSpacing: '$sm',
    gap: '$sm',
    as: 'flex-start',
    '@md': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    svg: {
      path: {
        fill: '#fff',
      },
    },
    '&:hover': {
      background: 'rgba(21, 60, 118, 0.6)',
    },
  },
  '.pic-influencer': {
    width: 149,
    height: 149,
    '.influencer-pic': {
      width: 149,
      height: 149,
      objectFit: 'cover',
      border: '4px solid #FFF',
      br: '50%',
    },
  },
  '@md': {
    '.collaborate-intro': {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    },
  },
  '.collaborate-btn': {
    color: 'white',
    backgroundColor: 'rgba(21, 60, 118, 0.73)',
    svg: {
      path: {
        fill: '#fff',
      },
    },
  },
});

export default CollabrateNowStyled;
export { IntroCollabrateNow };
