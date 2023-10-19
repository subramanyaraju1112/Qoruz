import { styled } from '@stitches-config/stitches.config';

const RootPageStyled = styled('section', {
  mt: '$6xl',
  '.heading': {
    fontFamily: 'elza-text',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '34px',
    textAlign: 'justify',
    letterSpacing: '-0.02em',
    color: ' #999999',
    opacity: 0.5,
  },
  '.all-list': {
    paddingTop: 46,
    marginBottom: 24,
  },
  '.top-list': {
    mb: 24,
  },
  '.othercreator': {
    pt: '$2xl',
    '@xl': {
      // gap: '14px',
    },
    '.single-creator-card': {
      display: 'flex',
      '@md': {
        mx: 'auto !important',
        width: '50% !important',
        maxWidth: '50% !important',
      },
      '@sm': {
        mx: 'auto !important',
        width: '100% !important',
        maxWidth: '100% !important',
      },
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
      flex: 1,
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
        border: '1px solid rgb(234 229 241)',
        borderRadius: ' 0px 0px 32px 32px',
        background: '#F8F3FF',
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
      '@lg': {
        width: '200px',
      },
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

export default RootPageStyled;
