import { styled } from '@stitches-config/stitches.config';

const WhatYouNeedStyled = styled('section', {
  pt: '$5xl',
  background:
    'linear-gradient(180deg, rgba(42, 11, 94, 0.5) 0%, rgba(29, 12, 57, 0.5) 100%), url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/patterns-bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '.container': {
    background:
      'linear-gradient(180deg, rgba(62, 0, 169, 0.6) -35.58%, rgba(203, 54, 255, 0.072) 180.77%)',
    backdropFilter: 'blur(7.5px)',
    br: '32px 32px 0px 0px',
    p: '3rem !important',
    '@lg': {
      p: '47px 32px !important',
    },
  },

  '.white-text': {
    color: '$white',
  },
  '.h3': {
    fontSize: '2rem',
    fontWeight: '$extrabold',
    lh: '$xs',
    maxWidth: 320,
    '@lg': {
      width: '$full',
      maxWidth: 250,
    },
  },
  '.description': {
    fontSize: 20,
    mt: '2rem',
    maxWidth: 320,
    '@lg': {
      maxWidth: '$full',
    },
  },
  '.credit-box': {
    color: '#FFFFFF',
    backgroundColor: '#FF6435',
    alignContent: 'center',
    textAlign: 'center',
    padding: '6px 8px 4px 8px',
    fontWeight: 'bold',
    fontSize: '18px',
    width: '109px',
    height: '36px',
    left: '213px',
    top: '0px',
    borderRadius: '12px',
    marginBottom: '24px',
  },
  '.list-items': {
    width: '100%',
  },
  '.list-container': {
    display: 'flex',
    flexDirection: 'row',
  },
  '.right-child': {
    width: '50%',
    p: '$2xl',
    gap: '$xs',
    mt: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '32px',
    alignItems: 'flex-start',
    '@lg': {
      mt: '0rem',
    },
  },
  '.start-now': {
    width: '148px',
    textAlign: 'center',
    borderRadius: '24px',
    backgroundColor: '#FF6435',
    padding: '10px 12px 10px 12px',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  '.rc-slider-handle': {
    '&:focus-visible': {
      boxShadow: 'none !important',
    },
  },
  '.rc-slider-handle-dragging': {
    boxShadow: 'none !important',
  },
});

const CardGroup = styled('div', {
  gap: '1.5rem',
  '.card': {
    p: '$2xl',
    gap: '$sm',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.15s ease-out 0s',
    color: '$primary',
    opacity: 1,
    bottom: -12,
    h3: {
      // color: '$primary',
    },
    '@md': {
      width: '$full',
    },
  },
  '.card-1': {
    p: '$2xl',
    gap: '$sm',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.15s ease-out 0s',
    h3: {
      color: '$primary',
    },
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      bgColor: '$primary',
      br: '$lg',
      zIndex: -1,
      opacity: 1,
      bottom: -12,
    },
    // '&:hover': {
    //   h3: {
    //     color: '$primary',
    //   },
    //   '&:before': {
    //     opacity: 1,
    //     bottom: -12,
    //   },
    // },
    '@md': {
      width: '$full',
    },
  },
  h3: {
    fontSize: '2rem',
    lh: 1,
    letterSpacing: '-0.02em',
    color: '#222222',
  },
  span: {
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#000000',
    opacity: 0.7,
  },
  '@lg': {
    mt: '$2xl',
  },
  '@md': {
    fd: 'column',
  },
});

const Credits = styled('div', {
  background:
    'linear-gradient(180deg, rgba(76, 0, 206, 0.8) -35.58%, rgba(203, 54, 255, 0.096) 180.77%)',
  backdropFilter: 'blur(7.5px)',
  br: 32,
  mt: 36,
  '.influencer-number-slide': {
    background:
      'linear-gradient(180deg, rgba(76, 0, 206, 0.8) -35.58%, rgba(203, 54, 255, 0.096) 180.77%)',
    padding: '32px 36px',
  },
  '&.planning': {
    background: '#fff',
    padding: '20px 0px',
  },
  '.planning-row': {
    width: '$full',
    ml: '0px !important',
    mr: '0px !important',

    '.textarea-styled': {
      mb: 0,
    },
  },
});

const List = styled('ul', {
  p: '$2xl',
  gap: '$xs',
  mt: '2.5rem',
});

const ListItem = styled('li', {
  color: '#FFFFFF',
  fontSize: 14,
  opacity: 0.8,
  gap: '$sm',
});

const EmailBox = styled('div', {
  borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
  flex: 1,
  backgroundColor: '#FFFFF',
});

const EmailWrapper = styled('div', {
  padding: '48px 24px',
  gap: '20px',
  flexWrap: 'wrap',
  backgroundColor: '#FFFFF',
  '.email-row': {
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '.ant-form-item': {
      mb: 0,
      width: '$full',
    },
    '@md': {
      justifyContent: 'flex-start',
    },
  },
  '.submit-button': {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 2,
    letterSpacing: '-0.02em',
    color: '$primary',
    border: 'unset',
    padding: '8px 16px',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    mt: '$3xl',
    width: '$full',
    '&:hover': {
      svg: {
        path: {
          fill: '#fff',
        },
      },
    },
  },
});

// const Heading = styled('div', {
//   '.email-us': {
//     font: 'Articulat CF',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     fontSize: '32px',
//     lineHeight: '44px',
//     letterSpacing: '-0.02em',
//     color: '#000000',
//   },
//   '.fill-contact': {
//     pt: '32px',
//     font: 'Elza',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '16px',
//     lineHeight: '24px',
//     color: '#333333',
//   },
// });

const FormStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  input: {
    '&::placeholder': {
      opacity: '0.5',
    },
  },
  '@md': {
    width: '$full',
  },
});

const RowOne = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '24px',
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const OrganisationName = styled('div', {
  // width: '100%',
  '.organisation-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '332px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
    '@md': {
      width: '$full',
    },
  },
});

const RowTwo = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '16px',
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const DropDown = styled('div', {
  // width: '120px',
  '.ant-select-selector': {
    width: '120px !important',
    height: '56px !important',
    padding: '12px !important',
    '.ant-select-selection-placeholder': {
      fontSize: '16px',
    },
    '@md': {
      width: '$full !important',
    },
  },
  select: {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '120px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/select-dropdown.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1em top 50%',
    backgroundSize: '.65em auto',
    '@md': {
      width: '$full',
    },
  },
  '@md': {
    width: '$full',
  },
});

const FullName = styled('div', {
  // width: '196px',
  '.full-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '196px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
    '@md': {
      width: '$full',
    },
  },
});

const RowThree = styled('div', {
  // select: {
  //   font: 'Elza',
  //   fontStyle: 'normal',
  //   fontWeight: '400',
  //   fontSize: '16px',
  //   lineHeight: '24px',
  //   color: '#666666',
  //   width: '100%',
  //   position: 'relative',
  //   padding: '16px',
  //   background: '#FFFFFF',
  //   // border: '1px solid rgba(0, 0, 0, 0.1)',
  //   borderRadius: '10px',
  //   backgroundImage: 'url(../images/select-dropdown.svg)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'right 1em top 50%',
  //   backgroundSize: '.65em auto',
  '.requirement-brief': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    '@md': {
      width: '$full',
    },
    '&::placeholder': {
      color: '#666',
      opacity: 0.5,
      pl: 16,
      fontSize: 16,
      lh: 1.5,
    },
  },
  '.@sm': {
    width: '100%',
  },
  '@md': {
    width: '100%',
  },
});

const ListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '43px',
  justifyContent: 'space-between',
  '@lg': {
    gap: 20,
    alignItems: 'baseline',
  },
});

const ListBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  pl: 15,
});

const ListOne = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '.detail': {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.7,
    color: '#000000',
    opacity: 0.8,
  },
});

export default WhatYouNeedStyled;
export {
  CardGroup,
  Credits,
  DropDown,
  EmailBox,
  EmailWrapper,
  FormStyled,
  FullName,
  List,
  ListBox,
  ListItem,
  ListOne,
  ListWrapper,
  OrganisationName,
  RowOne,
  RowThree,
  RowTwo,
};
