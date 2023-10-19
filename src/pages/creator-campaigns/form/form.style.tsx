import { styled } from '@stitches-config/stitches.config';

const FormContainer = styled('div', {
  borderTop: '3px solid #ff6435',
  width: '$full',
  minHeight: '200px',
  padding: '24px',
  position: 'absolute',
  bottom: 0,
  boxShadow: `
    0px 38.52px 25.48px 0px rgba(83, 30, 0, 0.04),
    0px 20px 13px 0px rgba(83, 30, 0, 0.04),
    0px 8.15px 6.52px 0px rgba(83, 30, 0, 0.03)
  `,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  background: '#fff',
  '.top-text': {
    width: '$full',
  },
  h3: {
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
  },
  '.thank-message': {
    '@lg': {
      fontSize: 21,
      textAlign: 'center',
    },
  },
  '.input-styled': {
    mb: 12,
  },
  '.creator-form': {
    gap: 20,
    '@md': {
      flexWrap: 'wrap',
      gap: 0,
      width: '100%',
      span: {
        width: '$full',
      },
    },
  },
  '&:before': {
    content: 'url(/../images/common/lock.png)',
    position: 'absolute',
    size: 40,
    br: '50%',
    padding: '3px',
    background: 'rgb(255, 100, 53)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '-25px',
  },
  '@md':{
    bottom:45,
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

export { SubmitSection };
