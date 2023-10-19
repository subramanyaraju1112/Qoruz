import { styled } from '@stitches-config/stitches.config';

const HeroStyled = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  pt: '3rem',
  pb: '3rem',
  mt: -2,
  h1: {
    fontWeight: 700,
    fontSize: 48,
    lineHeight: '44px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    '@lg': {
      fontSize: 28,
      lh: 1.2,
      px: 24,
    },
  },
});

export default HeroStyled;
