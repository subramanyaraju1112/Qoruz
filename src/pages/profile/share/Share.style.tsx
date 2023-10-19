import { styled } from '@stitches-config/stitches.config';

const ShareStyled = styled('div', {
  bgColor: '#FFFFFF',
  boxShadow: '-2px 8.14815px 16px rgba(83, 30, 0, 0.03)',
  br: '16px 0px 0px 16px',
  width: 72,
  position: 'fixed',
  right: 0,
  top: '20vh',
  zIndex: 5,
  h5: {
    height: 60,
    bgColor: '#F6F6F6',
    br: '16px 0px 0px 0px',
    fontSize: '$md',
    ta: 'center',
    color: '#666666',
    fontWeight: '$semibold',
  },
  '@md':{
    width:59,
  },
});

const ShareListItem = styled('li', {
  width: '$full',
  a: {
    cursor: 'pointer',
    py: '$sm',
    width: '$full',
    '&:hover': {
      svg: {
        '.fill-social-icon': {
          fill: '#000',
        }
      }
    }
  },
  svg: {
    size: 20,
    '.fill-social-icon': {
      fill: '#666',
    }
  },
});

const ShareList = styled('ul', {
  gap: '$sm',
  py: '$sm',
});

export default ShareStyled;
export {
  ShareList,
  ShareListItem,
};
