import { styled } from '@stitches-config/stitches.config';
const InputStyled = styled('input', {
  fontFamily: 'elza-text',
  padding: 16,
  borderRadius: 10,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  outline: 'none',
  height: 56,
  width: '100%',
  fontSize: 16,
  fontWeight: 400,
  marginBottom: 20,
  color: '#666666',
  '&::placeholder': {
    color: '#666666',
    opacity: 0.5,
  },
  '&:hover': {
    border: '1px solid rgba(0, 0, 0, 0.3)',
  },
  '&:focus': {
    border: '1px solid rgba(0, 0, 0, 0.3)',
    '&::placeholder': {
      opacity: 1,
    },
  },
  '&.has-error': {
    background: 'rgba(230, 98, 98, 0.08)',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/form-error.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    border: '1px solid #E56262',
    '&::placeholder': {
      color: '#FF0000',
      opacity: 1,
    },
  },
});
const MessageStyled = styled('span', {
  fontSize: '12px',
  color: '#FF0000',
  position: 'relative',
  top: '-16px',
});

export { MessageStyled };
export default InputStyled;
