import { styled } from '@stitches-config/stitches.config';

const FormContainer = styled('div', {
  mt: '1rem',
  maxWidth: '850px',
  mx: 'auto',
  border: '1px solid rgba(153, 153, 153, 0.2)',
  width: '$full',
  minHeight: '352px',
  padding: '24px',
  borderRadius: '20px',
  boxShadow: `
    0px 38.52px 25.48px 0px rgba(83, 30, 0, 0.04),
    0px 20px 13px 0px rgba(83, 30, 0, 0.04),
    0px 8.15px 6.52px 0px rgba(83, 30, 0, 0.03)
  `,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'center',
  background: '#fff',
  '.success-section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    '.success-icon': {
      width: '150px',
      height: '150px',
    },
  },
  mb: '3rem',
  '.top-text': {
    width: '$full',
  },
  h3: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#000000',
    mb: 8,
    '@lg': {
      fontSize: 26,
    },
  },
  '.popup-detail': {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: '#000000',
    mb: 24,
    '@lg': {
      fontSize: 18,
    },
  },
  '.thank-message': {
    '@lg': {
      fontSize: 21,
      textAlign: 'center',
    },
  },
  '.countdown': {
    color: '#FF5C5C',
    fontWeight: 700,
  },
  '.terms-register': {
    fontWeight: 500,
    fontSize: '12px',
    opacity: '60%',
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
    fontFamily: 'articulat-cf',
    textAlign: 'center',
  },
  '.input-styled': {
    mb: 24,
    width: '100%',
  },
  '@lg': {
    mt: 40,
    maxHeight: 'unset',
    padding: '20px',
  },
});

const FormContainerInner = styled('div', {
  width:'$full',
  '.popup-image': {
    width: '$full',
    mb: 14,
    height: 'auto',
  },
  '.image-section': {
    position: 'relative',
    width:'$full',
    '.close-icon': {
      position: 'absolute',
      right: 15,
      top: 15,
      cursor:'pointer',
    },
  },
});

const Formfield = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  span:{
    display:'flex',
    flexDirection:'column',
    width:'32%',
    '@md': {
      width: '$full',
    },
    '.error':{
      width:'$full',
    }
  }
});

const SubmitSection = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '.register-now': {
    position: 'relative',
    top: 0,
    '&.fixed': {
      position: 'fixed',
      top: 0,
    },
  },

  '.registered-section': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    '.hundread-plus': {
      fontSize: 20,
      color: 'rgb(255, 181, 160)',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    '.text': {
      fontFamily: 'elza-text',
      fontWeight: 500,
      fontSize: 12,
      lh: '14.46px',
    },
  },
  '.custom-button': {
    padding: '16px 24px 16px 24px !important',
  },
  '@lg': {
    flexWrap: 'wrap',
    flexDirection: 'column-reverse',
    '.registered-section': {
      mb: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
  },
});

export default FormContainer;

export { FormContainerInner, Formfield, SubmitSection };
