import { styled } from '@stitches-config/stitches.config';

const WebinarpointContainer = styled('div', {
  '.title': {
    fontFamily: 'elza-text',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#000000',
    mb:'$2xl',
  },
  '.listrow': {
    flexDirection: 'column',
    '.list': {
      display: 'flex',
      padding: '10px 10px 5px',
      '.list-icon': {
        mr: 19,
      },
      span: {
        fontFamily: 'articulat-cf',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.3,
        color: '#000000',
      },
    },
  },
});

export default WebinarpointContainer;
