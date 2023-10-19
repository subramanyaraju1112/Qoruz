import { styled } from '@stitches-config/stitches.config';

const TitleWrapper = styled('div', {
  display: 'flex',
  ai: 'center',
  gap: '16px',
  padding: '60px 0px',
  flexWrap: 'wrap',
  '.spotify': {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  '.spotify-name': {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#FF6435',
  },
  '.heading': {
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.date': {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#999999',
  },
});

const ContentWrapper = styled('div', {
  // diplay: 'flex',
  // justifyContent: 'center',
  // pr: '$3xl',
  // gap: '20px',
  // borderRight: '1px solid rgba(153, 153, 153, 0.3)',

  '#youtube-player': {
    width: '$full',
  },

  '.hero-image': {
    width: '100%',
    borderRadius: '16px',
    height: 'auto',
  },
  '.pattern-bg': {
    objectFit: 'cover',
    borderRadius: '16px',
  },
  '.pill-container': {
    background:
      'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
    width: '100%',
    borderRadius: '16px',
  },
  '.pill-wrapper': {
    display: 'flex',
    jc: 'center',
    gap: '16px',
    padding: '16px 0px',
    flexWrap: 'wrap',
    '.profile-url': {
      textDecoration: 'none',
    },
  },
  '.pill': {
    display: 'flex',
    ai: 'center',
    padding: '8px 16px',
    gap: '4px',
    background: '#FFFFFF',
    boxShadow:
      '0px -1px 3px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(0, 0, 0, 0.15)',
    borderRadius: '40px',
  },
  '.name': {
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '24px',
    color: '#666666',
  },
  '.summary': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '24px',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: 1.8,
    textAlign: 'justify',
    mt: 20,
    color: '#666666',
  },
});

const CategoryWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  jc: 'center',
  gap: '10px',
  padding: '10px 0px',

  '.category': {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.category-detail': {
    display: 'flex',
    gap: '16px',
    '.pill-flex': {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      ai: 'center',
      '.category-pill': {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: 1,
        color: '#666666',
        padding: '8px 16px',
        background: 'rgba(153, 153, 153, 0.1)',
        borderRadius: '40px',
      },
    },
  },
});

const VoteShareWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 0px',
  boxSizing: 'border-box',
  borderWidth: '1px 0px',
  borderStyle: 'solid',
  borderColor: 'rgba(153, 153, 153, 0.3)',
  mt: '5rem',
  '.vote-icons': {
    display: 'flex',
    ai: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    width: '$full',
    '.vote-bundle': {
      display: 'flex',
      gap: 8,
    },
  },
  '.vote': {
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'justify',
    letterSpacing: '-0.02em',
    color: '#666666',
  },
  '.vote-icon': {
    height: 24,
    cursor: 'pointer',
    display: 'block',
    '&:hover': {
      background: '$primary',
      width: 24,
      br: 6,
      borderColor: '$primary',
      svg: {
        path: {
          fill: '#fff',
        },
      },
    },
  },
  '.downvote': {
    transform: 'rotate(181deg)',
  },
  '.social-media': {
    display: 'flex',
    ai: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    width: '$full',
    justifyContent: 'end',
    '.social-bundle': {
      height: 24,
      display: 'flex',
      gap: 16,
      '.social-icons': {
        cursor: 'pointer',
      },
      svg: {
        path: {
          fill: '#666',
        },
      },
    },
    '@md': {
      justifyContent: 'flex-start',
    },
  },
  '.share': {
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'justify',
    letterSpacing: '-0.02em',
    color: '#666666',
  },
});

const SingleCampaignDetail = styled('div', {
  '.right-col': {
    paddingLeft: '24px !important',
    borderLeft: '1px solid rgba(153, 153, 153, 0.3)',
    pr: '0px !important',
    '@lg': {
      px: '15px !important',
      borderLeft: 'unset',
    },
    '@md':{
      width: '100% !important',
      maxWidth: '100% !important',
      flexBasis: '100% !important',
    },
  },
  '.left-col': {
    paddingRight: '24px !important',
    '@lg': {
      paddingRight: '15px !important',
    },
    '@md':{
      width: '100% !important',
      maxWidth: '100% !important',
      flexBasis: '100% !important',
    },
  },
});

export default TitleWrapper;

export {
  CategoryWrapper,
  ContentWrapper,
  SingleCampaignDetail,
  VoteShareWrapper,
};
