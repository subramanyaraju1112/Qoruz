import { styled } from '../stitches/stitches.config';

const Tag = styled('span', {
  borderRadius: 40,
  letterSpacing: '$sm',
  fontWeight: '$medium',
  fontSize: '$sm',
  color: '$white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '7px $lg',
  minHeight: 36,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover, &.active': {
    backgroundColor: '$purple',
  },
});

export default Tag;
