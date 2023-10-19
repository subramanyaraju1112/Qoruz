import { styled } from '@stitches-config/stitches.config';

const AsideStyled = styled('aside', {
  bgColor: '$white',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
  br: 16,
  p: '$sm',
});

const AsideListItem = styled('li', {
  gap: 12,
  p: '$sm $md',
  cursor: 'pointer',
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$sm',
    color: '$text300',
  },
  svg: {
    size: 12,
  },
  '&:hover': {
    span: {
      color: '$primary',
    },
    '.fill-stroke-list-icon': {
      stroke: '$primary',
    },
    '.fill-aside-list-icon': {
      fill: '$primary',
    },
  }
});

const AsideNavBlock = styled('div', {
  br: '$md',
  h5: {
    fontSize: '$md',
    gap: '$sm',
    p: '$sm $md',
    color: '#666666',
    cursor: 'pointer',
    svg: {
      size: 20,
    },
    '&:hover': {
      color: '#000',
      '.fill-aside-title-icon': {
        fill: '#000',
      }
    }
  },
  '&.open': {
    bgColor: '#F9F9F9',
  }
});

const AsideList = styled('ul', {
});

export default AsideStyled;
export {
  AsideList,
  AsideListItem,
  AsideNavBlock,
};
