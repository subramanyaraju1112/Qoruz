import { styled } from '@stitches-config/stitches.config';
const Main = styled('div', {});

const Box = styled('div', {
  bgColor: '#FFFFFF',
  borderRadius: '32px',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  height: '622px',
});

const PostCampaign = styled('div', {
  pt: '24px',
  mb: '48px',
  h3: {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#000000',
    '@sm': {
      font: 'Articulat CF',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '100%',
      letterSpacing: '-0.02em',
      color: '#000000',
    },
  },
  '.text-success': {
    // font: 'Elza',
    // fontStyle: 'normal',
    // fontWeight: '400',
    // fontSize: '20px',
    // lineHeight: '24px',
    // letterSpacing: '-0.02em',
    // color: '#000000',
    '@sm': {
      font: 'Elza',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '100%',
      letterSpacing: '-0.02em',
      color: '#000000',
    },
  },
});

const Info = styled('div', {
  '.campaign-margin': {
    mt: '10px',
    '.full-name': {
      padding: '14px 16px',
      width: '100%',
      color: '#666666',
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
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
    padding: '16px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.campaign-launch': {
    padding: '16px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  '.budget': {
    padding: '14px 16px',
    width: '100%',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
});

const Bottom = styled('div', {
  mt: '48px',
  display: 'flex',
  jc: 'space-between',
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
  bgColor: '#1A0E2E',
  borderRadius: '24px',
  background: 'linear-gradient(180deg, #4B0BA0 -35.58%, #481574 180.77%)',
  backdropFilter: 'blur(7.5px)',
  overflow: 'hidden',
  // pr: '10px',
});
const Frame = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/campaign-brief/heroBG-mini.svg)',
  gap: '48px',
  zIndex: '5',
  margin: 'auto',
});

const Influencer = styled('div', {
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'center',
  gap: '32px',
  // pl: '22px',
  pt: '32px',
});

const HeadLine = styled('div', {
  '.headline': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    // textAlign: 'center',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
});

const ProfileWrapper = styled('div', {
  display: 'flex',
  gap: '10px',
  background: '#FFFFFF',
  borderRadius: '32px',
  padding: '11px 19px',
  pr: '10px',
  maxWidth: '85%',
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
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#000000',
    mb: '$xs',
  },
});

const ProfileDesc = styled('div', {
  '.role': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '-0.02em',
    color: '#000000',
    opacity: '0.7',
    pb: '$xs',
  },
  '.business': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#666666',
  },
});

const Hero = styled('div', {});

const CampaignSuccess = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '24px',
  img: {
    // display: 'block',
    // margin: '0 auto 20px',
  },
});

const Text = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
  h3: {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.text-success': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
});

const Icon = styled('div', {
  display: 'block',
  margin: 'auto',
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
  Icon,
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
  Text,
  Wrapper,
};
