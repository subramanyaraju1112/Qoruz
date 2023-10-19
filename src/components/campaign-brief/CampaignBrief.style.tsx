import { styled } from '@stitches-config/stitches.config';

const Main = styled('div', {
  backgroundColor: '#FFFFFF',
  borderRadius: '32px',
});

const Box = styled('div', {
  bgColor: '#FFFFFF',
  borderRadius: '32px',
});

const Wrapper = styled('div', {
  '.campaign-popup-new': {
    justifyContent: 'space-between !important',
    flexWrap: 'unset !important',
  },
  '.campaing-container': {
    maxWidth: '1333px !important',
    width: '$full',
    '.left-container': {
      width: '100% !important',
      pl: '15px !important',
      pr: '40px !important',
      '@lg': {
        pr: '15px !important',
      },
    },
    '.left-container-success': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '680px !important',
      width: '100% !important',
      height: '767px !important',
      pl: '15px !important',
      pr: '15px !important',
      '@lg': {
        maxWidth: '100% !important',
      },
    },
    '@lg': {
      pl: '0px !important',
      pr: '0px !important',
    },
    '.ml-auto': {
      ml: 'auto',
      '@lg': {
        mr: 'auto',
      },
    },
  },
  '@lg': {
    '.campaign-popup-new': {
      gap: '20px',
      flexDirection: 'column-reverse !important',
      pl: '15px !important',
      pr: '15px !important',
    },
  },
  'input#budget': {
    pl: 30,
  },
});

const PostCampaign = styled('div', {
  pt: '24px',
  mb: '48px',
  '.campaign': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: 1.375,
    letterSpacing: '-0.02em',
    color: '#000000',
    '@lg': {
      fontSize: 24,
      lineHeight: 1,
    },
  },
  '.details': {
    font: 'elza-text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#000000',
    '@lg': {
      fontSize: 12,
      lineHeight: 1,
    },
  },
  '&.show-mobile': {
    display: 'none',
  },
  '&.show-mobile-icon': {
    display: 'none',
  },
  '@lg': {
    pt: '0px',
    mb: '24px',
    '&.show-mobile': {
      display: 'block',
    },
    '&.show-desktop': {
      display: 'none',
    },
    '&.show-mobile-icon': {
      display: 'flex',
      flexDirection: 'column-reverse',
      '.close-popup': {
        textAlign: 'right',
      },
    },
  },
});

const Info = styled('div', {
  '.campaign-margin': {
    mt: '10px',
    '@lg': {
      gap: '16px',
    },
    '.full-name': {
      padding: '14px 16px',
      width: '100%',
      color: '#666666',
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    '.no-padding': {
      '@lg': {
        pl: '0px !important',
        pr: '0px !important',
      },
      '.rupees-icon': {
        position: 'absolute',
        top: '21px',
        marginLeft: '8px',
      },
      '.custom-select__value-container': {
        padding: '0px 0px 2px 6px',
      },
    },
  },
  '.email': {
    padding: '14px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.phone': {
    padding: '14px 16px',
    width: '100%',
    color: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.company': {
    padding: '14px 16px',
    width: '100%',
    color: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',

    borderRadius: '10px',
  },
  '.message-box': {
    width: '100%',
    padding: '14px 16px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.deadline': {
    padding: '16px 24px 16px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/select-dropdown.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1em top 50%',
    backgroundSize: '.65em auto',
  },
  '.campaign-launch': {
    padding: '16px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/select-dropdown.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1em top 50%',
    backgroundSize: '.65em auto',
  },
  '.budget': {
    padding: '14px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.campaign-budget': {
    border: 'unset',
    borderLeft: '1px solid rgba(102, 102, 102, 0.2)',
    borderRadius: 'unset',
  },

  '.money-icon': {
    marginRight: '10px',
  },
  '.ant-form-item-has-error': {
    '#basicform_buget': {
      border: '1px solid #ff4d4f',
    },
  },

  '#basicform_buget': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 53,
    borderRadius: '7px',
    border: '1px solid #d9d9d9',
    padding: '10px',
  },
  '.ant-form-item': {
    mb: 0,
  },
  '.ant-btn-primary': {
    background: '#fff',
    color: '$primary',
    padding: '8px 16px',
    borderRadius: '32px',
    fontSize: '16px',
    height: '48px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
    span: {
      mr: 10,
    },
    '&:hover': {
      background: '#fff',
      color: '$primary',
    },
  },
  '.ant-form-item-explain-error': {
    color: '$primary',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'elza-text',
    paddingLeft: 10,
    opacity: '0.9',
  },
  '.campaing-bottom': {
    '@lg': {
      flexDirection: 'column-reverse !important',
    },
    '.no-padding': {
      alignSelf: 'center',
    },
  },
});

const Bottom = styled('div', {
  mt: '48px',
  display: 'flex',
  jc: 'space-between',
  '@lg': {
    jc: 'center',
  },
});

const BottomLeft = styled('div', {
  display: 'flex',
  gap: '24px',
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const G2 = styled('div', {
  display: 'flex',
  gap: '10px',
});

const Marketing = styled('div', {
  '.marketing': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '11px',
    letterSpacing: '-0.02em',
    color: 'rgba(0, 0, 0, 0.3)',
  },
  '.solution': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '11px',
    letterSpacing: '-0.02em',
    color: 'rgba(0, 0, 0, 0.3)',
  },
});

const Ratings = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '7px',
  '.reviews': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '11px',
    letterSpacing: '-0.02em',
    color: 'rgba(0, 0, 0, 0.3)',
  },
});

const Reviews = styled('div', {});

const Logo = styled('div', {});

const BottomRight = styled('div', {});

const Submit = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '$xs',
  padding: '8px 16px',
  background: '#FFFFFF',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: '50px',
  '&:hover': {
    cursor: 'pointer',
  },
  '.submit-button': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: '-0.02em',
    color: '#FF6435',
  },
});

const RightBox = styled('div', {
  height: '100%',
  bgColor: '#1A0E2E',
  borderRadius: '0px 24px 24px 0px',
  background: 'linear-gradient(180deg, #4B0BA0 -35.58%, #481574 180.77%)',
  backdropFilter: 'blur(7.5px)',
  overflow: 'hidden',
  '@lg': {
    borderRadius: '24px',
    height: 375,
  },
});
const Frame = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // backgroundImage:
  //   'url(https://d1ks0pavw8unez.cloudfront.net/public/images/campaign-brief/heroBG.svg)',
  gap: '48px',
  zIndex: '5',
  height: '100%',
  '@lg': {
    gap: '25px',
  },
});

const Influencer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  pl: '22px',
  pt: '32px',
  '@lg': {
    alignItems: 'center',
    pt: 21,
    gap: '15px',
  },
});

const HeadLine = styled('div', {
  display: 'flex',
  paddingRight: '20px',
  '.headline': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    '@lg': {
      fontSize: 24,
      textAlign: 'center',
      maxWidth: 252,
      width: '$full',
    },
  },
  '.close-popup-button': {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '18px',
    cursor: 'pointer',
  },
  '@lg': {
    '.show-desktop': {
      display: 'none',
    },
  },
});

const ProfileWrapper = styled('div', {
  display: 'flex',
  gap: '10px',
  background: '#FFFFFF',
  borderRadius: '32px',
  padding: '24px',
  pr: '10px',
  maxWidth: '85%',
  '@lg': {
    maxWidth: '209px',
    padding: '11px 19px',
    width: '$full',
  },
});

const ProfileImage = styled('div', {});

const ProfileInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ProfileName = styled('div', {
  '.profile-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#000000',
    mb: '$xs',
    '@lg': {
      fontSize: '16px',
    },
  },
});

const ProfileDesc = styled('div', {
  '.role': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.02em',
    color: '#000000',
    opacity: '0.7',
    pb: '$xs',
    '@lg': {
      fontSize: '10px',
    },
  },
  '.business': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#666666',
    '@lg': {
      fontSize: '10px',
      width: 86,
    },
  },
});

const Hero = styled('div', {
  '&.banner-image': {
    maxWidth: 424,
    width: '$full',
    ml: 'auto',
    mr: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    '@lg': {
      maxWidth: 364,
      ml: '-80px',
      height: 186,
    },
  },
});

const CampaignSuccess = styled('div', {
  textAlign: 'center',
  img: {
    display: 'block',
    margin: '0 auto 20px',
  },
  h3: {
    font: 'articulat-cf',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: 1.375,
    letterSpacing: '-0.02em',
    color: '#000000',
    '@lg': {
      fontSize: 24,
      lineHeight: 1,
      textAlign: 'center',
      pt: 4,
    },
  },
  '.text-success': {
    font: 'elza-text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#000000',
    '@lg': {
      fontSize: 12,
      lineHeight: 1,
      textAlign: 'center',
      pt: 8,
    },
  },
});

export default Main;
export {
  Bottom,
  BottomLeft,
  BottomRight,
  Box,
  CampaignSuccess,
  ContentWrapper,
  Frame,
  G2,
  HeadLine,
  Hero,
  Influencer,
  Info,
  Logo,
  Marketing,
  PostCampaign,
  ProfileDesc,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileWrapper,
  Ratings,
  Reviews,
  RightBox,
  Submit,
  Wrapper,
};
