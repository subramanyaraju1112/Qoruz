import { styled } from '@stitches-config/stitches.config';

const CreatorOther = styled('div', {
  display: 'flex',

  '.creator-image': {
    width: 40,
    height: 40,
    borderRadius: '50%',
    ml: '-10px',
    objectFit: 'cover',

    '&:first-child': {
      ml: 'unset',
    },
    '.icon-button': {
      width: 40,
      height: 40,
      '@lg':{
        size:32,
      }
    },
    '&:hover': {
      '.icon-button': {
        transform: 'scale(1.08)',
      },
    },
  },

  '.more-creator': {
    width: 40,
    height: 40,
    lineHeight: '43px',
    background: '#fff',
    borderRadius: '50%',
    // display: 'flex',
    // justify-content: 'center',
    ml: '-10px',
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    '@lg':{
      size:32,
      lineHeight:'36px',
    }
  },
});

export default CreatorOther;
