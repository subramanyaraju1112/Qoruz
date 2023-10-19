import { styled } from '@stitches-config/stitches.config';

const ProfileDataStyled = styled('div', {
  '.heading-engagement': {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#000000',
    padding: '26px 30px 24px 30px',
    gap: 13,
    borderBottom: '1px solid #EEEEEE',
  },
});

const SocialData = styled('div', {
  display: 'flex',
  padding: '24px 39px',
  justifyContent: 'space-between',
  borderBottom: '1px solid #eee',
  flexWrap:'wrap',
  '.data': {
    display: 'flex',
    gap: 4,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#333333',
    pt: 7,
  },
  '.data-info': {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '16px',
    color: ' #000000',
    pt: 16,
    '.score-info': {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#999999',
      letterSpacing: '-0.02px',
    },
    '&:hover': {
      '.score-info': {
        color: '#FF6435',
      },
    },
  },
  '@md':{
    '.datainfo':{
      mb:30,
      mr:10,
    }
  }
});

const SocialPlatformData = styled('div', {
  '.method-detail': {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#000000',
    gap: 8,
    padding: '26px 38px 14px',
  },
  '.post-detail-card': {
    margin: '0px 26px',
    padding: '26px',
    background: '#F9F9F9',
    borderRadius: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    '.card-info': {
      display: 'flex',
      width: '28.33%',
      gap: 8,
      '.info-text': {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        '.info-heading': {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '16px',
          letterSpacing: '-0.02em',
          color: '#333333',
          display: 'flex',
          gap: '4px',
        },
        '.score-info ': {
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '16px',
          color: '#000000',
        },
      },
      '@xl':{
        width:'43%',
      },
      '@xs':{
        width:'100%',
      }
    },
  },
});

export default ProfileDataStyled;

export { SocialData, SocialPlatformData };
