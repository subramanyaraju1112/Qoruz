import { styled } from '@stitches-config/stitches.config';

const KeyFeatureStyled = styled('div', {});

const Content = styled('div', {
  '.inline-flex': {
    mb: 10,
    mt: 20,
    fw: 600,
  },
  '.details': {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: 'justify',
    color: '#666666',
    mt:10,
    '@lg': {
      fontSize: 20,
    },
  },
  '.reason-lists': {
    listStyleType: 'inherit',
  },
  '@lg': {
    h4: {
      fontSize: 22,
    },
  },
});

export default KeyFeatureStyled;
export { Content };
