import { styled } from '@stitches-config/stitches.config';

const AdvanceFilterStyled = styled('div', {
  '.border-area': {
    border: '1px solid rgba(153, 153, 153, 0.2)',
    borderRadius: 16,
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    mb: '$5xl',
    maxWidth: 254,
    width: '$full',
    '@lg': {
      maxWidth: '$full',
      mb: '$xl',
    },
  },
  small: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#333333',
  },
  '.reset-btn': {
    cursor: 'pointer',
  },
});

const AdvanceFilterType = styled('div', {
  mt: 25,
  width: 206,
  '.type-heading': {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.02em',
    color: '#333333',
    borderBottom: '1px solid #999999',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingBottom: '11px',
    marginBottom: '8px',
  },
  '.extra-option': {
    width: '35px',
    height: '35px',
    background: 'rgba(153, 153, 153, 0.1)',
    borderRadius: '50%',
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    verticalAlign: 'middle',
    fontSize: '14px',
    color: 'rgb(102, 102, 102)',
  },
  '.pill-list': {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap',
    '.tag-pill': {
      background: 'rgba(153, 153, 153, 0.1)',
      borderRadius: '40px',
      padding: ' 8px 16px',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1,
      color: '#666666',
      cursor: 'pointer',
    },
    '.selected': {
      backgroundColor: '#8E5BE8',
      color: 'white',
    },
  },
  '.search-industry': {
    mt: 16,
    padding: '8px 16px',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.13)',
    borderRadius: 40,
    height: 40,
    width: '$full',
  },
  '.show-search': {
    borderWidth: '0px 1px 1px 1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: '24px 8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    '.search-drop': {
      color: ' #666',
      fontSize: 16,
      borderRadius: 10,
      padding: '8px 16px',
      lh: '36px',
      height: 50,
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(255, 181, 160, 0.2)',
      },
      '&:active': {
        background: '#FF6435',
        color: '#fff',
      },
    },
  },
  '@lg': {
    width: '$full',
  },
  '&.objective-search': {
    mt: 1,
  },
});

export default AdvanceFilterStyled;
export { AdvanceFilterType };
