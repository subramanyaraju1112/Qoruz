import { styled } from '@stitches-config/stitches.config';

const OtherCreatorStyled = styled('section', {
  '.single-creator-card': {
    transition: 'all 0.3s ease 0s',
    maxWidth: '264px !important',
    width: '264px !important',
    '&:hover': {
      transform: 'scale(1.03)',
    },
    '@lg': {
      maxWidth: '200px !important',
      width: '200px !important',
    },
  },
  pt: '$4xl',
  '.heading': {
    textAlign: 'center',
    fontWeight: '$bold',
    lh: 0.96,
  },
  '.details': {
    maxWidth: 850,
    width: '$full',
    ml: 'auto',
    mr: 'auto',
    mt: '$2xl',
    mb: '$3xl',
    color: '#666',
    fontSize: 20,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  '.creaator-row': {
    overflowX: 'auto',
    overflowY: 'hidden',
    '&::-webkit-scrollbar':{
      width: '0.4em',
    },
  },
  '.othercreator': {
    pt: '$2xl',
    flexWrap: 'unset !important',
    justifyContent:'center !important',
    '@xl':{
      gap:'14px',
    },
    '.cat-card': {
      background: '#FFFFFF',
      border: ' 1px solid #E9E9EA',
      boxShadow:
        '0px 1.85185px 3.14815px rgba(83, 30, 0, 0.02), 0px 24px 25.4815px rgba(83, 30, 0, 0.04)',
      borderRadius: '32px',
      mb: '$3xl',
      minHeight: 200,
      cursor: 'pointer',
      textDecoration: 'none',
      '.card-detail': {
        padding: '20px 25px',
        '.cat-name': {
          fontWeight: 500,
          fontSize: '18px',
          lh: '1.67',
          color: '#7120FD',
          '@lg': {
            fontSize: 16,
          },
        },
        '.text-Entertainment': {
          color: '#7120FD',
        },
        '.text-Family': {
          color: '#FF6435',
        },
        '.text-Music': {
          color: '#31B14D',
        },
        '.text-General': {
          color: '#FABB1A',
        },
        h3: {
          fontFamily: 'elza-text',
          fontWeight: 700,
          fontSize: '20px',
          lh: 1.2,
          color: '#000000',
          mt: '$xs',
          '@lg': {
            fontSize: 16,
          },
        },
      },
      '.card-bottom': {
        padding: '14px 13px 18px 20px',
        lh: 0.5,
        border: '1px solid #EBE4D1',
        borderRadius: '0px 0px 32px 32px',
      },
      '.bg-Entertainment': {
        background: '#F8F3FF',
      },
      '.bg-Family': {
        background: '#FFF5F3',
      },
      '.bg-Music': {
        background: '#EFF7EE',
      },
      '.bg-General': {
        background: '#FFF9E9',
      },
      '@lg':{
        width:'200px',
      }
    },
    '.lastcard': {
      gap: 11,
      '.more-cat': {
        maxWidth: 86,
        width: '$full',
        fontWeight: 600,
        fontSize: 16,
        lh: 1,
        color: '#666',
        fontFamily: 'articulat-cf',
      },
    },
  },
});

export default OtherCreatorStyled;
