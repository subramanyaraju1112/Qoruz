import { styled } from '@stitches-config/stitches.config';

const InfluencerProfile = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$3xl',
  '@lg': {
    display: 'none',
  }
});

const InfluencerPhoto = styled('div', {
  position: 'relative',
  height: 'fit-content',
  '.influencer-photo': {
    marginTop: '-40px',
    boxShadow: '0px -29px 80px -32px rgba(21, 9, 41, 0.5)',
    border: '6px solid #FFFFFF',
    width: '200px',
    height: '200px',
    // background: 'url(image.png)',
    boxSizing: 'border-box',
    br: '$round',
    position: 'relative',
  },
});

const InfluencerDetails = styled('div', {
  // position: 'absolute',
  width: '912px',
  // height: '314px',
  left: '372px',
  top: '320px',
  background: '#FFFFFF',
  boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  borderRadius: '0px 0px 16px 16px',

  '&.minimized': {
    maxHeight: '30em',
    transition: 'max-height 0.9s ease-in-out',
    '&.expanded': {
      maxHeight: '100em',
    },
    // '@lg': {
    //   height: 312,
    //   '&.expanded': {
    //     height: 415,
    //   },
    // },
    // '@sm': {
    //   height: 350,
    //   '&.expanded': {
    //     height: 510,
    //   },
    // },
  },
});

const DetailsWrapper = styled('div', {
  // position: 'absolute',
  maxWidth: '860px',
  width: '$full',
  // height: '262px',
  left: '398px',
  top: '346px',
  display: 'flex',
  margin: 'auto',
  marginTop: '20px',
  mb: 20,
  justifyContent: 'space-between',
  // flexWrap: 'wrap',
  '@lg': {
    height: 390,
  },
  '@sm': {
    height: 365,
  },
});

const InfluencerBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
  gap: '$md',
  maxWidth: 550,
  width: '$full',
});

const Name = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '$sm',
  '.influencer-name': {
    // position: 'absolute',
    // width: '181px',
    // height: '32px',
    left: '398px',
    top: '346px',
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '32px',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.verified-icon': {
    // position: 'absolute',
    // width: '85px',
    // height: '24px',
    left: '592px',
    top: '350px',
  },
});

const Tagline = styled('div', {
  '.tagline': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#000000',
    opacity: '0.7',
  },
});

const Bio = styled('div', {
  '.bio': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
  },
  '.close-bio': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#000000',
  },
  '.minimized': {
    opacity: 0,
    visibility: 'hidden',
    maxHeight: '0em',
    display: 'block',
    transition: 'opacity 0.9s ease-in-out, max-height 0.9s ease-in-out',
    '&.expanded': {
      opacity: 1,
      visibility: 'unset',
      maxHeight: '100em',
      // transition: 'opacity 1s ease-in-out, height 1s ease-in-out',
    },
  },
});

const Streams = styled('div', {
  display: 'flex',
  gap: '8px',
});

const Stream1 = styled('div', {
  padding: '4px 14px',
  font: 'Elza',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '28px',
  letterSpacing: '-0.02em',
  color: '#666666',
  background: '#F9F9F9',
  borderRadius: '40px',
});

const Stream2 = styled('div', {
  padding: '4px 14px',
  font: 'Elza',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '28px',
  letterSpacing: '-0.02em',
  color: '#666666',
  background: '#F9F9F9',
  borderRadius: '40px',
});

const Stream3 = styled('div', {
  padding: '4px 14px',
  font: 'Elza',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '28px',
  letterSpacing: '-0.02em',
  color: '#666666',
  background: '#F9F9F9',
  borderRadius: '40px',
});

const IconBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&.minimized': {
    height: 180,
    transition: 'height 0.9s ease-in-out',
    '&.expanded': {
      height: 270,
    },
    '@lg': {
      height: 95,
      '&.expanded': {
        height: 95,
      },
    },
    '@sm': {
      height: 95,
      '&.expanded': {
        height: 95,
      },
    },
  },
});

const UpperIcons = styled('div', {
  display: 'flex',
  gap: '$sm',
  ai: 'center',
});
const Message = styled('div', {
  height: 48,
  width: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ff6435',
  cursor: 'pointer',
  svg: {
    width: 24,
    height: 24,
    path: {
      fill: '#fff',
    },
  },
  '&:hover': {
    background: '#fff',
    border: '1px solid #ff6435',

    svg: {
      path: {
        fill: '#ff6435',
      },
    },
  },
});

const Collaborate = styled('div', {
  display: 'flex',
  ai: 'center',
  padding: '14px',
  gap: '$sm',
  background: '#FFFFFF',
  boxShadow:
    '0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: '50px',
  '.collaborate-now': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    color: '#FF6435',
  },
});

const LowerIcons = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$2xl',
});

const Icon1 = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '$sm',
  '.p': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#333333',
  },
});

const Icon2 = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '$sm',
  '.p': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#333333',
  },
});

const Polygon = styled('div', {
  position: 'absolute',
  size: 80,
  ta: 'center',
  bottom: '0px',
  right: '-10px',
  '.polygon': {
    position: 'absolute',
    fontWeight: '$bold',
    fontSize: '1.75rem',
    letterSpacing: '$xs',
    color: '$white',
    textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
    size: 80,
    ta: 'center',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/top-creators/polygon.svg)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    bottom: '0px',
    right: '-10px',
    fs: 0,
    zIndex: 5,
    lh: '80px',
    '@lg': {
      width: '$2xl',
      height: '$2xl',
      fontSize: 12,
    },
  },
  '.hide-background-polygon': {
    display: 'none',
  },
  '.background-polygon': {
    position: 'absolute',
    zIndex: 5,
    left: 5,
    // visibility: 'hidden',
    transition: '1s all ease-in-out',
    opacity: 1,
    visibility: 'visible',
  },
  '.hide.tool-tip': {
    opacity: 0,
    visibility: 'hidden',
    transition: '0.4s all ease-in-out, width 0.5s ease-in-out',
    boxShadow: '0px 13.0612px 16.3265px rgba(0, 0, 0, 0.15)',
    width: 0,
    padding: 0,
    '.heading': {
      width: 180,
    },
    '.paragraph': {
      width: 185,
    },
  },
  '.tool-tip': {
    opacity: 1,
    visibility: 'visible',
    transition: '0.7s all ease-in-out, width 1s ease-in-out',
    position: 'absolute',
    overflow: 'hidden',
    // width: 0,
    height: 98,
    background: '#fff',
    boxShadow: '0px 13.0612px 16.3265px rgba(0, 0, 0, 0.15)',
    borderRadius: 16,
    // padding: '14px 0px 13px 0px',
    left: '37px',
    zIndex: 4,
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
    textAlign: 'left',
    width: 270,
    padding: '14px 20px 13px 76px',
    '.heading': {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '19px',
      letterSpacing: '-0.02em',
      color: '#000000',
      width: 180,
    },
    '.paragraph': {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '-0.02em',
      color: '#000000',
      opacity: 0.7,
      width: 165,
    },
  },
  // '&:hover': {
  //   '.tool-tip': {
  //     opacity: 1,
  //     visibility: 'visible',
  //     width: 262,
  //     padding: '14px 20px 13px 76px',
  //   },
  // '&.background-polygon': {
  //   opacity: 1,
  //   visibility: 'visible',
  // },
  // },
});
const PolygonTool = styled('div', {
  '.absolute-exclamation': {
    position: 'absolute',
    bottom: '52px',
    right: '-21px',
    width: '16px',
    height: '16px',
    zIndex: 6,
  },
});

const ProfileStyledM = styled('section', {
  display: 'none',
  '.mobile-lower-icon': {
    flexWrap: 'wrap',
    height: 'fit-content',
    gap: '17px',
    mt: 20,
    flexDirection: 'column',
  },
  '@lg': {
    display: 'block',
    '.image-section': {
      pl: 15,
      pr: 15,
      justifyContent: 'space-between',
      '.influencer-photo': {
        size: 120,
        mt: '-20px',
      },
      '.polygon': {
        size: 58,
        fontSize: 18,
        lh: '58px',
      },
      '.absolute-exclamation': {
        bottom: '39px',
        right: '-21px',
        width: '13px',
        height: '13px',
      },
      '.tool-tip': {
        left: 54,
        padding: '14px 20px 13px 55px',
        top: 0,
        width: 230,
      },
      '.background-polygon': {
        top: 0,
        left: 19,
      },
    },
  },
});

const MobileProfileHero = styled('section', {
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
  '.influencer-name': {
    fontWeight: 800,
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
  '.tagline': {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: 1.33,
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    mt: '$lg',
  },
  '.start-exploring-info': {
    // pb: '$5xl',
  },
});

const InfluencerDetailsM = styled('div', {
  pl: 15,
  pr: 15,
  mt: 19,
  '.influencer-name': {
    display: 'flex',
    gap: '10px',
    fontSize: 28,
    lineHacing: '-0.02em',
    color: '#000000',
    fontWeight: 700,
    fontFamily: 'articulat-cf',
    alignItems: 'center',
    mb: 12,
  },
  '.bio': {
    mt: 24,
    mb: 22,
    color: '#000000b3',
    '&.minimized': {
      mt: 0,
      mb: 10,
      '&.expanded': {
        mt: 24,
        mb: 24,
      }
    }
  },
});

export default InfluencerProfile;
export {
  Bio,
  Collaborate,
  DetailsWrapper,
  Icon1,
  Icon2,
  IconBox,
  InfluencerBox,
  InfluencerDetails,
  InfluencerDetailsM,
  InfluencerPhoto,
  LowerIcons,
  Message,
  MobileProfileHero,
  Name,
  Polygon,
  PolygonTool,
  ProfileStyledM,
  Stream1,
  Stream2,
  Stream3,
  Streams,
  Tagline,
  UpperIcons,
};
