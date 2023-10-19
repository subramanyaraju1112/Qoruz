import { styled } from '@stitches-config/stitches.config';

const MoreEffectiveStyled = styled('section', {
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/powerful-tools/bg-powerfull-left.svg), url(https://d1ks0pavw8unez.cloudfront.net/public/images/powerful-tools/bg-powerfull-right.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top -12rem, right center',
  backgroundSize: '75%, 25%',
  pt: '$3xl',
  pb: '$5xl',
  h2: {
    fontSize: '$h2',
    color: '#000',
    fontWeight: '$bold',
    lh: '$xs',
    mt: '$lg',
    span: {
      color: '#666666',
      fontSize: '$h3',
      fontWeight: '$medium',
      lh: '$xs',
      '@md': {
        fontSize: '$h4',
      },
    },
    '@md': {
      fontSize: '$h3',
    },
  },
  '.more-effective-icon': {
    '@md': {
      display: 'none',
    },
  },
  '@lg': {
    backgroundSize: '10%, 15%',
    pt: 0,
    pb: '$3xl',
  },
});

const MoreEffectiveBlock = styled('div', {
  display: 'flex',
  '&:not(:first-child)': {
    mt: '3rem',
    '@lg': {
      mt: '$3xl',
    },
  },
  '.more-effective-block-icon': {
    mt: 10,
    '@md': {
      size: 48,
    },
  },
  '&:first-child': {
    '@lg': {
      mt: '$3xl',
    },
  },
});

const MoreEffectiveIntro = styled('div', {
  // maxWidth: 430,
  width: '$full',
  mr: 'auto',
  img: {
    width: '$full',
    height: '$full',
    // position: 'relative !important',
  },
  // h2: {
  //   color: '$primary',
  // },
});

const MoreEffectiveInfo = styled('div', {
  pl: '$xl',
  small: {
    color: '$primary',
    fontWeight: '$medium',
    fontSize: '$xl',
    letterSpacing: '$xs',
  },
  h3: {
    fontSize: '$h3',
    letterSpacing: '$sm',
    fontWeight: '$bold',
    '@md': {
      fontSize: '$h4',
    },
  },
  '.details': {
    fontSize: 20,
    color: '#666666',
    mt: '$sm',
  },
});

export default MoreEffectiveStyled;
export { MoreEffectiveBlock, MoreEffectiveInfo, MoreEffectiveIntro };
