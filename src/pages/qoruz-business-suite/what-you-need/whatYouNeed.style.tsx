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
    backdropFilter: 'blur(2.5px)',
    br: '32px 32px 0px 0px',
    p: '3rem !important',
    minHeight: '46em',
    '@lg': {
      p: '1.5rem !important',
    },
    '@md': {
      minHeight: 'unset',
      px: '16px !important',
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
      maxWidth: '$full',
    },
    '@md': {
      ta: 'center',
      fontSize: '$h3',
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
    width: '50%',
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
    alignItems: 'flex-end',
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
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      bgColor: '$primary',
      br: '$lg',
      zIndex: -1,
      opacity: 0,
    },
    '&:hover': {
      h3: {
        color: '$primary',
      },
      '&:before': {
        opacity: 1,
        bottom: -12,
      },
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
  backdropFilter: 'blur(0.002px)',
  br: 32,
  mt: 36,

  '&.planning': {
    background: '#fff',
  },
  '.planning-row': {
    padding: '36px 24px',
    width: '100%',
    margin: '0!important',

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

// const Title = styled('div', {
//   h2: {
//     fontSize: '$h2',
//     fontWeight: '$bold',
//     lh: '$xs',
//     '@md': {
//       fontSize: '$h3',
//     },
//   },
//   span: {
//     lh: '$xs',
//     fontSize: '$h3',
//     color: '#666666',
//     fontWeight: '$medium',
//     '@md': {
//       fontSize: '$h4',
//     },
//   },
// });

const EmailBox = styled('div', {
  borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
  flex: 1,
  backgroundColor: '#FFFFF',
});

const EmailWrapper = styled('div', {
  padding: '48px 46px',
  backgroundColor: '#FFFFF',
  '.email-row': {
    justifyContent: 'center',
    '.ant-form-item': {
      mb: 0,
      width: '$full',
    },
  },
  '.submit-button': {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 2,
    letterSpacing: '-0.02em',
    color: '$primary',
    padding: '8px 16px',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'unset',
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
  width: '$full',
  input: {
    '&::placeholder': {
      opacity: '0.5',
    },
  },
});

const RowOne = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '24px',
  width: '$full',
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
  width: '100%',
  '.organisation-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '$full',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const CompanyName = styled('div', {
  // width: '100%',
  '.company-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const RowTwo = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '16px',
  width: '$full',
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
  width: '$full',
  '.ant-select-selector': {
    width: '$full !important',
    height: '56px !important',
    padding: '12px !important',
    '.ant-select-selection-placeholder': {
      fontSize: '16px',
    },
  },
  select: {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '$full',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/common/select-dropdown.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1em top 50%',
    backgroundSize: '.65em auto',
  },
});

const FullName = styled('div', {
  width: '$full',
  '.full-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '$full',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const RowThree = styled('div', {
  width: '$full',
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
    width: '100%',
    // backgroundImage: 'url(../images/common/select-dropdown.svg)',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right 1em top 50%',
    // backgroundSize: '.65em auto',
  },
});

const ListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  // gap: '43px',
  // justifyContent: 'space-between',
  // maxWidth: '194px',
  width: '$full',
  alignItems: 'center',
  gap: '43px',
  justifyContent: 'space-between',
});

const ListBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ListOne = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: 8,
  '.detail': {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.7,
    color: '#000000',
    opacity: 0.8,
  },
});

const ButtonBox = styled('div', {});

export default WhatYouNeedStyled;
export {
  ButtonBox,
  CardGroup,
  CompanyName,
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
