import { styled } from '@stitches-config/stitches.config';

const PartnersWrapper = styled('section', {
  py: '3rem',
  '@lg': {
    py: '$2xl',
  },
});

const PartnersList = styled('ul', {
  img: {
    position: 'relative !important',
  },
  width: '100%',
  bgColor: '#24163B',
  bs: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  br: '$pill',
  p: '$2xl',
  '@2xl': {
    maxWidth: 1140,
  },
  '@xl': {
    maxWidth: 930,
  },
  '@lg': {
    maxWidth: 720,
  },
  '@md': {
    maxWidth: 510,
  },
  '@sm': {},
});

const PartnersListItem = styled('li', {
  '@lg': {
    '&:first-child, &:last-child': {
      display: 'none',
    },
  },
  '@md': {
    '&:nth-last-child(2), &:nth-last-child(3)': {
      display: 'none',
    },
  },
  '@sm': {
    '&:nth-last-child(4)': {
      display: 'none',
    },
  },
});

export default PartnersWrapper;
export { PartnersList, PartnersListItem };
