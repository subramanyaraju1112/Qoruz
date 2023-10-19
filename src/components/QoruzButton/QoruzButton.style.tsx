import { styled } from '@stitches-config/stitches.config';

const QoruzButtonStyled = styled('div', {
  position: 'relative',
  svg: {
    size: 12,
    ml: 17,
    path: {
      fill: '#666',
    },
  },
});

const QoruzButtonWrapper = styled('a', {
  top: 0,
  display: 'flex',
  textDecoration: 'none',
  color: '#000',
  position: 'relative',
  width: 'max-content',
  border: 0,
  mt: '$3xl',
  backgroundColor: '$white',
  boxShadow:
    '0px 0px 0px rgba(0, 0, 0, 0.08), 0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    
  borderRadius: 60,
  padding: '17px 29px 17px 24px',
  minHeight: 88,
  cursor: 'pointer',
  transition: 'all .3s ease',
  img: {
    marginRight: '$lg',
    '@lg': {
      width: 30,
      height: 'auto',
    },
  },
  '&:hover': {
    
    boxShadow:
      '0px 0px 0px rgba(0, 0, 0, 0.08), 0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    h3:{
      color: '$primary',
    },
    small:{
      color: '#8D4AFF',
    },
    svg: {
      path: {
        fill: '$primary',
      },
    },
    '.hover-effect': {
      backgroundColor: '#8D4AFF',
      // opacity: 0,
      // transform: 'translateY(-4px)',
    },
  },
  '&:focus': {
    top: 3,
    boxShadow:
      '0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    h3:{
      color: '$primary',
    },
    small:{
      color: '#8D4AFF',
    },
    '.hover-effect': {
      opacity: 0,
      transform: 'translateY(-4px)',
    },
  },
  '&:active': {
    top: 3,
    boxShadow:
      '0px 0px 0px rgba(0, 0, 0, 0.08), 0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    h3:{
      color: '$primary',
    },
    small:{
      color: '#8D4AFF',
    },
    svg: {
      path: {
        fill: '$primary',
      },
    },
    '.hover-effect': {
      backgroundColor: '#8D4AFF',
      // opacity: 0,
      // transform: 'translateY(-4px)',
    },
  },
  '@lg': {
    marginTop: '$2xl',
    minHeight: 58,
  },
});

const HoverEffect = styled('div', {
  position: 'absolute',
  left: '0px',
  right: '0px',
  top: '10px',
  bottom: '-10px',
  backgroundColor: '#dedede',
  borderRadius: 60,
  zIndex: -1,
  // opacity: 0,
  transform: 'translateY(0px)',
  transition: '0.3s',
  width: '$full',
});

const Info = styled('div', {
  lineHeight: '$xs',
  small: {
    letterSpacing: '$sm',
    fontWeight: '$medium',
    fontSize: '$md',
    color: '#666',
  },
  h3: {
    letterSpacing: '$sm',
    lineHeight: '$xs',
    fontSize: '2rem',
    fontWeight: '$bold',
    svg: {
      width: '$sm',
      height: '$sm',
      marginLeft: '$md',
      '@lg': {
        width: '$xs',
        height: '$xs',
        marginLeft: '$sm',
      },
    },
    '@lg': {
      fontSize: 20,
    },
  },
});

export default QoruzButtonStyled;
export { HoverEffect, Info, QoruzButtonWrapper };
