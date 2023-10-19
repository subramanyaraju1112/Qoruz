import { styled } from '@stitches-config/stitches.config';

const TeamContainer = styled('div', {
  mt: '3rem',
  pb:'$6xl',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  '.team-title': {
    fontFamily: 'articulat-cf',
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#000000',
    width: 'fit-content',
    position: 'relative',
    '.line': {
      position: 'absolute',
      bottom: '-1px',
      right: '-1px',
    },
  },
});

const TeamDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  '.team-detail': {
    flexDirection: 'column',
    gap: 16,
    alignItems:'center',

    '.team-image': {
      position: 'relative',
      width: 'fit-content',
      '.image': {
        size: 200,
        '@lg':{
          size:100,
        }
      },
      '.social-icon': {
        position: 'absolute',
        bottom: 8,
        right: 18,
        '@lg':{
          size:18.75,
        }
      },
    },
    '.detail': {
      '.name': {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#000000',
        '@lg':{
          fontSize: 16,
        }
      },
      '.designation': {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.3,
        textAlign: 'center',
        color: '#000000',
        '@lg':{
          fontSize: 12,
        }
      },
    },
  },
  '@lg':{
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    gap:24,
  }
});

export default TeamContainer;
export { TeamDetails };
