import { styled } from '@stitches-config/stitches.config';

const HeroContainer = styled('section', {
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  pt: '40px',
  pr: '32px',
  mt: '-1px',
  '@md': {
    width: '$full',
    background:
      'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
    pr: 0,
    backgroundPosition: 'top',
  },
});

const HeroBackground = styled('div', {
  width: '100%',
  height: '385px',
  display: 'flex',
  background: 'url(../images/contact-us/figure.png)',
  backgroundSize: 'contain',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'center',
  backgroundPosition: 'bottom right',
  '@md': {
    backgroundSize: '73%',
    backgroundPosition: 'bottom center',
  },
});

const Content = styled('div', {
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  ai: 'center',
  gap: '16px',
  pr: '8%',
  '@md': {
    display: 'flex',
    pr: '0%',
    mt: '2px',
    // mr: '29px',
    gap: '8px',
  },
});

const HeadLine = styled('div', {
  '.headline': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    '@sm': {
      fontSize: '24px',
    },
    '@md': {
      fontSize: '24px',
    },
  },
});

const TagLine = styled('div', {
  '.tagline': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '180%',
    color: '#FFFFFF',
    '@sm': {
      fontSize: '12px',
    },
    '@md': {
      fontSize: '12px',
    },
  },
});

const SocialMedia = styled('div', {
  display: 'flex',
  gap: '48px',
  '.instagram': {
    '@sm': {
      height: '12px',
      width: '12px',
    },
    '@md': {
      height: 12,
      width: 12,
    },
  },
  '.social-icon': {
    '&:hover': {
      '.outline-social-icon': {
        fill: '$primary',
        transition: '0.5s',
      },
    },
  },
});

const HeroImage = styled('div', {});

export default HeroContainer;
export { Content, HeadLine, HeroBackground, HeroImage, SocialMedia, TagLine };
