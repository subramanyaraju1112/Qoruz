import { styled } from '@stitches-config/stitches.config';

const CampaignTypesStyled = styled('section', {
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/paid-collaboration/campaing-type.svg)',
  backgroundPosition: '-320px 30px',
  backgroundRepeat: 'no-repeat',
  '.campaing-row': {
    alignItems: 'center !important',
  },
  '&.desktop-only': {
    '.align-center': {
      alignItems: 'center !important',
      height: 780,
      overflow: 'hidden',
      '.Campaign-types-block': {
        width: 980,
        ml: '-88px',
      },
    },
  },
});

const Figure = styled('figure', {
  position: 'relative',
  height: '320px',
  width: '250px',
  br: 10,
  img: {
    width: '250px',
    height: '320px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  '.card-image': {
    borderRadius: '30px',
  },
});

const Intro = styled('div', {
  h2: {
    letterSpacing: '-0.02em',
    color: '#000',
    '@md': {
      fontSize: '$h3',
    },
  },
  '.details': {
    fontFamily: 'elza-text',
    mt: '$2xl',
    fontWeight: '$normal',
    lh: 1.5,
    color: '#666',
  },
  button: {
    mt: '$3xl',
  },
  '@lg': {
    px: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
});

const Info = styled('div', {
  h4: {
    fontSize: 16,
    fontWeight: '$semibold',
    fontFamily: 'elza-text',
  },
  span: {
    fontSize: 16,
    fontWeight: '$light',
    fontFamily: 'elza-text',
  },
});

const Figcaption = styled('figcaption', {
  position: 'absolute',
  inset: 0,
  p: '$lg',
  borderRadius: '30px',
  // pt:20,
  background: ' linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 60%)',
  '> *': {
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
});

const CampaignSingle = styled('div', {});

const Overlay = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'end',
  paddingBottom: '12px',
});

const CampaignTypesBlock = styled('div', {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  a: {
    br: 10,
    textDecoration: 'none',
    '&:hover': {
      // filter: 'drop-shadow(0px 0px 44px rgba(204, 80, 42, 0.5))',
      // transform: 'scale(1.05)',
    },
  },
  '.campaign-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
  },

  ' .wrapper--vertical': {
    flexDirection: 'row',
    height: '100vh',
  },
});

const CampaignTypesStyledM = styled('section', {
  pt: '$2xl',
  pb: '$2xl',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  backgroundImage: 'url(https://d1ks0pavw8unez.cloudfront.net/public/images/paid-collaboration/campaign-pattern.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  bgColor: '#FFF9F0',
  '*': {
    fontFamily: 'articulat-cf',
  },
  '.row': {
    rowGap: 30,
  },
  '.main-container': {
    display: 'flex',
    maxHeight: '110vh',
  },
  '.Campaign-single-mobile': {
    alignItems: 'center',
  },
});

const VerticalSlide = styled('div', {});

export default CampaignTypesStyled;
export {
  CampaignSingle,
  CampaignTypesBlock,
  CampaignTypesStyledM,
  Figcaption,
  Figure,
  Info,
  Intro,
  Overlay,
  VerticalSlide,
};
