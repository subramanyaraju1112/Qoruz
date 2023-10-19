import { styled } from '@stitches-config/stitches.config';

const HeroContainer = styled('section', {
  background:
    'linear-gradient(180deg, #3E00A9 -35.58%, rgba(203, 54, 255, 0.61) 180.77%)',
  overflow: 'hidden',
  position: 'relative',
  height:139,

  '&:before': {
    content: '',
    position: 'absolute',
    inset: '0px',
    opacity: 0.7,
    background: 'url(../../images/curated-list/cta-bg.svg) no-repeat',
    backgroundSize: '144% 139%',
    backgroundPosition: 'inherit',
  },

  '.btn-text': {
    display: 'flex',
    gap: 14.64,
    justifyContent: 'end',
    marginRight: 100,
    paddingTop: 32,
    position: 'absolute',
    right: 0,
    zIndex: 4,
    '.button': {
      background: 'rgba(255, 255, 255, 0.15)',
      border: '0.438729px solid #FFFFFF',
      borderRadius: 14,
      padding: '14.0393px 21.059px',
      fontFamily: 'elza-text',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: '0.255em',
      color: '#FFFFFF',
    },
  },
  '.hero-image': {
    height: '100%',
    width: '38%',
    paddingTop: '18px',
    '@xl':{
      width:'45%',
    },
  },
  '@lg': {
    height: 147,
    '&:before': {
      backgroundPosition: ' 9%',
      backgroundSize: 'auto',
    },
    '.container': {
      height: '$full',
      padding: '0px !important',
      '.image-row': {
        height: '$full',
        '.mobile--col': {
          height: '$full',
          width: '50% !important',
          maxWidth: '50% !important',
          '.hero-image': {
            width:'100%',
            ml:'0px',
            pt:37,
          }
        },
      },
    },
  },
});

export default HeroContainer;
