import { styled } from '@stitches-config/stitches.config';

const OutlineButton = styled('button', {
  borderRadius: 50,
  fontWeight: '$semibold',
  letterSpacing: '$sm',
  backgroundColor: 'transparent',
  padding: '7px 18px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'max-content',
  '> svg, > img': {
    marginLeft: '$xs',
    marginTop: 2,
  },
  '&.sm': {
    minHeight: 40,
    fontSize: '$sm',
  },
  '&.md': {
    minHeight: 48,
    fontSize: '$md',
  },
  '&.lg': {
    minHeight: 48,
    fontSize: 20,
  },
  '&.primary': {
    color: '$white',
    border: '2px solid $white',
    '&:hover': {
      color: '#FF6435',
      backgroundColor: '$white',
      svg: {},
    },
  },
  '&.secondary': {
    color: '#666666',
    border: '2px solid #CCCCCC',
    '&:hover': {
      borderColor: '$primary',
      backgroundColor: '$primary',
      color: '$white',
    },
  },
});

export default OutlineButton;
