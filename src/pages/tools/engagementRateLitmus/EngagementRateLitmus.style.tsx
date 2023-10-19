import { styled } from '@stitches-config/stitches.config';

const RateLitmus = styled('section', {
  maxWidth:960,
  width:'$full',
  mx:'auto',
  marginTop: '5rem',
  '.tools-list': {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: 'justify',
    color: 'rgb(102, 102, 102)',
    li: {
      mt: '10px',
      position: 'relative',
      lineHeight: 1.8,
      '&::before': {
        content: '',
        width: 5,
        height: 5,
        background: '#666',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 44,
        left: '-10px',
        top: '10px',
        bottom: '0px',
      },
    },
  },
  '@lg': {
    mt: '1rem',
  },
});

const LitmusStrip = styled('div', {
  background:
    'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #FFF0E6 131.25deg, #F7EBFF 313.13deg, #FFFFFF 360deg)',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: '32px',
  padding: '53px 30px 44px 30px',

  '.justify-between': {
    justifyContent: 'space-between !important',
  },

  '.mt-1': {
    paddingTop: '8px',
    width: '$full',
    justifyContent: 'center !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },
  '.stripwidth': {
    width: '$full',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },
  '.width-10': {
    maxWidth: '108px !important',
    width: '$full',
    height: 50,
    '.tooltiptext': {
      position: 'absolute',
      background:
        'linear-gradient(270deg, #FFFFFF 77.04%, #F6F6F6 115%), #FFFFFF',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
      borderRadius: '32px',
      width: '247px',
      height: '110px',
      zIndex: 2,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '24px 27px',
      bottom: '-117px',
      left: '-60px',
      opacity: '0',
      transition: '0.3s ease-in',
      visibility: 'hidden',

      '.influence-percentage ': {
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: '#333333',
      },

      '.influence-area': {
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: 1.8,
        color: '#666666',
      },

      '&:after': {
        content: '',
        position: 'absolute',
        top: '-44px',
        left: '50%',
        marginLeft: '-26px',
        borderWidth: '23px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #fff transparent  ',
      },
    },

    '&:hover': {
      '.tooltiptext': {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
  '.grade1': {
    background: '#FC6C85',
  },
  '.grade2': {
    background: '#FC94A1',
  },
  '.grade3': {
    background: '#FFCCCB',
  },
  '.grade4': {
    background: '#FFD7CA',
  },
  '.grade5': {
    background: '#FFF0CA',
  },
  '.grade6': {
    background: '#FEFFC1',
  },
  '.grade7': {
    background: '#ECFFCC',
  },
  '.grade8': {
    background: '#CDFFCC',
  },
  '.grade9': {
    background: '#B0F5AB',
  },
  '.grade10': {
    background: '#90EF90',
  },

  '.detailsmall': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#666666',
    paddingTop: 22,
  },
});

const LitmusMark = styled('div', {
  borderWidth: '1px 1px 0px 1px',
  borderStyle: 'solid',
  borderColor: '#999999',
  maxWidth: '400px',
  width: '$full',
  '.detail': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 2.75,
    color: '#666666',
    textAlign: 'center',
  },
});

export default RateLitmus;
export { LitmusMark, LitmusStrip };
