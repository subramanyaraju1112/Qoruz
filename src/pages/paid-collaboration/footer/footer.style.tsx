import { styled } from '@stitches-config/stitches.config';

const FooterStyled = styled('footer', {
  background: 'linear-gradient(0deg, #FFF2DD, #FFF2DD), #F9F9FA',
  paddingTop: '$2xl',
  paddingBottom: '$2xl',
  h5: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: 0,
  },
  '.details': {
    fontWeight: '600',
    fontSize: '$md',
    color: '#666',
    fontFamily: 'articulat-cf',
  },
  '.container': {
    '@lg': {
      flexDirection: 'column',
    },
  },
  '@lg': {
    paddingTop: '$3xl',
    paddingBottom: '$3xl',
  },
});

const FooterInfo = styled('div', {
  width: '100%',
  '.details': {
    marginTop: '$2xl',
  },
  '& + .footer-navigation': {
    marginLeft: 'auto',
    '@lg': {
      marginLeft: 0,
    },
  },
  a: {
    display: 'flex',
    img: {
      '@sm': {
        width: '100%',
        height: 'auto',
      },
    },
    '@sm': {
      maxWidth: 94,
    },
  },
  '@lg': {
    maxWidth: '100%',
  },
});

const CopyRights = styled('div', {
  width: '100%',
  marginTop: '$lg',
  paddingTop: '$lg',
  borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  span: {
    fontSize: '$xs',
    color: '#666666',
    fontFamily: 'articulat-cf',
    fontWeight: '500',
  },
});

const SocialList = styled('ul', {
  marginLeft: '$lg',
});

const SocialListItem = styled('li', {
  marginLeft: '$3xl',
  a: {
    display: 'flex',
    svg: {
      size: 24,
    },
    '.fill-social-icon': {
      fill: '#261b37',
    },
    '&:hover': {
      '.fill-social-icon': {
        fill: '#FF6435',
      },
    },
  },
});

export default FooterStyled;
export {
  CopyRights,
  FooterInfo,
  SocialList,
  SocialListItem
};