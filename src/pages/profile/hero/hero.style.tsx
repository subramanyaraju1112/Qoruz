import { styled } from '@stitches-config/stitches.config';

const ProfileHeroStyled = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  pt: '$3xl',
  mt: '-2px',
  '.first': {
    '@lg': {
      display: 'flex',
      fd: 'column',
    },
  },
  '@lg': {
    overflowX: 'clip',
  },
});

const ProfileHeroIntro = styled('div', {
  minHeight: 160,
  py: '$2xl',
  '@md':{
    minHeight:'unset',
  }
});

export default ProfileHeroStyled;
export { ProfileHeroIntro };
