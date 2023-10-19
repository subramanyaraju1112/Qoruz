import { styled } from '@stitches-config/stitches.config';

const FreeTool = styled('div', {
  padding: '34px 41px 72px',
  '.card-gap': {
    '.card-col': {
      marginBottom: '3rem',
      '.card': {
        boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        '.toolimage': {
          marginBottom: '39px',
          img: {
            maxWidth: 250,
            width: '$full',
            height: 'auto',
          },
        },
        '.toolpage': {
          fontWeight: 700,
          fontSize: 12,
          lineHeight: 1.3,
          letterSpacing: '0.06em',
          opacity: 1,
        },
        '.details': {
          fontSize: '16px',
          lineHeight: 1.5,
        },
        '.plugin-tip': {
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: 1,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          padding: '11px 16px 11px 30px',
          background: '#FF6435',
          position: 'absolute',
          borderTopLeftRadius: '50px',
          top: '0px',
          left: '0px',
        },
        '@lg':{
          padding:'2rem 1.5rem',
        },
      },
    },
  },
  '@lg':{
    padding: '34px 20px 72px',
  },
});

const CardBottom = styled('div', {
  mt: '$lg',
  '> *': {
    mt: '$lg',
  },
  button: {
    '&.sm': {
      minHeight: 22,
    },
    a: {
      color: '#666666',
      '&:hover': {
        color: '#FFFFFF',
      },
    },
    svg: {
      ml: '$xs',
      display: 'none',
      '.fill-social-icon': {
        fill: '#fff',
      },
    },
    '&:hover': {
      svg: {
        display: 'flex',
      },
      a: {
        color: '#FFFFFF',
      },
    },
  },
  '.btn-link': {
    textDecoration: 'unset',
  },
});

export default FreeTool;
export { CardBottom };
