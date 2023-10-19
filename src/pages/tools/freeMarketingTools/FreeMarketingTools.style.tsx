import { styled } from '@stitches-config/stitches.config';

const FreeTools = styled('section', {});

const MarketingToolsBody = styled('div', {
  marginTop: '-280px',
  background: '#fff',
  borderTopLeftRadius: '32px',
  borderTopRightRadius: '32px',
  '.tool-platform': {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    '.platform-button': {
      background: 'rgba(153, 153, 153, 0.1)',
      padding: '8px 16px',
      borderRadius: 40,
      fontSize: 16,
      lineHeight: 1.5,
      color: '#666666',
      cursor: 'pointer',
    },
  },
});

const ToolMarketingHeading = styled('div', {
  padding: '72px 120px 74px',
  h1: {
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 0.92,
    letterSpacing: '-0.02em',
    color: '#000000',
    textAlign: 'center',
    '.mark': {
      fontFamily: 'articulat-cf',
      color: '#FF6435',
    },
  },
  '.details': {
    fontSize: 20,
    lineHeight: 1.8,
    textAlign: 'center',
    color: '#666666',
    paddingBottom: 24,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
  '@lg':{
    padding: '72px 30px 74px',
    h1: {
      fontSize:35,
    },
    '.details': {
      fontSize:18,
    },
  },
});

export default FreeTools;
export { MarketingToolsBody, ToolMarketingHeading };
