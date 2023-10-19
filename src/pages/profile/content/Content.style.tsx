import { styled } from '@stitches-config/stitches.config';

const ContentBlock = styled('div', {
  gap: '$sm',
  bgColor: '#FFFFFF',
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  br: 16,
  position: 'relative',
  '.chart-value':{
    padding:'$md',
    flexWrap:'wrap',
    gap:6,
    '.flex':{
      gap: 6,
      svg:{
        pt:4,
      }
    }
  }
});

const ContentStyled = styled('div', {
  gap: '$lg',
  br: 16,
  p: '$lg',
  h4: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    fontSize: 20,
    letterSpacing: '$xs',
    gap: 12,
    svg: {
      size: 20,
      '.fill-stroke-list-icon': {
        stroke: '#000',
      },
    },
  },
  'text.highcharts-credits':{
    display:'none',
  },
  
});

const ContentInfo = styled('div', {
  position: 'relative',
  span: {
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$xs',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#000000',
  },
  small: {
    fontSize: '$sm',
    letterSpacing: '$sm',
    color: '#A2A2A2',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const Figure = styled('figure', {
  height: 130,
  br: '$xs',
  overflow: 'hidden',
  position: 'relative',
  img: {
    size: '$full',
    objectFit: 'cover',
  },
});

const TabList = styled('ul', {
  gap: '$lg',
  '@md':{
    flexWrap:'wrap',
  }
});

const TabListItem = styled('li', {
  bgColor: 'rgba(188, 188, 188, 0.1)',
  br: 40,
  py: 2,
  px: '$md',
  fs: 0,
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$pill',
    color: '#666666',
    position: 'relative',
    top: -2,
  },
  '&.active': {
    bgColor: '$purple',
    span: {
      color: '$white',
    },
  },
});

const IconCopy = styled('figure', {
  cursor: 'pointer',
  position: 'absolute',
  top: '$xs',
  right: '$xs',
});

const ContentHeader = styled('div', {
  flexWrap:'wrap',
});

const HastagList = styled('ul', {
  gap: '$sm',
});

const HastagListItem = styled('li', {
  bgColor: 'rgba(188, 188, 188, 0.1)',
  br: 40,
  py: 2,
  px: '$md',
  fs: 0,
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$pill',
    color: '#666666',
    position: 'relative',
    top: -2,
  },
});

const ActionList = styled('ul', {
  gap: '$sm',
});

const ActionListItem = styled('li', {
  gap: '$xs',
  span: {
    fontWeight: '$medium',
    fontSize: 10,
    letterSpacing: '$sm',
    color: '#333333',
  },
});

const ContentHastags = styled('div', {
  p: '$lg',
  gap: '$lg',
  borderTop: '1px solid rgb(136 151 152 / 10%)',
  h5: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    fontSize: 16,
    letterSpacing: '$sm',
    color: '#000000',
  },
});

const ContentList = styled('ul', {
  gap: '$lg',
});

const ContentListItem = styled('li', {
  width: 'calc(25% - 12px)',
  a: {
    bgColor: '$white',
    boxShadow:
      '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
    br: '$md',
    p: '$xs',
    gap: '$xs',
    textDecoration: 'none',
  },
});

const ContentDetailsHide = styled('div', {
  position: 'absolute',
  background: 'rgba(250, 250, 250, 0.6)',
  backdropFilter: 'blur(6px)',
  borderRadius: 16,
  width: '$full',
  height: 578,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
  top: 0,
  left: 0,
  '.blur-detail': {
    flexDirection: 'column',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  '@xl':{
    height:688,
  },
  '@lg':{
    height:546,
  },
  '@md':{
    height:734,
  },
  '@sm':{
    height:700,
  },
});

export default ContentStyled;
export {
  ActionList,
  ActionListItem,
  ContentBlock,
  ContentDetailsHide,
  ContentHastags,
  ContentHeader,
  ContentInfo,
  ContentList,
  ContentListItem,
  Figure,
  HastagList,
  HastagListItem,
  IconCopy,
  TabList,
  TabListItem,
};
