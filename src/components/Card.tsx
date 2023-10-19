import { styled } from '@stitches-config/stitches.config';

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  boxShadow: '$sm',
  padding: '$3xl',
  figure: {
    minHeight: 180,
    marginBottom: '$md',
    img: {
      maxWidth: '100%',
    },
  },
  h5: {
    fontFamily: 'elza-text',
    fontWeight: '$semibold',
    fontSize: '$h5',
    marginTop: '$sm',
    marginBottom: '$md',
  },
  small: {
    color: '$primary',
    letterSpacing: '$md',
    textTransform: 'uppercase',
    opacity: 0.7,
    fontSize: 10,
    fontWeight: '$semibold',
  },
  '.details': {
    color: '#666666',
    opacity: 0.7,
    fontSize: '$sm',
  },
  time: {
    fontWeight: '$semibold',
    fontSize: 10,
    letterSpacing: '$sm',
    color: '#000000',
    opacity: 0.7,
    minHeight: 28,
    background: '#F4F4F4',
    borderRadius: '$lg',
    padding: '$xs $md',
    width: 'max-content',
  },
});

export default Card;
